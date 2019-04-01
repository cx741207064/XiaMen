(function($) {
	var preExp=/<pre>([\s\S]*)<\/pre>/i
	/**
	 * IFrame File Upload Service
	 * 
	 */
	var createUploadIframe = function(id, uri) {
		var frameId = 'jUploadFrame' + id;
		var iframeHtml = '<iframe id="' + frameId + '" name="' + frameId
				+ '" style="position:absolute; top:-9999px; left:-9999px"';
		if (window.ActiveXObject) {
			if (typeof uri == 'boolean') {
				iframeHtml += ' src="' + 'javascript:false' + '"';

			} else if (typeof uri == 'string') {
				iframeHtml += ' src="' + uri + '"';

			}
		}

		iframeHtml += ' />';
		$(iframeHtml).appendTo(document.body);

		return $('#' + frameId);
	}

	var prepareInputs2 = function(data, $form, prefix) {
		prefix = prefix || "";
		for ( var i in data) {
			var obj = data[i];
			if (typeof obj == "function")
				continue;
			else if (typeof obj != "object")
				$(
						'<input type="hidden" name="' + prefix + i
								+ '" value="' + obj + '" />').appendTo($form);
			else
				prepareInputs(obj, $form, prefix + i + ".");
		}

	}

	var prepareInputs = function($form, $scope) {
		$("input", $scope).each(function() {
			var oldElement = this;
			var newElement = $(oldElement).clone();
			if ($(newElement).is("[type=file]")) {
			} else
				$(newElement).appendTo($form);
		});
		$("select", $scope).each(
				function() {
					var oldElement = this;
					/*
					 * var newElement = $(oldElement).clone();
					 */
					var newElement = $("<input type='hidden' name='"
							+ $(oldElement).attr("name") + "'/>");
					$(newElement).val($(oldElement).val());
					$(newElement).appendTo($form);

				});
		$("textarea", $scope).each(function() {
			var oldElement = this;
			var newElement = $(oldElement).clone();
			$(newElement).appendTo($form);
		});

		/*
		 * for ( var i in data) { var obj=data[i]; if (typeof obj == "function")
		 * continue; else if (typeof obj != "object") $('<input type="hidden"
		 * name="' + prefix+i + '" value="' + obj + '" />').appendTo($form);
		 * else prepareInputs(obj,$form,prefix+i+"."); }
		 */
	}
	
	
	var createUploadForm = function(id, data, scope) {
		var formId = 'jUploadForm' + id;
		var $form = $('<form  action="" method="POST" name="' + formId
				+ '" id="' + formId + '" enctype="multipart/form-data"></form>');

		var $scope = null;
		if (scope) {
			if (scope.tagName)
				$scope = $(scope);
			else
				$scope = $("#" + scope);

		}

		//
		prepareInputs($form, $scope);

		$("input[type='file']", $scope).each(function() {
			var oldElement = this;
			var newElement = $(oldElement).clone();
			
			$(oldElement).before(newElement);
			newElement.data("oldFile",$(oldElement));
			$(oldElement).appendTo($form);
		});

		$form.css('position', 'absolute');
		$form.css('top', '-1200px');
		$form.css('left', '-1200px');
		$form.appendTo('body');
		return $form;
	}

	var upload = function(s) {
		var id = new Date().getTime()
		//s.timeout = s.timeout || 20000;
		
		var $form = createUploadForm(id, s.data, s.scope);

		var $iframe = createUploadIframe(id, false);
		var frameId = $iframe.attr("id");
		var formId = $form.attr("id");

		$form.attr('action', s.url);
		$form.attr('method', 'POST');
		$form.attr('target', frameId);
		$form.attr('enctype', 'multipart/form-data');

		var uploadCallback = function(timeout) {
			requestDone = true;
			if (timeout == "timeout") {
				if (s.error) {
					var xhr = {
						readyState : 4,
						status : "timeout",
						responseText : "调用超时",
						msg:"调用超时"
					};
					s.error(xhr);
				}
			} else {
				var io = $iframe[0];
				var xml = {};
				try {
					if (io.contentWindow) {
						xml.responseText = io.contentWindow.document.body ? io.contentWindow.document.body.innerHTML
								: null;
						xml.responseXML = io.contentWindow.document.XMLDocument ? io.contentWindow.document.XMLDocument
								: io.contentWindow.document;

					} else if (io.contentDocument) {
						xml.responseText = io.contentDocument.document.body ? io.contentDocument.document.body.innerHTML
								: null;
						/*
						 * xml.responseXML =
						 * io.contentDocument.document.XMLDocument ?
						 * io.contentDocument.document.XMLDocument :
						 * io.contentDocument.document;
						 */
					} else {
					}
				} catch (e) {
					xf.info(e);
				}


				xml.responseText = xml.responseText || "";
				if(preExp.test(xml.responseText)){
					xml.responseText=RegExp.$1;
					//xf.info("has pre");
				}
				// var npos = xml.responseText.indexOf("</html>");
				var succ = true;
				try {
					eval("(" + xml.responseText + ")");
				} catch (e) {
					succ = false;
				}

				if (!succ) {
					npos = xml.responseText.indexOf("Status");
					var status = xml.responseText
							.substring(npos + 7, npos + 10);
					if (s.error) {
						var xhr = {
							readyState : 4,
							status : status,
							responseText : "系统异常"
						};
						xf.error(xml.responseText);
						s.error(xhr);
					}
				} else {

					if (s.success)
						s.success(xml.responseText, status, xml);
				}

				//
				// reset file
				//
				var $scope = null;
				var scope = s.scope;
				if (scope) {
					if (scope.tagName)
						$scope = $(scope);
					else
						$scope = $("#" + scope);

				}
				$("input[type='file']", $scope)
						.each(
								function() {
									var newElement = this;
									/*
									var oldElement = $(
											"input[type='file'][name='"
													+ $(newElement)
															.attr("name")
													+ "']", $form);
									*/
									var oldElement=$(newElement).data("oldFile");
									$(newElement).before(oldElement);
									$(newElement).remove();
								});

			}
			setTimeout(function() {
				try {
					$form.remove();
					$iframe.remove();
				} catch (e) {
				}
			}, 100);
		};
		var requestDone = false;

		if (s.timeout > 0) {
			setTimeout(function() {
				if (!requestDone)
					uploadCallback("timeout");
			}, s.timeout);
		}
		$form.submit();

		$iframe.load(uploadCallback);
	}

	otp4.fileUpload = upload;

	/**
	 * File Upload Controller
	 */
	var fileFn = function(el, vm) {
		var fileId = $(el).attr("xf-file");
		$('#' + fileId).hide();

		$(el).on("click", function() {
			var $file = $('#' + fileId);
			$file.on("change", function() {
				var $cnt = $(el).next("span");
				var fname = $('#' + fileId).val();
				if ($cnt.length > 0)
					$cnt.html(fname);
				else
					$(el).html(fname);
				$file.off("change", "**");
			});
			$file.click();
			return false;
		});
	}

	otp4.DiFactory.reg("[xf-file]", fileFn);
})(jQuery);
