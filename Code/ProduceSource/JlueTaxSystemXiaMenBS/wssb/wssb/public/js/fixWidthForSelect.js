var indexForSelect = 1;
function FixWidthForSelsct(selectObj) {
	if (navigator.userAgent.toLowerCase().indexOf("msie")<0) {
		return;
	}
	
	var newSelectObj = document.createElement("select");
	newSelectObj = selectObj.cloneNode(true);
	newSelectObj.selectedIndex = selectObj.selectedIndex;
	newSelectObj.id = "newSelectObj" + indexForSelect;

	var e = selectObj;
	var absTop = e.offsetTop;
	var absLeft = e.offsetLeft;
	while (e = e.offsetParent) {
		absTop += e.offsetTop;
		absLeft += e.offsetLeft;
	}
	with (newSelectObj.style) {
		position = "absolute";
		top = absTop + "px";
		left = absLeft + "px";
		width = "auto";
	}

	var rollback = function() {
		RollbackWidthForSelsct(selectObj, newSelectObj);
	};
	if (window.addEventListener) {
		newSelectObj.addEventListener("blur", rollback, false);
		newSelectObj.addEventListener("change", rollback, false);
	} else {
		newSelectObj.attachEvent("onblur", rollback);
		newSelectObj.attachEvent("onchange", rollback);
	}

	selectObj.style.visibility = "hidden";
	document.body.appendChild(newSelectObj);
	
	var newDiv = document.createElement("div");
		newDiv.id = "newDivForSelect" + indexForSelect;
	with (newDiv.style) {
		position = "absolute";
		top = (absTop - 10) + "px";
		left = (absLeft - 10) + "px";
		width = newSelectObj.offsetWidth + 20;
		height = newSelectObj.offsetHeight + 20;
		
		background = "transparent";
		// background = "green";
	}
	document.body.appendChild(newDiv);
	
	newSelectObj.focus();
	
	var enterSel = "false";
	var enter = function() {
		enterSel = enterSelect();
	};
	newSelectObj.onmouseover = enter;

	var leavDiv = "false";
	var leave = function() {
		leavDiv = leaveNewDivForSelsct(selectObj, newSelectObj, newDiv, enterSel);
	};
	newDiv.onmouseout = leave;
	
	indexForSelect++;
}

function RollbackWidthForSelsct(selectObj, newSelectObj) {
	selectObj.selectedIndex = newSelectObj.selectedIndex;
	selectObj.style.visibility = "visible";
	if (document.getElementById(newSelectObj.id) != null) {
		
		//ÒÆ³ýdivºóÔÙÒÆ³ýselectObj
		var index = newSelectObj.id.substring(12, newSelectObj.id.length);
		var newDivForSelectObj = document.getElementById("newDivForSelect" + index);
		document.body.removeChild(newDivForSelectObj);

		document.body.removeChild(newSelectObj);
	}
}

function enterSelect() {
	return "true";
}

function leaveNewDivForSelsct(selectObj, newSelectObj, newDiv, enterSel) {
	if (enterSel == "true") {
		RollbackWidthForSelsct(selectObj, newSelectObj);
	}
}