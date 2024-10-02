    const url = window.location.href;

    function stem(parti) {
        document.querySelectorAll('.Nstem').forEach(e => e.classList.add('invis'));

        if (parti !== 'empty') {
            document.querySelector('.partiinfo').classList.remove('invis');
            document.querySelector('.partiinfo h1').innerHTML = parti;
        }
        switch (parti) {
            case 'empty':
                document.body.style.background = 'rgb(224, 222, 222)';
                document.querySelector('.partiinfo').classList.add('invis');
                document.querySelector('.partiinfo').classList.remove('partiinfo-open');
                break;
            case 'R\u00f8dt':
                document.body.style.background = 'rgba(255, 160, 160, 0.8)';
                document.querySelector('#B1').classList.remove('invis');
                document.querySelector('.partiinfo h4').innerHTML = info.rodt;
                break;
            case 'Sosialistisk Venstreparti':
                document.body.style.background = 'linear-gradient(to right, rgb(175, 255, 153), rgb(255, 133, 133))'
                document.querySelector('#B2').classList.remove('invis');
                document.querySelector('.partiinfo h4').innerHTML = info.sv;
                break;
            case 'Arbeiderpartiet':
                document.body.style.background = 'rgba(255, 197, 197, 0.7)';
                document.querySelector('#B3').classList.remove('invis');
                document.querySelector('.partiinfo h4').innerHTML = info.ap;
                break;
            case 'Senterpartiet':
                document.body.style.background = 'rgba(160, 255, 133, 0.5)';
                document.querySelector('#B4').classList.remove('invis');
                document.querySelector('.partiinfo h4').innerHTML = info.sp;
                break;
            case 'Milj\u00f8partiet De Gr\u00f8nne':
                document.body.style.background = 'rgba(56, 167, 42, 0.5)';
                document.querySelector('#B5').classList.remove('invis');
                document.querySelector('.partiinfo h4').innerHTML = info.mdg;
                break;
            case 'Kristelig FolkeParti':
                document.body.style.background = 'rgb(255, 209, 169)';
                document.querySelector('#B6').classList.remove('invis');
                document.querySelector('.partiinfo h4').innerHTML = info.krf;
                break;
            case 'Venstre':
                document.body.style.background = 'rgba(219, 175, 255, 0.8 )';
                document.querySelector('#B7').classList.remove('invis');
                document.querySelector('.partiinfo h4').innerHTML = info.venstre;
                break;
            case 'H\u00f8yre':
                document.body.style.background = 'linear-gradient(to right, rgb(165, 165, 255), rgb(194, 194, 255))';
                document.querySelector('#B8').classList.remove('invis');
                document.querySelector('.partiinfo h4').innerHTML = info.hoyre;
                break;
            case 'Fremskrittspartiet':
                document.body.style.background = 'linear-gradient(to right, rgb(255, 172, 172), rgb(223, 255, 220))';
                document.querySelector('#B9').classList.remove('invis');
                document.querySelector('.partiinfo h4').innerHTML = info.frp;
                break;
            case 'Alliansen':
                document.body.style.background = '#f47c2062';
                document.querySelector('#B10').classList.remove('invis');
                document.querySelector('.partiinfo h4').innerHTML = info.alliansen;
                break;
            case 'Feministisk Initiativ':
                document.body.style.background = '#ce166978';
                document.querySelector('#B11').classList.remove('invis');
                document.querySelector('.partiinfo h4').innerHTML = info.feminist;
                break;
            case 'Folkets Parti':
                document.body.style.background = '#0f9cac8b';
                document.querySelector('#B12').classList.remove('invis');
                document.querySelector('.partiinfo h4').innerHTML = info.folkets;
                break;
            case 'Helsepartiet':
                document.body.style.background = '#f4791a7b';
                document.querySelector('#B13').classList.remove('invis');
                document.querySelector('.partiinfo h4').innerHTML = info.helse;
                break;
            case 'Innovasjon og Teknologipartiet':
                document.body.style.background = '#ff88007b';
                document.querySelector('#B14').classList.remove('invis');
                document.querySelector('.partiinfo h4').innerHTML = info.it;
                break;
            case 'Liberalistene':
                document.body.style.background = '#49154a83';
                document.querySelector('#B15').classList.remove('invis');
                document.querySelector('.partiinfo h4').innerHTML = info.lib;
                break;
            case 'Norges Kommunistiske Parti':
                document.body.style.background = '#e500007b';
                document.querySelector('#B16').classList.remove('invis');
                document.querySelector('.partiinfo h4').innerHTML = info.nkp;
                break;
            case 'Norgesdemokratene':
                document.body.style.background = '#ba122b85';
                document.querySelector('#B17').classList.remove('invis');
                document.querySelector('.partiinfo h4').innerHTML = info.nd;
                break;
            case 'Sentrum':
                document.body.style.background = '#f9ed1482';
                document.querySelector('#B18').classList.remove('invis');
                document.querySelector('.partiinfo h4').innerHTML = info.sentrum;
                break;
        }
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape')
                stem('empty');
        })
    };

    function flerePartier() {
        stem('empty')
        document.querySelector('.lTxt h3').classList.toggle('invis');
        document.querySelector('.lTxt h4').classList.toggle('invis');
        document.querySelector('.linje').classList.toggle('greyline')

        document.querySelector('.partier').classList.toggle('invis');
        document.querySelectorAll('partier').forEach(e => e.classList.toggle('invis'));
        document.querySelector('.Epartier').classList.toggle('invis');
        document.querySelectorAll('Epartier').forEach(e => e.classList.toggle('invis'));
    }

    let info = {
        rodt: `R\u00f8dt er et sosialistisk parti og mener at kapitalismen er hindringen for et rettferdig og solidarisk samfunn. 
                        R\u00f8dts m\u00e5l er et samfunn uten utbytting og undertrykking, og reell likestilling mellom kj\u00f8nnene er viktig her.
                        De vil avskaffe den private eiendomsretten til felles naturressurser. Partiet jobber for \u00e5 endre maktforholdene i samfunnet fundamentalt.
                        Bak dette ligger det en klassetenkning, som g\u00e5r ut p\u00e5 at de \u00f8nsker at det arbeidende folket tar over makten, og at det etableres nye folkevalgorganer.
                        Partiet er for en dominerende offentlig sektor. R\u00f8dt er et revolusjon\u00e6rt parti og henter mye av sin ideologi og politikk fra marxistisk teori.`,
        sv: `Partiet er et sosialistisk parti som \u00f8nsker et annet samfunn bygd p\u00e5 andre verdier og behov enn kapitalismen. 
                        De \u00f8nsker at kapitalismen og markedskreftene erstattes av solidaritet, rettferdig fordeling, milj\u00f8hensyn og utvidet \u00f8konomisk og politisk demokrati.
                        SV er for en sterk offentlig sektor hvor staten skal styre kapitalen og vareproduksjonen og fordele makt og materielle goder.
                        De er reformistiske, alts\u00e5 at de gjennom reformer skal n\u00e6rme seg et sosialistisk samfunn.
                        Partiet ble dannet i opposisjon til utenrikspolitikken som ble f\u00f8rt p\u00e5 den tiden, ikke minst mot NATO-medlemskap (1960-tallet) og EF-medlemskap (1970-tallet).
                        SV har et sterkt fokus p\u00e5 milj\u00f8vern og b\u00e6rekraftig utvikling.`,
        ap: `N\u00f8kkelordene i partiets politiske grunnsyn er frihet, likhet og solidaritet: frihet fra fattigdom og undertrykkelse og til utfoldelse av skapende evner og muligheter,
                        like rettigheter og plikter for alle og like muligheter uansett sosial bakgrunn, kj\u00f8nn, religion eller etnisk opprinnelse, og solidaritet med mennesker over hele verden og med kommende generasjoner.
                        Gjennom solidaritet vil partiet ta vare p\u00e5 dem som ikke klarer seg p\u00e5 egen h\u00e5nd. En sterk offentlig sektor skal finansiere fellesgodene, og et progressivt skattesystem skal sikre en \u00f8konomisk omfordeling.
                        AP mener at den enkelte skal bestemme over egen hverdag. Partiet er reformistisk, noe som inneb\u00e6rer at de bruker mulighetene utviklingen gir, til \u00e5 forbedre samfunnet.`,
        sp: `Partiet \u00f8nsker en desentralisering av eiendomsrett, makt, kapital og bosetting. 
                        De \u00f8nsker ogs\u00e5 st\u00f8rre likestilling mellom ulike grupper i samfunnet, og de er motstandere av de frie markedskreftene og \u00f8konomisk liberalisering.
                        SP sitt m\u00e5l for det politiske arbeidet er \u00e5 utvikle et samfunn av frie, selvstendige mennesker, som med tro p\u00e5 egne evner tar ansvar for sitt eget liv, for fellesskapet og for natur og milj\u00f8.
                        Et viktig redskap her er et n\u00e6rmilj\u00f8 laget av og for enkeltmennesket. Frihet for enkeltmennesket er viktig, og alle har et medansvar for \u00e5 skape gode lokalsamfunn.
                        SP vil ta hele Norge i bruk slik at alle deler av landet skal ha et n\u00e6ringsliv i utvikling, og at folk kan bo og arbeide der de \u00f8nsker. Partiet er en garantist mot norsk EU-medlemskap.`,
        mdg: `Partiet bygger p\u00e5 en s\u00e5kalt gr\u00f8nn ideologi og p\u00e5 at man skal sette milj\u00f8 og b\u00e6rekraft foran \u00f8konomisk vekst. 
                        De Gr\u00f8nne fokuserer p\u00e5 tre hovedtemaer: livskvalitet, klimasmart samferdsel og fornybar fremtid.
                        Disse hovedtemaene betyr at partiet arbeider for et samfunn der folk har mer tid til hverandre og legger mindre vekt p\u00e5 forbruk,
                        og der det skal bli enklere og billigere \u00e5 velge de mest milj\u00f8vennlige transportmidlene. De \u00f8nsker ogs\u00e5 en slutt p\u00e5 oljeproduksjonen og heller en omstilling til b\u00e6rekraftig og fornybar \u00f8konomi.`,
        krf: `KrF bygger sin politikk p\u00e5 et kristent verdigrunnlag og en kristendemokratisk ideologi. 
                        Partiets verdigrunnlag har sin forankring i det kristne menneskesynet, nestekj\u00e6rligheten og forvalteransvaret og de ti bud.
                        Dette verdigrunnlaget kommer til uttrykk i Bibelen. Partiet \u00f8nsker av den grunn en restriktiv gen- og bioteknologilov,
                        det er motstander av loven om selvbestemt abort og er imot en felles ekteskapslov.`,
        venstre: `Partiet \u00f8nsker en aktiv stat til \u00e5 bekjempe sosial urettferdighet i samfunnet, 
                        men samtidig vil partiet ikke at staten og utvalgte organisasjoner f\u00e5r for mye makt p\u00e5 bekostning av enkeltmennesket og mangfoldet i samfunnet.
                        Hovedm\u00e5let for politikken er enkeltmenneskets frihet. Men samtidig har alle et ansvar for egne valg.
                        De som trenger samfunnets hjelp til \u00e5 leve et verdig liv, skal f\u00e5 det.`,
        hoyre: `H\u00f8yres politikk bygger p\u00e5 et konservativt samfunnssyn og liberale verdier. 
                        Det vil si at en vil bevare tradisjonelle verdier i samfunnet, og at endringer ikke m\u00e5 skje for fort.
                        Med andre ord – forandre for \u00e5 bevare. Konservatismen forutsetter en sterk rettsstat som ivaretar enkeltmenneskets og mindretallets rettigheter,
                        og som sikrer grunnleggende friheter som religionsfrihet, ytringsfrihet, privat eiendomsrett og likhet for loven.`,
        frp: `FrP er et liberalistisk parti. Det vil si at det setter enkeltindividet og dets retter i sentrum, og at statens makt m\u00e5 begrenses. 
                        Det offentlige skal ikke ta p\u00e5 seg oppgaver som enkeltpersoner, bedrifter og organisasjoner kan l\u00f8se like godt eller bedre,
                        det er kun det \u00e5 sikre en minimumslevestandard som er en offentlig oppgave. Partiets hovedm\u00e5l er at skatter, avgifter og offentlige inngrep skal g\u00e5 kraftig ned.
                        Kapitalmarkedet m\u00e5 v\u00e6re friest mulig, slik at kapitalen kanaliseres dit hvor den gj\u00f8r st\u00f8rst nytte for seg.`,
        alliansen: `Partiet har som m\u00e5l \u00e5 fremme en liberal og markedsorientert politikk, med fokus p\u00e5 individualisme, lavere skatter og begrenset offentlig innblanding i \u00f8konomien. 
                        Alliansen har ogs\u00e5 engasjert seg i sp\u00f8rsm\u00e5l knyttet til personvern og individuelle rettigheter.
                        Selv om partiet har en liten oppslutning, har det arbeidet for \u00e5 gj\u00f8re seg bemerket i norsk politikk som et alternativ til de etablerte partiene.
                        Alliansen st\u00e5r ogs\u00e5 for antiinnvandring og har koblinger til det nynazistiske milj\u00f8et i Norge. `,
        feminist: `Feministisk Initiativ er et politisk parti som jobber for likestilling og kvinnenes rettigheter i Norge. 
                        Partiet ble grunnlagt i 2016 og har som m\u00e5l \u00e5 bekjempe diskriminering og ulikheter basert p\u00e5 kj\u00f8nn.
                        Partiet fremmer en radikal feministisk agenda som inkluderer krav om likel\u00f8nn, full reproduktiv frihet, og \u00f8kt representasjon av kvinner i politikken og n\u00e6ringslivet.
                        Partiet har ogs\u00e5 engasjert seg i sp\u00f8rsm\u00e5l som vold mot kvinner og kampen mot seksuell trakassering.
                        Med sin tydelige feministiske profil utfordrer Fi det etablerte politiske landskapet i Norge og s\u00f8ker \u00e5 p\u00e5virke samfunnet i retning av \u00f8kt likestilling.`,
        folkets: `Folkets Parti er et politisk parti som jobber for \u00e5 ivareta interessene og velv\u00e6ret til vanlige mennesker i samfunnet. 
                        Partiet fokuserer p\u00e5 \u00e5 redusere \u00f8konomisk ulikhet, styrke velferdsordninger og fremme rettferdighet.
                        De legger vekt p\u00e5 \u00e5 lytte til folkets behov og utfordringer, og s\u00f8ker \u00e5 implementere politikk som tjener flertallet.
                        Folkets Parti er kjent for sitt engasjement for sosial rettferdighet og inkluderende politikk, og de arbeider hardt for \u00e5 skape et samfunn der alle har like muligheter og rettigheter.`,
        helse: `Helsepartiet er en norsk politisk bevegelse som har som hovedm\u00e5l \u00e5 sette helse og velferd \u00f8verst p\u00e5 den politiske dagsordenen. 
                        Partiet fokuserer p\u00e5 \u00e5 forbedre helsesystemet, \u00f8ke satsingen p\u00e5 forebyggende helsearbeid og styrke pasientrettigheter.
                        De legger ogs\u00e5 vekt p\u00e5 b\u00e6rekraftig helsevesen og \u00f8nsker \u00e5 redusere byr\u00e5krati og bygge tillit mellom helsepersonell og pasienter.
                        Helsepartiet har vokst i popularitet som et alternativ til etablerte politiske partier i Norge, med m\u00e5l om \u00e5 gi helse og velferd h\u00f8yere prioritet i nasjonal politikk.`,
        it: `Innovasjon- og teknologipartiet er et politisk parti som fokuserer p\u00e5 \u00e5 fremme innovasjon og teknologisk utvikling som drivkraft for samfunnet. 
                        Partiet arbeider for \u00e5 styrke investeringer i forskning og utvikling, fremme gr\u00f8nn teknologi, og skape et gunstig milj\u00f8 for oppstartsselskaper.
                        M\u00e5let er \u00e5 sikre at Norge forblir konkurransedyktig i en stadig mer teknologidrevet verden, samtidig som vi tar vare p\u00e5 milj\u00f8et og skaper b\u00e6rekraftige arbeidsplasser.
                        Innovasjon- og teknologipartiet er dedikert til \u00e5 forme en fremtid som er preget av nyskapning, effektivitet og b\u00e6rekraft.`,
        lib: `Liberalistene er en politisk bevegelse i Norge som vektlegger individuell frihet, personlig ansvar og begrensede statlige inngrep. 
                        De s\u00f8ker \u00e5 fremme \u00f8konomisk frihet gjennom lavere skatter, mindre regulering og \u00f8kt konkurranse i n\u00e6ringslivet.
                        Liberalistene argumenterer for personlig frihet i sosiale sp\u00f8rsm\u00e5l, som for eksempel selvbestemt abort og legalisering av narkotika.
                        De er en relativt liten politisk akt\u00f8r, men deres ideer og synspunkter har bidratt til \u00e5 forme debatten om statens rolle og individuelle rettigheter i Norge.`,
        nkp: `Norges Kommunistiske Parti st\u00e5r for kommunisme og marxisme, men er mer radikale enn partiet r\u00f8dt.
                        Partiet har historisk sett v\u00e6rt en viktig akt\u00f8r i norsk politikk, med fokus p\u00e5 arbeiderrettigheter, sosial rettferdighet og nasjonalisering av sentrale industrier. 
                        Selv om NKP ikke lenger har den samme innflytelsen som tidligere, fortsetter det \u00e5 kjempe for en mer rettferdig og solidarisk samfunnsorden gjennom politisk aktivisme og deltakelse i nasjonale valg.`,
        nd: `Norgesdemokratene har en nasjonalistisk og innvandringskritisk plattform og har deltatt i flere lokale og nasjonale valg. 
                        Deres politikk fokuserer p\u00e5 \u00e5 begrense innvandring, styrke nasjonal suverenitet og sikre velferdsstaten for norske borgere.
                        Selv om de har f\u00e5tt begrenset oppslutning i nasjonale valg, har Norges Demokratene markert seg som en viktig akt\u00f8r i norsk politisk debatt n\u00e5r det gjelder sp\u00f8rsm\u00e5l om innvandring og nasjonalisme.`,
        sentrum: `Sentrum er et norsk politisk parti som har som m\u00e5l \u00e5 v\u00e6re en brobygger mellom ulike politiske str\u00f8mninger. 
                        Partiet legger vekt p\u00e5 pragmatisme, samarbeid og fornuftige l\u00f8sninger for landets utfordringer.
                        Sentrum \u00f8nsker \u00e5 forene verdier fra b\u00e5de h\u00f8yre- og venstresiden, og jobber for en inkluderende politikk som tar hensyn til en b\u00e6rekraftig fremtid og velferd for alle.
                        De er opptatt av \u00e5 finne felles grunnlag for politisk handling, uavhengig av ideologiske skillelinjer, og arbeider for \u00e5 skape en politisk kultur preget av dialog og samarbeid.`,
    }

    /* Everything under this line is made for the results page: */

window.onload = () => {
    if (location.href.includes("Results")) {
        loadPartierResults();
    }
}

function loadPartierResults() {
    let pieColors = 'conic-gradient(';
    let lastPercent = 0;
    let winner = document.querySelector('#MainContent_invisListStemmer tr:nth-child(1)');
    for (let i = 1; i <= document.querySelectorAll('#MainContent_invisListStemmer tr').length; i++) {
        let stemmer = document.querySelector('#MainContent_invisListStemmer tr:nth-child(' + i + ') td:nth-child(4)').innerText - 0;
        let partyNick = document.querySelector('#MainContent_invisListStemmer tr:nth-child(' + i + ') td:nth-child(3)').innerText;
        let party = document.querySelector('#MainContent_invisListStemmer tr:nth-child(' + i + ') td:nth-child(2)').innerHTML.trimEnd();

        const line = document.createElement("div");
        line.style.width = (90 - calculatePercent(winner.lastElementChild.innerText - 0) + calculatePercent(stemmer)).toString() + "%";
        line.innerHTML = '<span class="percent" onclick="toggleSpan()">' + (calculatePercent(stemmer) > 1 ? calculatePercent(stemmer).toFixed(1)
            : calculatePercent(stemmer).toFixed(2)) + '%</span><span class="amount invis" onclick="toggleSpan()">' + stemmer + '</span>'
        document.querySelector(".chart .lines").append(line);

        const img = document.createElement("img");
        img.setAttribute('src', ("./img/" + party + ".png"));
        document.querySelector(".chart .pNavn").append(img);

        if (lastPercent !== 0)
            pieColors += ', ';
        pieColors += 'var(--party_' + partyNick + ') ' + lastPercent + '%, var(--party_' + partyNick + ') '
            + (calculatePercent(stemmer) + lastPercent) + '%';
        lastPercent += calculatePercent(stemmer)

        let partySideDiv = document.createElement('div');
        partySideDiv.classList.add('party');
        partySideDiv.innerHTML = `<div class="ball" style="background: 
            var(--party_` + partyNick + ');"></div><h1>' + partyNick +
            '<span>' + party + '</span></h1>';
        document.querySelector('.pieSide').append(partySideDiv);
    }

    if (document.querySelector('#MainContent_DropDownListKommunerResults').selectedIndex !== 0) {
        document.querySelector('#resultsPage p').innerHTML = 'Vinneren av valget i '
            + document.querySelector('#MainContent_DropDownListKommunerResults option:nth-child('
                + (document.querySelector('#MainContent_DropDownListKommunerResults').selectedIndex + 1) + ')').innerHTML
            + ' er <span id="winner"></span>'
    }
    try {
        if (winner.lastElementChild.innerHTML != winner.nextElementSibling.lastElementChild.innerHTML) {
            document.querySelector("#winner").innerHTML = " " + winner.firstElementChild.nextElementSibling.innerText
            document.querySelector("#winner").setAttribute('style', 'color: var(--party_'
                + winner.firstElementChild.nextElementSibling.nextElementSibling.innerHTML + ');')
        } else {
            document.querySelector("#winner").innerHTML = 'Ingen, Valget ble uavgjort'
            document.querySelector("#winner").setAttribute('style', 'color: rgb(35, 35, 35)')
        }
    } catch (err) {
        document.querySelector("#winner").innerHTML = " " + winner.firstElementChild.nextElementSibling.innerText
        document.querySelector("#winner").setAttribute('style', 'color: var(--party_'
            + winner.firstElementChild.nextElementSibling.nextElementSibling.innerHTML + ');')
    }

    document.querySelector('.pie').setAttribute('style', 'background-image: ' + pieColors + ');');
}

function toggleSpan() {
    if (document.querySelector('.percent').classList.contains('invis')) {
        document.querySelectorAll('.percent').forEach((e) => { e.classList.remove('invis') });
        document.querySelectorAll('.amount').forEach((e) => { e.classList.add('invis') });
    } else {
        document.querySelectorAll('.percent').forEach((e) => { e.classList.add('invis') });
        document.querySelectorAll('.amount').forEach((e) => { e.classList.remove('invis') });
    }
}
function calculatePercent(parti) {
    let votesAmount = 0;
    for (let i = 1; i <= document.querySelectorAll('#MainContent_invisListStemmer tr').length; i++)
        votesAmount += document.querySelector('#MainContent_invisListStemmer tr:nth-child(' + i + ') td:nth-child(4)').innerText - 0;
    return (parti / votesAmount * 100);
}