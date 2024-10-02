<%@ Page Title="Results" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Results.aspx.cs" Inherits="resultatside.Results" %>

<asp:Content ID="HeadContent" ContentPlaceHolderID="HeadContent" runat="server">
    <script src="./Scripts/main.js" defer></script>
</asp:Content>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <main aria-labelledby="title" id="resultsPage">
        <a href="Default.aspx" class="results-button">
            <i class="fa-solid fa-check-to-slot"></i><span>Stem</span></a>

        <p>Vinneren av valget er<span id="winner"></span></p>

        <div class="chart">
            <asp:DropDownList AutoPostBack="true" ID="DropDownListKommunerResults" runat="server" OnSelectedIndexChanged="getFromStemmerBtn">
                <asp:ListItem Selected="True" Value="0">Oppgi Kommune Her...</asp:ListItem>
            </asp:DropDownList>
            <div class="linesNames">
                <div class="pNavn"></div>
                <div class="lines"></div>
            </div>
        </div>
        <div class="pieChart">
            <div class="pie"></div>
            <div class="pieSide">
            </div>
        </div>

        <table ID="invisListStemmer" runat="server" border="1" class="invis"></table>
    </main>
</asp:Content>
