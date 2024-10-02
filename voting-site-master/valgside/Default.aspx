<%@ Page Title="Lukas's Stemme-Nettside" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="valgside.Default" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">

<a href="Results.aspx" class="results-button"><i class="fa-solid fa-square-poll-vertical"></i><span>Resultater</span></a>

<div class="partiinfo invis">
    <div class="cross" onclick="stem('empty')"></div>
    <h1 onclick="document.querySelector('.partiinfo').classList.toggle('partiinfo-open')">Rødt</h1>
    <h4 onclick="document.querySelector('.partiinfo').classList.toggle('partiinfo-open')">Rødt er kult, eller?</h4>
    <div class="focus"></div>
</div>

<div class="partiLinje" id="partiLinje">
    <h1 class="t1">BRUK DIN STEMME!</h1>

    <div class="komm-fnum">
        <asp:DropDownList ID="DropDownListKommuner" runat="server">
            <asp:ListItem Selected="True" Value="0">Oppgi Kommune Her...</asp:ListItem>
        </asp:DropDownList>
        <input maxlength="11" runat="server" id="pNr" onkeypress="return event.keyCode != 13" 
            type="text" class="FnumBtn" pattern="\d*" placeholder="Oppgi Fødselsnummer Her..." />
    </div>

    <h2 id="errorMsg" runat="server">Velg et parti fra Linja Under</h2>

    <div class="partier">
        <div class="parti">
            <button class="Nstem stemKnapp invis" id="B1" onclick="clickAspBtn(this)">Stem!</button>
            <img class="parti1" src="./img/Rødt.png" onclick="stem(&quot;Rødt&quot;)">
        </div>
        <div class="parti">
            <button class="Nstem stemKnapp invis" id="B2" onclick="clickAspBtn(this)">Stem!</button>
            <img class="parti2" src="./img/Sosialistisk Venstreparti.png" onclick="stem(&quot;Sosialistisk Venstreparti&quot;)">
        </div>
        <div class="parti">
            <button class="Nstem stemKnapp invis" id="B3" onclick="clickAspBtn(this)">Stem!</button>
            <img class="parti3" src="./img/Arbeiderpartiet.png" onclick="stem(&quot;Arbeiderpartiet&quot;)">
        </div>
        <div class="parti">
            <button class="Nstem stemKnapp invis" id="B4" onclick="clickAspBtn(this)">Stem!</button>
            <img class="parti4" src="./img/Senterpartiet.png" onclick="stem(&quot;Senterpartiet&quot;)">
        </div>
        <div class="parti">
            <button class="Nstem stemKnapp invis" id="B5" onclick="clickAspBtn(this)">Stem!</button>
            <img class="parti5" src="./img/Miljøpartiet De Grønne.png" onclick="stem(&quot;Miljøpartiet De Grønne&quot;)">
        </div>
        <div class="parti">
            <button class="Nstem stemKnapp invis" id="B6" onclick="clickAspBtn(this)">Stem!</button>
            <img class="parti6" src="./img/Kristelig FolkeParti.png" onclick="stem(&quot;Kristelig FolkeParti&quot;)">
        </div>
        <div class="parti">
            <button class="Nstem stemKnapp invis" id="B7" onclick="clickAspBtn(this)">Stem!</button>
            <img class="parti7" src="./img/Venstre.png" onclick="stem(&quot;Venstre&quot;)">
        </div>
        <div class="parti">
            <button class="Nstem stemKnapp invis" id="B8" onclick="clickAspBtn(this)">Stem!</button>
            <img class="parti8" src="./img/Høyre.png" onclick="stem(&quot;Høyre&quot;)">
        </div>
        <div class="parti">
            <button class="Nstem stemKnapp invis" id="B9" onclick="clickAspBtn(this)">Stem!</button>
            <img class="parti9" src="./img/Fremskrittspartiet.png" onclick="stem(&quot;Fremskrittspartiet&quot;)">
        </div>
    </div>

    <div class="Epartier invis" style="">
        <div class="Eparti">
            <button class="Nstem stemKnapp invis" id="B10" onclick="clickAspBtn(this)">Stem!</button>
            <img class="parti10" src="./img/Alliansen.png" onclick="stem(&quot;Alliansen&quot;)">
        </div>
        <div class="Eparti">
            <button class="Nstem stemKnapp invis" id="B11" onclick="clickAspBtn(this)">Stem!</button>
            <img class="parti11" src="./img/Feministisk Initiativ.png" onclick="stem(&quot;Feministisk Initiativ&quot;)">
        </div>
        <div class="Eparti">
            <button class="Nstem stemKnapp invis" id="B12" onclick="clickAspBtn(this)">Stem!</button>
            <img class="parti12" src="./img/Folkets Parti.png" onclick="stem(&quot;Folkets Parti&quot;)">
        </div>
        <div class="Eparti">
            <button class="Nstem stemKnapp invis" id="B13" onclick="clickAspBtn(this)">Stem!</button>
            <img class="parti13" src="./img/Helsepartiet.png" onclick="stem(&quot;Helsepartiet&quot;)">
        </div>
        <div class="Eparti">
            <button class="Nstem stemKnapp invis" id="B14" onclick="clickAspBtn(this)">Stem!</button>
            <img class="parti14" src="./img/Innovasjon og Teknologipartiet.png" onclick="stem(&quot;Innovasjon og Teknologipartiet&quot;)">
        </div>
        <div class="Eparti">
            <button class="Nstem stemKnapp invis" id="B15" onclick="clickAspBtn(this)">Stem!</button>
            <img class="parti15" src="./img/Liberalistene.png" onclick="stem(&quot;Liberalistene&quot;)">
        </div>
        <div class="Eparti">
            <button class="Nstem stemKnapp invis" id="B16" onclick="clickAspBtn(this)">Stem!</button>
            <img class="parti16" src="./img/Norges Kommunistiske Parti.png" onclick="stem(&quot;Norges Kommunistiske Parti&quot;)">
        </div>
        <div class="Eparti">
            <button class="Nstem stemKnapp invis" id="B17" onclick="clickAspBtn(this)">Stem!</button>
            <img class="parti17" src="./img/Norgesdemokratene.png" onclick="stem(&quot;Norgesdemokratene&quot;)">
        </div>
        <div class="Eparti">
            <button class="Nstem stemKnapp invis" id="B18" onclick="clickAspBtn(this)">Stem!</button>
            <img class="parti18" src="./img/Partiet Sentrum.png" onclick="stem(&quot;Sentrum&quot;)">
        </div>
    </div>

    <div class="linje" onclick="flerePartier()"></div>

    <div class="lTxt">
        <h3>Sosialistisk</h3>
        <h5 onclick="flerePartier()">Flere <span>Partier</span></h5>
        <h4>Borgelig</h4>
    </div>

    <%--<asp:Button Text="Vote 20 times" OnClick="VoteBot" runat="server" />--%>
    <asp:TextBox type="number" runat="server" ID="VoteBotInput" OnLoad="VoteBot"></asp:TextBox>
</div>

<asp:DropDownList ID="DBpNrLst" runat="server" CssClass="invis"></asp:DropDownList>
<table ID="invisListStemmer" runat="server" border="1" class="invis"></table>

<script src="./Scripts/main.js"></script>
</asp:Content>
