<%@ Page Language="C#" MasterPageFile="~/CMSTemplates/WindCreekMontgomery/Blank.Master" AutoEventWireup="true" CodeFile="HomePage.aspx.cs" Inherits="CMSTemplates_WindCreekMontgomery_Templates_HomePage" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="BodyContent" Runat="Server">
<cms:CMSPagePlaceholder ID="plcZones" runat="server">
    <LayoutTemplate>
          <cms:CMSWebPartZone ZoneID="zoneA" runat="server" />
    </LayoutTemplate>
</cms:CMSPagePlaceholder>
</asp:Content>

