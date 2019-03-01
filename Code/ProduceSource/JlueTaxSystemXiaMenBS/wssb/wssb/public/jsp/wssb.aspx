<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="wssb.aspx.cs" Inherits="JlueTaxSystemXiaMenBS.wssb.wssb.wssb" %>

<!DOCTYPE html>
<html>
<head>
    <title>我的办税大厅</title>
    <meta http-equiv="Content-Type" content="text/html; charset=GBK">
    <script>
        function releaseSession() {
            window.location.href = "/wssb/wssb/public/jsp/logoutGZ.jsp";
        }
    </script>
</head>

<frameset rows="115,*" cols="*" frameborder="NO" border="0" framespacing="0">
  <frame name="topFrame" scrolling="NO" src="/wssb/wssb/layout/top.aspx">
  <frame name="mainFrame" id="mainFrame" src="/wssb/wssb/layout/center.aspx"  noresize="noresize" scrolling="no"/>
</frameset>
<noframes>
</html>
