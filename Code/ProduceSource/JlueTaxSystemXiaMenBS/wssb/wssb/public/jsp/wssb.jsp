




<html>
<head>
<title>我的办税大厅</title>
<meta http-equiv="Content-Type" content="text/html; charset=GBK">
<script>
	function releaseSession(){
		window.location.href="/wssb/wssb/public/jsp/logoutGZ.jsp";
	}	
</script>
</head>

<frameset rows="115,*" cols="*" frameborder="NO" border="0" framespacing="0" onunload="releaseSession();">
  <frame name="topFrame" scrolling="NO" src="/wssb/wssb/layout/top.jsp">
  <frame name="mainFrame" id="mainFrame" src="/wssb/wssb/layout/center.jsp"  noresize="noresize" scrolling="no"/>
</frameset>
<noframes>
</html>
