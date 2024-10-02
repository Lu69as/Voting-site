const url = window.location.href;
stem('empty');

const voted = localStorage.getItem('voted');
if (voted === true)
    
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape')
        stem('empty');
})

function stem(parti) {
    document.querySelectorAll('.stemKnapp').forEach(e => e.classList.add('invis'));

    if (parti !== 'empty') {
        document.querySelector('.partiLinje h1').classList.add('invis');
        document.querySelector('.partiLinje h2').classList.add('invis');
        document.querySelector('.partiinfo').classList.remove('invis');
    }
    switch (parti)
    {
        case 'empty':
            document.body.style.background = 'rgb(242, 242, 242)';
            document.querySelector('.partiinfo').classList.add('invis');
            document.querySelector('.partiLinje h1').classList.remove('invis');
            document.querySelector('.partiLinje h2').classList.remove('invis');
            break;
        case 'rodt':
            document.body.style.background = 'rgba(255, 160, 160, 0.8)';
            document.querySelector('.B1').classList.remove('invis');
            document.querySelector('.partiinfo h1').innerHTML = 'R\u00f8dt';
            document.querySelector('.partiinfo h4').innerHTML = rodt_info;
            break;
        case 'sv':
            document.body.style.background = 'linear-gradient(to right, rgb(175, 255, 153), rgb(255, 133, 133))'
            document.querySelector('.B2').classList.remove('invis');
            document.querySelector('.partiinfo h1').innerHTML = 'Sosialistisk Venstre';
            document.querySelector('.partiinfo h4').innerHTML = sv_info;
            break;
        case 'ap':
            document.body.style.background = 'rgba(255, 197, 197, 0.7)';
            document.querySelector('.B3').classList.remove('invis');
            document.querySelector('.partiinfo h1').innerHTML = 'Arbeiderpartiet';
            document.querySelector('.partiinfo h4').innerHTML = ap_info;
            break;
        case 'sp':
            document.body.style.background = 'rgba(160, 255, 133, 0.5)';
            document.querySelector('.B4').classList.remove('invis');
            document.querySelector('.partiinfo h1').innerHTML = 'Senterpartiet';
            document.querySelector('.partiinfo h4').innerHTML = sp_info;
            break;
        case 'mdg':
            document.body.style.background = 'rgba(56, 167, 42, 0.5)';
            document.querySelector('.B5').classList.remove('invis');
            document.querySelector('.partiinfo h1').innerHTML = 'Milj\u00f8partiet De Gr\u00f8nne';
            document.querySelector('.partiinfo h4').innerHTML = mdg_info;
            break;
        case 'krf':
            document.body.style.background = 'rgb(255, 209, 169)';
            document.querySelector('.B6').classList.remove('invis');
            document.querySelector('.partiinfo h1').innerHTML = 'Kristelig Folkeparti';
            document.querySelector('.partiinfo h4').innerHTML = krf_info;
            break;
        case 'venstre':
            document.body.style.background = 'rgba(219, 175, 255, 0.8 )';
            document.querySelector('.B7').classList.remove('invis');
            document.querySelector('.partiinfo h1').innerHTML = 'Venstre';
            document.querySelector('.partiinfo h4').innerHTML = venstre_info;
            break;
        case 'hoyre':
            document.body.style.background = 'linear-gradient(to right, rgb(165, 165, 255), rgb(194, 194, 255))';
            document.querySelector('.B8').classList.remove('invis');
            document.querySelector('.partiinfo h1').innerHTML = 'H\u00f8yre';
            document.querySelector('.partiinfo h4').innerHTML = hoyre_info;
            break;
        case 'frp':
            document.body.style.background = 'linear-gradient(to right, rgb(255, 172, 172), rgb(223, 255, 220))';
            document.querySelector('.B9').classList.remove('invis');
            document.querySelector('.partiinfo h1').innerHTML = 'Fremskrittspartiet';
            document.querySelector('.partiinfo h4').innerHTML = frp_info;
            break;
        case 'alliansen':
            document.querySelector('.B10').classList.remove('invis');
            document.querySelector('.partiinfo h1').innerHTML = 'Alliansen';
            document.querySelector('.partiinfo h4').innerHTML = alliansen_info;
            break;
        case 'feminist':
            document.querySelector('.B11').classList.remove('invis');
            document.querySelector('.partiinfo h1').innerHTML = 'Feministisk Initiativ';
            document.querySelector('.partiinfo h4').innerHTML = feminist_info;
            break;
        case 'folkets':
            document.querySelector('.B12').classList.remove('invis');
            document.querySelector('.partiinfo h1').innerHTML = 'Folkets Parti';
            document.querySelector('.partiinfo h4').innerHTML = folkets_info;
            break;
        case 'helse':
            document.querySelector('.B13').classList.remove('invis');
            document.querySelector('.partiinfo h1').innerHTML = 'Helsepartiet';
            document.querySelector('.partiinfo h4').innerHTML = helse_info;
            break;
        case 'it':
            document.querySelector('.B14').classList.remove('invis');
            document.querySelector('.partiinfo h1').innerHTML = 'Innovasjon og Teknologipartiet';
            document.querySelector('.partiinfo h4').innerHTML = it_info;
            break;
        case 'lib':
            document.querySelector('.B15').classList.remove('invis');
            document.querySelector('.partiinfo h1').innerHTML = 'Liberalistene';
            document.querySelector('.partiinfo h4').innerHTML = lib_info;
            break;
        case 'nkp':
            document.querySelector('.B16').classList.remove('invis');
            document.querySelector('.partiinfo h1').innerHTML = 'Norges Kommunistiske Parti';
            document.querySelector('.partiinfo h4').innerHTML = nkp_info;
            break;
        case 'nd':
            document.querySelector('.B17').classList.remove('invis');
            document.querySelector('.partiinfo h1').innerHTML = 'Norgesdemokratene';
            document.querySelector('.partiinfo h4').innerHTML = nd_info;
            break;
        case 'sentrum':
            document.querySelector('.B18').classList.remove('invis');
            document.querySelector('.partiinfo h1').innerHTML = 'Partiet Sentrum';
            document.querySelector('.partiinfo h4').innerHTML = sentrum_info;
            break;
    }

}

function flerePartier()
{
    stem('empty');

    const parti = document.querySelector('.partier');
    const Eparti = document.querySelector('.Epartier');

    document.querySelector('.lTxt').classList.toggle('invis');

    document.querySelector('.linje').classList.toggle('greyline')

    parti.classList.toggle('invis');
    document.querySelectorAll('partier').forEach(e => e.classList.toggle('invis'));
    Eparti.classList.toggle('invis');
    document.querySelectorAll('Epartier').forEach(e => e.classList.toggle('invis'));
}

let rodt_info = `R\u00f8dt er et sosialistisk parti og mener at kapitalismen er hindringen for et rettferdig og solidarisk samfunn. 
                    R\u00f8dts m\u00e5l er et samfunn uten utbytting og undertrykking, og reell likestilling mellom kj\u00f8nnene er viktig her.
                    De vil avskaffe den private eiendomsretten til felles naturressurser. Partiet jobber for \u00e5 endre maktforholdene i samfunnet fundamentalt.
                    Bak dette ligger det en klassetenkning, som g\u00e5r ut p\u00e5 at de \u00f8nsker at det arbeidende folket tar over makten, og at det etableres nye folkevalgorganer.
                    Partiet er for en dominerende offentlig sektor. R\u00f8dt er et revolusjon\u00e6rt parti og henter mye av sin ideologi og politikk fra marxistisk teori.`;
let sv_info = `Partiet er et sosialistisk parti som \u00f8nsker et annet samfunn bygd p\u00e5 andre verdier og behov enn kapitalismen. 
                    De \u00f8nsker at kapitalismen og markedskreftene erstattes av solidaritet, rettferdig fordeling, milj\u00f8hensyn og utvidet \u00f8konomisk og politisk demokrati.
                    SV er for en sterk offentlig sektor hvor staten skal styre kapitalen og vareproduksjonen og fordele makt og materielle goder.
                    De er reformistiske, alts\u00e5 at de gjennom reformer skal n\u00e6rme seg et sosialistisk samfunn.
                    Partiet ble dannet i opposisjon til utenrikspolitikken som ble f\u00f8rt p\u00e5 den tiden, ikke minst mot NATO-medlemskap (1960-tallet) og EF-medlemskap (1970-tallet).
                    SV har et sterkt fokus p\u00e5 milj\u00f8vern og b\u00e6rekraftig utvikling.`;
let ap_info = `N\u00f8kkelordene i partiets politiske grunnsyn er frihet, likhet og solidaritet: frihet fra fattigdom og undertrykkelse og til utfoldelse av skapende evner og muligheter,
                    like rettigheter og plikter for alle og like muligheter uansett sosial bakgrunn, kj\u00f8nn, religion eller etnisk opprinnelse, og solidaritet med mennesker over hele verden og med kommende generasjoner.
                    Gjennom solidaritet vil partiet ta vare p\u00e5 dem som ikke klarer seg p\u00e5 egen h\u00e5nd. En sterk offentlig sektor skal finansiere fellesgodene, og et progressivt skattesystem skal sikre en \u00f8konomisk omfordeling.
                    AP mener at den enkelte skal bestemme over egen hverdag. Partiet er reformistisk, noe som inneb\u00e6rer at de bruker mulighetene utviklingen gir, til \u00e5 forbedre samfunnet.`;
let sp_info = `Partiet \u00f8nsker en desentralisering av eiendomsrett, makt, kapital og bosetting. 
                    De \u00f8nsker ogs\u00e5 st\u00f8rre likestilling mellom ulike grupper i samfunnet, og de er motstandere av de frie markedskreftene og \u00f8konomisk liberalisering.
                    SP sitt m\u00e5l for det politiske arbeidet er \u00e5 utvikle et samfunn av frie, selvstendige mennesker, som med tro p\u00e5 egne evner tar ansvar for sitt eget liv, for fellesskapet og for natur og milj\u00f8.
                    Et viktig redskap her er et n\u00e6rmilj\u00f8 laget av og for enkeltmennesket. Frihet for enkeltmennesket er viktig, og alle har et medansvar for \u00e5 skape gode lokalsamfunn.
                    SP vil ta hele Norge i bruk slik at alle deler av landet skal ha et n\u00e6ringsliv i utvikling, og at folk kan bo og arbeide der de \u00f8nsker. Partiet er en garantist mot norsk EU-medlemskap.`;
let mdg_info = `Partiet bygger p\u00e5 en s\u00e5kalt gr\u00f8nn ideologi og p\u00e5 at man skal sette milj\u00f8 og b\u00e6rekraft foran \u00f8konomisk vekst. 
                    De Gr\u00f8nne fokuserer p\u00e5 tre hovedtemaer: livskvalitet, klimasmart samferdsel og fornybar fremtid.
                    Disse hovedtemaene betyr at partiet arbeider for et samfunn der folk har mer tid til hverandre og legger mindre vekt p\u00e5 forbruk,
                    og der det skal bli enklere og billigere \u00e5 velge de mest milj\u00f8vennlige transportmidlene. De \u00f8nsker ogs\u00e5 en slutt p\u00e5 oljeproduksjonen og heller en omstilling til b\u00e6rekraftig og fornybar \u00f8konomi.`;
let krf_info = `KrF bygger sin politikk p\u00e5 et kristent verdigrunnlag og en kristendemokratisk ideologi. 
                    Partiets verdigrunnlag har sin forankring i det kristne menneskesynet, nestekj\u00e6rligheten og forvalteransvaret og de ti bud.
                    Dette verdigrunnlaget kommer til uttrykk i Bibelen. Partiet \u00f8nsker av den grunn en restriktiv gen- og bioteknologilov,
                    det er motstander av loven om selvbestemt abort og er imot en felles ekteskapslov.`;
let venstre_info = `Partiet \u00f8nsker en aktiv stat til \u00e5 bekjempe sosial urettferdighet i samfunnet, 
                    men samtidig vil partiet ikke at staten og utvalgte organisasjoner f\u00e5r for mye makt p\u00e5 bekostning av enkeltmennesket og mangfoldet i samfunnet.
                    Hovedm\u00e5let for politikken er enkeltmenneskets frihet. Men samtidig har alle et ansvar for egne valg.
                    De som trenger samfunnets hjelp til \u00e5 leve et verdig liv, skal f\u00e5 det.`;
let hoyre_info = `H\u00f8yres politikk bygger p\u00e5 et konservativt samfunnssyn og liberale verdier. 
                    Det vil si at en vil bevare tradisjonelle verdier i samfunnet, og at endringer ikke m\u00e5 skje for fort.
                    Med andre ord – forandre for \u00e5 bevare. Konservatismen forutsetter en sterk rettsstat som ivaretar enkeltmenneskets og mindretallets rettigheter,
                    og som sikrer grunnleggende friheter som religionsfrihet, ytringsfrihet, privat eiendomsrett og likhet for loven.`;
let frp_info = `FrP er et liberalistisk parti. Det vil si at det setter enkeltindividet og dets retter i sentrum, og at statens makt m\u00e5 begrenses. 
                    Det offentlige skal ikke ta p\u00e5 seg oppgaver som enkeltpersoner, bedrifter og organisasjoner kan l\u00f8se like godt eller bedre,
                    det er kun det \u00e5 sikre en minimumslevestandard som er en offentlig oppgave. Partiets hovedm\u00e5l er at skatter, avgifter og offentlige inngrep skal g\u00e5 kraftig ned.
                    Kapitalmarkedet m\u00e5 v\u00e6re friest mulig, slik at kapitalen kanaliseres dit hvor den gj\u00f8r st\u00f8rst nytte for seg.`;
let alliansen_info = `Partiet har som m\u00e5l \u00e5 fremme en liberal og markedsorientert politikk, med fokus p\u00e5 individualisme, lavere skatter og begrenset offentlig innblanding i \u00f8konomien. 
                    Alliansen har ogs\u00e5 engasjert seg i sp\u00f8rsm\u00e5l knyttet til personvern og individuelle rettigheter.
                    Selv om partiet har en liten oppslutning, har det arbeidet for \u00e5 gj\u00f8re seg bemerket i norsk politikk som et alternativ til de etablerte partiene.
                    Alliansen st\u00e5r ogs\u00e5 for antiinnvandring og har koblinger til det nynazistiske milj\u00f8et i Norge. `;
let feminist_info = `Feministisk Initiativ er et politisk parti som jobber for likestilling og kvinnenes rettigheter i Norge. 
                    Partiet ble grunnlagt i 2016 og har som m\u00e5l \u00e5 bekjempe diskriminering og ulikheter basert p\u00e5 kj\u00f8nn.
                    Partiet fremmer en radikal feministisk agenda som inkluderer krav om likel\u00f8nn, full reproduktiv frihet, og \u00f8kt representasjon av kvinner i politikken og n\u00e6ringslivet.
                    Partiet har ogs\u00e5 engasjert seg i sp\u00f8rsm\u00e5l som vold mot kvinner og kampen mot seksuell trakassering.
                    Med sin tydelige feministiske profil utfordrer Fi det etablerte politiske landskapet i Norge og s\u00f8ker \u00e5 p\u00e5virke samfunnet i retning av \u00f8kt likestilling.`;
let folkets_info = `Folkets Parti er et politisk parti som jobber for \u00e5 ivareta interessene og velv\u00e6ret til vanlige mennesker i samfunnet. 
                    Partiet fokuserer p\u00e5 \u00e5 redusere \u00f8konomisk ulikhet, styrke velferdsordninger og fremme rettferdighet.
                    De legger vekt p\u00e5 \u00e5 lytte til folkets behov og utfordringer, og s\u00f8ker \u00e5 implementere politikk som tjener flertallet.
                    Folkets Parti er kjent for sitt engasjement for sosial rettferdighet og inkluderende politikk, og de arbeider hardt for \u00e5 skape et samfunn der alle har like muligheter og rettigheter.`;
let helse_info = `Helsepartiet er en norsk politisk bevegelse som har som hovedm\u00e5l \u00e5 sette helse og velferd \u00f8verst p\u00e5 den politiske dagsordenen. 
                    Partiet fokuserer p\u00e5 \u00e5 forbedre helsesystemet, \u00f8ke satsingen p\u00e5 forebyggende helsearbeid og styrke pasientrettigheter.
                    De legger ogs\u00e5 vekt p\u00e5 b\u00e6rekraftig helsevesen og \u00f8nsker \u00e5 redusere byr\u00e5krati og bygge tillit mellom helsepersonell og pasienter.
                    Helsepartiet har vokst i popularitet som et alternativ til etablerte politiske partier i Norge, med m\u00e5l om \u00e5 gi helse og velferd h\u00f8yere prioritet i nasjonal politikk.`;
let it_info = `Innovasjon- og teknologipartiet er et politisk parti som fokuserer p\u00e5 \u00e5 fremme innovasjon og teknologisk utvikling som drivkraft for samfunnet. 
                    Partiet arbeider for \u00e5 styrke investeringer i forskning og utvikling, fremme gr\u00f8nn teknologi, og skape et gunstig milj\u00f8 for oppstartsselskaper.
                    M\u00e5let er \u00e5 sikre at Norge forblir konkurransedyktig i en stadig mer teknologidrevet verden, samtidig som vi tar vare p\u00e5 milj\u00f8et og skaper b\u00e6rekraftige arbeidsplasser.
                    Innovasjon- og teknologipartiet er dedikert til \u00e5 forme en fremtid som er preget av nyskapning, effektivitet og b\u00e6rekraft.`;
let lib_info = `Liberalistene er en politisk bevegelse i Norge som vektlegger individuell frihet, personlig ansvar og begrensede statlige inngrep. 
                    De s\u00f8ker \u00e5 fremme \u00f8konomisk frihet gjennom lavere skatter, mindre regulering og \u00f8kt konkurranse i n\u00e6ringslivet.
                    Liberalistene argumenterer for personlig frihet i sosiale sp\u00f8rsm\u00e5l, som for eksempel selvbestemt abort og legalisering av narkotika.
                    De er en relativt liten politisk akt\u00f8r, men deres ideer og synspunkter har bidratt til \u00e5 forme debatten om statens rolle og individuelle rettigheter i Norge.`;
let nkp_info = `Norges Kommunistiske Parti st\u00e5r for kommunisme og marxisme, men er mer radikale enn partiet r\u00f8dt.
                    Partiet har historisk sett v\u00e6rt en viktig akt\u00f8r i norsk politikk, med fokus p\u00e5 arbeiderrettigheter, sosial rettferdighet og nasjonalisering av sentrale industrier. 
                    Selv om NKP ikke lenger har den samme innflytelsen som tidligere, fortsetter det \u00e5 kjempe for en mer rettferdig og solidarisk samfunnsorden gjennom politisk aktivisme og deltakelse i nasjonale valg.`;
let nd_info = `Norgesdemokratene har en nasjonalistisk og innvandringskritisk plattform og har deltatt i flere lokale og nasjonale valg. 
                    Deres politikk fokuserer p\u00e5 \u00e5 begrense innvandring, styrke nasjonal suverenitet og sikre velferdsstaten for norske borgere.
                    Selv om de har f\u00e5tt begrenset oppslutning i nasjonale valg, har Norges Demokratene markert seg som en viktig akt\u00f8r i norsk politisk debatt n\u00e5r det gjelder sp\u00f8rsm\u00e5l om innvandring og nasjonalisme.`;
let sentrum_info = `Sentrum er et norsk politisk parti som har som m\u00e5l \u00e5 v\u00e6re en brobygger mellom ulike politiske str\u00f8mninger. 
                    Partiet legger vekt p\u00e5 pragmatisme, samarbeid og fornuftige l\u00f8sninger for landets utfordringer.
                    Sentrum \u00f8nsker \u00e5 forene verdier fra b\u00e5de h\u00f8yre- og venstresiden, og jobber for en inkluderende politikk som tar hensyn til en b\u00e6rekraftig fremtid og velferd for alle.
                    De er opptatt av \u00e5 finne felles grunnlag for politisk handling, uavhengig av ideologiske skillelinjer, og arbeider for \u00e5 skape en politisk kultur preget av dialog og samarbeid.`;