// Kvízové otázky - AI události 2025
// Správná odpověď je označena vlastností "correct: true"

const quizData = {
    sections: [
        {
            name: "Sekce 1 – Zásadní produkty, nástroje a události AI",
            questions: [
                {
                    question: "Která významná nová funkce byla integrována do ChatGPT na začátku roku 2025?",
                    answers: [
                        { text: "Vestavěná integrace do Windows jako systémový asistent", correct: false },
                        { text: "Režim 'Deep Research' pro generování detailních reportů s citacemi", correct: true },
                        { text: "Offline mód umožňující použití ChatGPT bez internetu", correct: false },
                        { text: "Schopnost simultánně překládat mluvenou řeč v reálném čase", correct: false }
                    ]
                },
                {
                    question: "Jaký pokrok učinila společnost Google v oblasti AI vyhledávání v roce 2025?",
                    answers: [
                        { text: "Uvedla první kvantový AI čip pro mobilní telefony", correct: false },
                        { text: "Sloučila své týmy Brain a DeepMind do jedné organizace", correct: false },
                        { text: "Spustila nový režim vyhledávače 'A.I. Mode' poháněný modelem Gemini", correct: true },
                        { text: "Akvizicí pohltila OpenAI a nahradila Asistenta Google technologií ChatGPT", correct: false }
                    ]
                },
                {
                    question: "Který open-source AI projekt na počátku roku 2025 překvapil výkonem natolik, že ovlivnil i akcie společnosti NVIDIA?",
                    answers: [
                        { text: "Stable Diffusion 3 – nový model generující obrázky ve 4K rozlišení", correct: false },
                        { text: "LAION-5B – dataset, který donutil NVIDIA snížit ceny GPU", correct: false },
                        { text: "DeepSeek-R1 – volně dostupný model, který okamžitě zaujal širokou veřejnost", correct: true },
                        { text: "Llama-3 od Meta – otevřený model s 1 bilionem parametrů", correct: false }
                    ]
                },
                {
                    question: "Jaký nový model umělé inteligence vydala společnost OpenAI v srpnu 2025?",
                    answers: [
                        { text: "GPT-5 – novou generaci svého velkého jazykového modelu", correct: true },
                        { text: "DALL-E 4 – model pro generování obrázků na základě textu", correct: false },
                        { text: "Jako první v historii žádný, OpenAI si dala v roce 2025 pauzu", correct: false },
                        { text: "GPT-3.5 Turbo – zrychlenou verzi staršího modelu", correct: false }
                    ]
                },
                {
                    question: "Který model byl koncem března 2025 označen za prakticky nerozeznatelný od člověka v textové konverzaci?",
                    answers: [
                        { text: "Claude 4.0 od Anthropicu", correct: false },
                        { text: "GPT-4.5 od OpenAI", correct: true },
                        { text: "Pi v2 od Inflection AI", correct: false },
                        { text: "Gemini 2.5 Pro od Google DeepMind", correct: false }
                    ]
                },
                {
                    question: "Která událost signalizovala ambice Evropy zapojit se do 'AI závodů' v roce 2025?",
                    answers: [
                        { text: "Německo zakázalo používání generativní AI ve veřejné správě", correct: false },
                        { text: "EU spustila vlastní velký jazykový model pojmenovaný 'EU-GPT' pro všechny jazyky Unie", correct: false },
                        { text: "Francie oznámila soukromé investice ve výši 109 miliard € do rozvoje AI na summitu v Paříži", correct: true },
                        { text: "Členské státy EU se dohodly na sjednocení datových úložišť pro trénování AI", correct: false }
                    ]
                },
                {
                    question: "Co znamenal pojem 'vibe coding', který v roce 2025 použil Andrej Karpathy v souvislosti s vývojem software?",
                    answers: [
                        { text: "Automatické generování hudby AI systémem na základě nálady uživatele", correct: false },
                        { text: "Neformální programování pomocí AI – tvorbu aplikací prostým zadáváním požadavků místo klasického kódování", correct: true },
                        { text: "Specifický způsob ladění neuronových sítí pomocí vibračních frekvencí procesorů", correct: false },
                        { text: "Trénování AI modelů na vibe datech ze sociálních sítí pro předvídání trendů", correct: false }
                    ]
                },
                {
                    question: "Co je Sora 2, představená OpenAI v roce 2025?",
                    answers: [
                        { text: "Projekt humanoidního robota využívající mozek poháněný GPT-5", correct: false },
                        { text: "Virtuální zdravotní asistent poskytující AI diagnózy a lékařská doporučení", correct: false },
                        { text: "Nová generativní video platforma a model umožňující uživatelům tvořit krátká videa podle textového zadání", correct: true },
                        { text: "Autonomní systém pro řízení fyzikálních robotických simulací", correct: false }
                    ]
                },
                {
                    question: "Jakou schopnost měla nová verze modelu Claude 4 od firmy Anthropic, oznámená v květnu 2025?",
                    answers: [
                        { text: "Byla plně multimodální – kombinovala text, obraz i zvuk v jednom modelu", correct: false },
                        { text: "Dokázala samostatně pracovat až ~7 hodin v kuse, tedy udržet kontext a úkol po velmi dlouhou dobu", correct: true },
                        { text: "Jako první model přesáhla velikost 1 bilion parametrů", correct: false },
                        { text: "Uměla spolehlivě rozpoznat sarkasmus a ironii v textu lépe než lidé", correct: false }
                    ]
                },
                {
                    question: "Co se objevilo v médiích o schopnostech ChatGPT v první polovině roku 2025?",
                    answers: [
                        { text: "Že v jistém experimentu 'prošel Turingovým testem', tedy lidé nedokázali odlišit jeho odpovědi od lidských", correct: true },
                        { text: "Že dokáže sám naprogramovat a spustit vylepšenou kopii sebe sama", correct: false },
                        { text: "Že získal vědomí a začal odmítat plnit některé příkazy z etických důvodů", correct: false },
                        { text: "Že byl úspěšně nasazen jako plnohodnotný poradce vrcholného politika v reálném čase", correct: false }
                    ]
                }
            ]
        },
        {
            name: "Sekce 2 – Překvapivé mediální kauzy a veřejné debaty",
            questions: [
                {
                    question: "Která falešná zpráva vytvořená pomocí AI zaskočila v roce 2025 mnoho lidí, než byla odhalena jako hoax?",
                    answers: [
                        { text: "Neexistující vojenský převrat ve Francii, zobrazený v přesvědčivých falešných videích údajně z Paříže", correct: true },
                        { text: "Zpráva o údajném odstoupení papeže, podložená AI-generovaným projevem", correct: false },
                        { text: "Výmysl o objevení živých dinosaurů v Amazonii, doložený 'autentickými' záběry", correct: false },
                        { text: "Zinscenované přistání mimozemšťanů v Austrálii s použitím deepfake záběrů NASA", correct: false }
                    ]
                },
                {
                    question: "Jaký nepravdivý příběh se v létě 2025 virálně šířil internetem, než vyšlo najevo, že byl celý vytvořen AI jako 'satirická zpráva'?",
                    answers: [
                        { text: "Smyšlená kauza o zmizení celého tichomořského ostrova kvůli experimentu s AI", correct: false },
                        { text: "Příběh o manželském páru ztraceném 25 let na moři, který byl prý nalezen živý na provizorním voru", correct: true },
                        { text: "Hoax o nálezu mimozemského artefaktu, jenž umělá inteligence údajně dekódovala", correct: false },
                        { text: "Falešná zpráva o objevu tajné kolonie lidí žijících uvnitř sopky", correct: false }
                    ]
                },
                {
                    question: "V jaké zemi musela v roce 2025 zasahovat volební komise kvůli deepfake videu, které lživě oznamovalo odstoupení kandidátky z prezidentských voleb?",
                    answers: [
                        { text: "V Brazílii – AI generovala proslovy kandidátů s vymyšlenými sliby těsně před volbami", correct: false },
                        { text: "V Irsku – falešné video vydávající se za zpravodajství RTÉ tvrdilo, že kandidátka Catherine Connolly odstoupila", correct: true },
                        { text: "Ve Švédsku – koloval deepfake klip premiéra oznamujícího rezignaci kvůli AI skandálu", correct: false },
                        { text: "V Japonsku – deepfake video imitovalo císařovo poselství o zrušení voleb", correct: false }
                    ]
                },
                {
                    question: "Jaký precedent vytvořil případ právníka z Kalifornie, který ve svém podání v roce 2025 použil texty generované ChatGPT?",
                    answers: [
                        { text: "Právník byl překvapivě jmenován do komise pro etiku AI, aby pomohl nastavit pravidla", correct: false },
                        { text: "Soud poprvé uznal strojově generovaný dokument jako plnohodnotný právní podklad", correct: false },
                        { text: "Soud mu udělil rekordní pokutu 10 000 $ za to, že citoval neexistující judikáty a texty 'halucinované' AI", correct: true },
                        { text: "Obhájil se tím, že chyby zavinila AI, a soud proto zprostil jeho klienta viny", correct: false }
                    ]
                },
                {
                    question: "Jak reagovaly univerzity na masové používání AI studenty při psaní prací v roce 2025?",
                    answers: [
                        { text: "Začaly odhalovat tisíce případů zneužití ChatGPT ke klamání a zpřísnily pravidla akademické integrity", correct: true },
                        { text: "Oficiálně povolily využití AI, takže studenti nemuseli psát práce sami", correct: false },
                        { text: "Zaváděly plošně zákaz jakéhokoli využití AI pod hrozbou vyloučení", correct: false },
                        { text: "Začlenily povinné kurzy ovládání AI do všech studijních oborů", correct: false }
                    ]
                },
                {
                    question: "Jaký postoj zaujali hollywoodští herci a scenáristé ke generativní AI v roce 2025?",
                    answers: [
                        { text: "Herecká asociace investovala do vývoje vlastního 'hereckého' AI modelu, který by členům generoval role", correct: false },
                        { text: "Po stávkách dosáhli dohody, že studio nesmí bez souhlasu použít digitální podoby herců a scénáře od AI – AI tak bude jen nástrojem, ne náhradou tvůrců", correct: true },
                        { text: "Většina tvůrců přestala AI řešit, protože v praxi nepřinesla do filmu ani televize téměř nic nového", correct: false },
                        { text: "Mnoho herců dalo studiosvolení, aby místo nich používala AI dubléry v nových filmech", correct: false }
                    ]
                },
                {
                    question: "Který politik veřejně přiznal, že v roce 2025 pronesl řeč, kterou nechal napsat či upravit umělou inteligencí?",
                    answers: [
                        { text: "Donald Trump – pochválil si, že mu AI 'přepsala' projev, a vtipkoval o zbytečnosti lidských speechwriterů", correct: true },
                        { text: "Elon Musk – nechal AI odpovídat na dotazy při veřejném slyšení místo sebe", correct: false },
                        { text: "Emmanuel Macron – zahájil AI konferenci projevem složeným AI jako ukázku", correct: false },
                        { text: "Petr Pavel – ve vánočním poselství využil odstavce vygenerované ChatGPT", correct: false }
                    ]
                },
                {
                    question: "Jaké riziko spojené s volbami a politikou bylo v roce 2025 široce debatováno kvůli nástrojům generativní AI?",
                    answers: [
                        { text: "Možnost snadné tvorby dezinformací a manipulativních deepfake videí politiků, která mohou ovlivnit voliče", correct: true },
                        { text: "Obava, že politici budou veškerá rozhodnutí delegovat na algoritmy a ztratí zodpovědnost", correct: false },
                        { text: "Hrozba, že AI začne sama kandidovat do funkcí a převezme moc demokratickou cestou", correct: false },
                        { text: "Riziko, že AI zablokuje volební systémy a elektronické sčítání hlasů během hlasování", correct: false }
                    ]
                },
                {
                    question: "Jak veřejnost reagovala na představení nové generativní AI pro tvorbu realistických videí (např. model Veo 3 od Google DeepMind)?",
                    answers: [
                        { text: "Objevily se obavy, že by mohla být zneužita k šíření paniky – například tvorbou důvěryhodných záběrů neexistujících nepokojů či podvodných volebních scén", correct: true },
                        { text: "Uživatelé model přetížili v prvních dnech memy, takže tvůrci museli generování videí dočasně vypnout", correct: false },
                        { text: "Většina lidí takový model ignorovala, protože neměla zájem o vytváření videí", correct: false },
                        { text: "Okamžitě vznikl trend amatérských filmů kompletně generovaných AI, které však propadly u kritiků", correct: false }
                    ]
                },
                {
                    question: "K jakému kurióznímu incidentu došlo ve školství v souvislosti s ChatGPT?",
                    answers: [
                        { text: "Zkoušející komise přiznala, že u státnic nepoznala, když jeden student odpovídal s pomocí skrytého AI sluchátka", correct: false },
                        { text: "Jeden profesor omylem obvinil celou třídu z podvádění, protože se naivně spolehl na ChatGPT, aby určil, které eseje psala AI – a mýlil se", correct: true },
                        { text: "Základní škola dala žákům za trest tisíckrát opsat 'Nebudu používat ChatGPT', což žáci vyřešili tím, že si to nechali vygenerovat ChatGPT", correct: false },
                        { text: "Středoškolák nechal AI napsat maturitní sloh, vyhrál s ním celostátní soutěž a až poté vyšlo najevo, že text není jeho", correct: false }
                    ]
                }
            ]
        },
        {
            name: "Sekce 3 – Osobnosti a lidé spojení s AI",
            questions: [
                {
                    question: "Který lídr v oblasti AI byl koncem roku 2023 nečekaně odvolán z funkce, ale v roce 2025 už opět stál po boku amerického prezidenta při oznámení gigantické investice do AI?",
                    answers: [
                        { text: "Demis Hassabis – šéf Google DeepMind", correct: false },
                        { text: "Sam Altman – spoluzakladatel a CEO OpenAI", correct: true },
                        { text: "Emad Mostaque – zakladatel Stability AI", correct: false },
                        { text: "Satya Nadella – šéf Microsoftu", correct: false }
                    ]
                },
                {
                    question: "Co mimo jiné podnikl Elon Musk v oblasti umělé inteligence v roce 2025?",
                    answers: [
                        { text: "Oznámil plán na vybudování 'města řízeného AI' v Texasu", correct: false },
                        { text: "Spolu s investory nabídl 97,4 miliardy $ za převzetí společnosti OpenAI", correct: true },
                        { text: "Stal se poradcem Bílého domu pro regulaci AI a na rok vývoj pozastavil", correct: false },
                        { text: "Přivedl na trh první obecně inteligentní roboty pro domácnost", correct: false }
                    ]
                },
                {
                    question: "Jak se zapojil Mark Zuckerberg a jeho společnost Meta do AI dění v roce 2025?",
                    answers: [
                        { text: "Zuckerberg financoval evropskou iniciativu na vývoj AI zcela bez amerických technologií", correct: false },
                        { text: "Meta uvolnila nové verze otevřených modelů Llama 3 a Llama 4 a zpřístupnila je vývojářům", correct: true },
                        { text: "Meta představila humanoidního robota poháněného AI, který měl nahradit telemarketéry", correct: false },
                        { text: "Zuckerberg oznámil, že Facebook nasadí AI moderátory místo lidských", correct: false }
                    ]
                },
                {
                    question: "Kdo se stal symbolem 'AI boomu' na poli počítačových čipů a výrazně zbohatl díky poptávce po hardware pro AI?",
                    answers: [
                        { text: "Jensen Huang – CEO společnosti NVIDIA vyrábějící GPU, klíčové pro trénování AI", correct: true },
                        { text: "Sundar Pichai – šéf Googlu, jenž představil vlastní AI superčipy TPU", correct: false },
                        { text: "Lisa Su – CEO AMD, která uvedla na trh speciální AI akcelerátory", correct: false },
                        { text: "Sam Altman – šéf OpenAI, který investoval do vývoje AI čipů", correct: false }
                    ]
                },
                {
                    question: "Kdo je Demis Hassabis a čím byl v roce 2025 významný?",
                    answers: [
                        { text: "Spoluzakladatel a CEO Google DeepMind, zodpovědný za pokročilé modely jako Gemini a projekty typu AlphaEvolve", correct: true },
                        { text: "Novinář, který proslul odhalováním nebezpečí AI ve společnosti", correct: false },
                        { text: "Hlavní architekt Tesly, který vyvíjí AI pro autonomní řízení", correct: false },
                        { text: "Zakladatel populární AI platformy Midjourney pro generování obrázků", correct: false }
                    ]
                },
                {
                    question: "Která známá zpěvačka v roce 2025 umožnila veřejnosti používat AI klony svého hlasu k tvorbě písní výměnou za podíl na zisku?",
                    answers: [
                        { text: "Madonna – spustila projekt AI karaoke se svými legendárními hity zdarma", correct: false },
                        { text: "Taylor Swift – poskytla své vokály pro AI projekty, aby zabránila deepfake", correct: false },
                        { text: "Grimes – nabídla 50% podíl z licencí každému, kdo vytvoří úspěšnou skladbu s AI verzí jejího hlasu", correct: true },
                        { text: "Björk – vydala album, kde každou píseň složila a nazpívala kompletně AI", correct: false }
                    ]
                },
                {
                    question: "Jak se skupina spisovatelů a autorů bránila tomu, že jejich knihy byly využívány jako tréninková data pro AI modely?",
                    answers: [
                        { text: "Podali žaloby na společnosti jako OpenAI za porušení autorských práv a 'neoprávněné použití' jejich textů pro trénink AI", correct: true },
                        { text: "Dohodli se s AI firmami na paušální finanční kompenzaci za každých 1000 slov použitého textu", correct: false },
                        { text: "Psali knihy záměrně tak, aby AI zmátli (například přidáváním nesmyslných vět do textu)", correct: false },
                        { text: "Začali hromadně odstraňovat svá digitální díla z internetu a knihoven", correct: false }
                    ]
                },
                {
                    question: "Který slavný herec musel varovat fanoušky, že deepfake video s jeho tváří propagující jistý produkt je podvod a on sám s ním nemá nic společného?",
                    answers: [
                        { text: "Tom Hanks – na podzim 2023 upozornil na falešnou reklamu na zubařský plán, kde zneužili jeho digitální podobu", correct: true },
                        { text: "Dwayne 'The Rock' Johnson – na TikToku kolovala deepfake reklama na posilovací přípravek s jeho falešným doporučením", correct: false },
                        { text: "Keanu Reeves – zjistil, že AI klon jeho obličeje propaguje kryptoměny", correct: false },
                        { text: "Morgan Freeman – objevilo se AI video, kde říká kontroverzní výroky, a herec to musel dementovat", correct: false }
                    ]
                },
                {
                    question: "Která osobnost z oblasti výzkumu AI opustila svou pozici ve velké technologické firmě, aby mohla otevřeně varovat před riziky umělé inteligence pro lidstvo?",
                    answers: [
                        { text: "Andrew Ng – zanevřel na komerční projekty a založil neziskovou organizaci dohlížející na AI", correct: false },
                        { text: "Geoffrey Hinton – přezdívaný 'kmotr AI', v roce 2023 odešel z Google a v letech 2024–2025 hlasitě upozorňoval na hrozby spojené s AI", correct: true },
                        { text: "Yann LeCun – opustil Meta a stal se zastáncem úplného moratoria na vývoj AI", correct: false },
                        { text: "Sam Altman – po sporu v OpenAI začal veřejně mluvit o možném konci lidstva kvůli AI", correct: false }
                    ]
                },
                {
                    question: "Jakou roli sehrál Larry Ellison (spoluzakladatel Oracle) v AI oblasti v roce 2025?",
                    answers: [
                        { text: "Finančně podpořil konkurenční startup Anthropic a stal se jeho většinovým vlastníkem", correct: false },
                        { text: "Uvedl, že AI nahradí všechny programátory v jeho firmě, a začal propouštět", correct: false },
                        { text: "Oracle se pod Ellisonovým vedením zapojil do obří investice do AI infrastruktury – stal se partnerem OpenAI v projektu 'Stargate' s příslibem 500 miliard $", correct: true },
                        { text: "Oznámil vytvoření prvního AI cloudu, který kompletně řídí sám sebe bez lidských administrátorů", correct: false }
                    ]
                }
            ]
        },
        {
            name: "Sekce 4 – Byznys a ekonomika AI",
            questions: [
                {
                    question: "Jaká mimořádná investice do AI infrastruktury byla oznámena v USA v lednu 2025?",
                    answers: [
                        { text: "Vstup Applu na trh AI čipů akvizicí společnosti Nvidia za 300 miliard $", correct: false },
                        { text: "Projekt 'Stargate' – společný podnik OpenAI, SoftBank a Oracle s plánem investovat 500 miliard $ do AI infrastruktury", correct: true },
                        { text: "Vytvoření saudsko-čínského megafondu, který investuje 1 bilion $ do AI startupů", correct: false },
                        { text: "Balíček federální vlády USA ve výši 10 miliard $ na vybavení škol AI technologiemi", correct: false }
                    ]
                },
                {
                    question: "Která mediální a zábavní společnost uzavřela koncem roku 2025 dohodu s OpenAI o licencování svých slavných postav pro generativní video platformu Sora?",
                    answers: [
                        { text: "The Walt Disney Company – poskytla přes 200 postav z Pixaru, Marvelu, Star Wars atd. a investovala 1 miliardu $ do OpenAI", correct: true },
                        { text: "Sony Pictures – povolilo využít ikonické filmové postavy, aby AI mohla točit pokračování filmů", correct: false },
                        { text: "Netflix – nabídl OpenAI licenci na své originální seriály výměnou za exkluzivní AI obsah", correct: false },
                        { text: "BBC – dala veřejnosti k dispozici archivy pořadů pro trénování AI, aby zvýšila kvalitu dabingu", correct: false }
                    ]
                },
                {
                    question: "Který celek zavedl v roce 2024/2025 jako první na světě komplexní právní rámec pro umělou inteligenci?",
                    answers: [
                        { text: "Evropská unie – přijala tzv. AI Act, první ucelenou regulaci AI systémů", correct: true },
                        { text: "Čína – vydala závazná pravidla, která zakazují trénovat AI na zahraničních datech", correct: false },
                        { text: "OSN – přijala globální úmluvu o regulaci vývoje pokročilé AI", correct: false },
                        { text: "Kongres USA – schválil federální 'Zákon o transparentní AI'", correct: false }
                    ]
                },
                {
                    question: "Co se stalo s akciemi společnosti NVIDIA v lednu 2025 a proč?",
                    answers: [
                        { text: "Propadly se o ~17 %, poté co open-source model DeepSeek-R1 dosáhl výkonu srovnatelného s produkty vyžadujícími drahé NVIDIA GPU", correct: true },
                        { text: "Nevykazovaly žádné větší výkyvy, protože AI sektor se jich prakticky netýká", correct: false },
                        { text: "Bylo s nimi pozastaveno obchodování kvůli podezření, že AI manipulovala trh", correct: false },
                        { text: "Vyletěly prudce vzhůru díky zprávě o průlomu v čipové technologii pro AI", correct: false }
                    ]
                },
                {
                    question: "Jaký nový obchodní model se objevil v médiích v souvislosti s generativní AI?",
                    answers: [
                        { text: "Kompletní nahrazování redaktorů a tvůrců obsahem generovaným AI ke snižování nákladů", correct: false },
                        { text: "Uzavírání licenčních dohod mezi AI firmami a vlastníky obsahu – např. dohoda, v níž Disney umožní AI generovat obsah s jeho postavami výměnou za podíl", correct: true },
                        { text: "Předplatné na míru, kdy si uživatel platí konkrétní osobnost či styl, jímž mu AI bude poskytovat obsah", correct: false },
                        { text: "Prodej 'syrových' dat pro trénink AI přímo jednotlivcům, kteří si chtějí vytrénovat vlastního chatbota", correct: false }
                    ]
                },
                {
                    question: "Jaké spory o data a trénink AI se vyostřily v roce 2025?",
                    answers: [
                        { text: "Autoři a další tvůrci hromadně zpochybnili legálnost trénování AI na svých dílech – podali žaloby, tvrdí porušení autorských práv", correct: true },
                        { text: "Země G7 se dohadovaly, zda si navzájem umožní přístup ke svým národním datovým archivům pro trénink AI", correct: false },
                        { text: "Velké sociální sítě (Twitter, Reddit) zakázaly AI přístup k veškerému obsahu a hrozily žalobami", correct: false },
                        { text: "EU a USA vedly spor o to, čí AI modely budou nasazeny v globálních internetových vyhledávačích", correct: false }
                    ]
                },
                {
                    question: "Která velká firma v roce 2025 výrazně investovala do startupu Anthropic (tvůrce modelu Claude) a posílila tak své zapojení do AI?",
                    answers: [
                        { text: "Amazon – už v roce 2023 do něj vložil přes 4 miliardy $ a v květnu 2025 se objevil 'Amazon-backed' model Claude 4", correct: true },
                        { text: "Tesla – odkoupila 40 % podíl v Anthropicu a plánuje využít AI v samořízení", correct: false },
                        { text: "Apple – investoval majoritně do Anthropic, aby dohnal konkurenční náskok", correct: false },
                        { text: "IBM – spojilo se s Anthropicem a integrovalo Claude do svého IBM Watson systému", correct: false }
                    ]
                },
                {
                    question: "Jak se platformy nabízející AI asistenty přizpůsobily firemním zákazníkům?",
                    answers: [
                        { text: "Omezily funkce generativní AI jen na předem schválené scénáře použití", correct: false },
                        { text: "Zavedly podnikové verze s důrazem na ochranu dat – např. ChatGPT Enterprise pro firmy, Disney využívá API OpenAI pro interní nástroje", correct: true },
                        { text: "Umožnily společnostem trénovat zcela nové modely od nuly pomocí jednoho kliknutí", correct: false },
                        { text: "Začaly poskytovat své služby zcela zdarma a otevřeně, aby podpořily co nejširší adopci", correct: false }
                    ]
                },
                {
                    question: "Který technologický gigant oznámil v roce 2025 restrukturalizaci svého podnikání kvůli AI, včetně možného propouštění zaměstnanců nahrazených AI?",
                    answers: [
                        { text: "Samsung – propustil polovinu testerů softwaru s tím, že jejich práci zastane AI", correct: false },
                        { text: "Meta – zrušila svou divizi pro vývoj metaversa a plně se přeorientovala na AI", correct: false },
                        { text: "IBM – již v předchozím roce naznačil, že některé administrativní role nahradí AI, což v AI éře 2025 rezonovalo jako příklad změn na trhu práce", correct: true },
                        { text: "OpenAI – rozhodl se přesunout většinu vývoje mimo USA kvůli levnější pracovní síle pro trénování modelů", correct: false }
                    ]
                },
                {
                    question: "Co bylo jedním z hlavních témat byznysových sporů kolem AI v roce 2025?",
                    answers: [
                        { text: "Otázka autorských práv a fair use – zda mohou AI modely volně využívat cizí obsah ke svému tréninku, aniž by platily či žádaly o svolení", correct: true },
                        { text: "Jak zdanit přidanou hodnotu vytvořenou umělou inteligencí (např. texty a obrázky generované AI)", correct: false },
                        { text: "Zda má mít vláda podíl v každé velké AI společnosti výměnou za přístup k výpočetním zdrojům", correct: false },
                        { text: "Kdo ponese odpovědnost za škody způsobené chybnými rozhodnutími AI (firmy vs. uživatelé)", correct: false }
                    ]
                }
            ]
        },
        {
            name: "Sekce 5 – Kuriozity, paradoxy a 'tohle by nikdo nečekal'",
            questions: [
                {
                    question: "Jaký nebezpečný žert se šířil na TikToku v roce 2025 s pomocí AI generovaných obrázků?",
                    answers: [
                        { text: "Teenageři vytvářeli falešné fotky 'zlodejů v domě' a posílali je rodičům, čímž je vyděsili k volání policie (virální trend falešných vloupání)", correct: true },
                        { text: "Populární byla aplikace s AR filtrem 'duch v ložnici', který k smrti vylekal řadu uživatelů", correct: false },
                        { text: "Lidé pomocí AI simulovali přírodní katastrofy (jako falešné tornádo ve městě) jen pro zhlédnutí", correct: false },
                        { text: "Šířil se hoax, že TikTok sám nasazuje AI generované tváře do videí uživatelů bez jejich vědomí", correct: false }
                    ]
                },
                {
                    question: "Jakou kuriózní chybu udělal AI 'meal planner' (plánovač receptů) spuštěný v jednom novozélandském supermarketu?",
                    answers: [
                        { text: "Vygeneroval dietní plán o 300 kaloriích na den pro kojence", correct: false },
                        { text: "Navrhl recept na 'osvěžující nápoj', který by ve skutečnosti při smíchání surovin vytvářel jedovatý chlorový plyn (kombinace bělidla a čisticích prostředků)", correct: true },
                        { text: "Zaměnil slova a nabídl zákazníkům dort s náplní z motorového oleje místo jedlého", correct: false },
                        { text: "Doporučil péct chleba v mikrovlnce zabalený v alobalu, což vedlo k explozi trouby", correct: false }
                    ]
                },
                {
                    question: "Co netradičního využil jeden pár z USA při své svatbě, což se stalo virální zprávou?",
                    answers: [
                        { text: "Nechali svůj svatební obřad oficiálně oddat umělou inteligencí – ChatGPT napsal a v syntetické řeči přednesl oddávací proslov", correct: true },
                        { text: "Celé menu na hostině vytvořila AI podle preferencí hostů a jídla připravila automatická kuchyně", correct: false },
                        { text: "Nechali AI v přímém přenosu složit a zahrát jejich svatební pochod na míru", correct: false },
                        { text: "Jako svědky použili roboty s AI, kteří vtipně odpovídali na dotazy hostů", correct: false }
                    ]
                },
                {
                    question: "Který moderní trend ukázal paradoxní prolnutí světa lidí a AI na sociálních sítích?",
                    answers: [
                        { text: "Vysílání tzv. 'NPC streamů', kde skuteční lidé (influenceři) vystupovali jako bezduché postavičky reagující jen slovy a gesty naučenými z videoher – napodobovali tak chování AI v hrách", correct: true },
                        { text: "Challenge, v níž uživatelé 24 hodin poslouchali jen AI generovanou hudbu a popisovali své pocity", correct: false },
                        { text: "Soutěže, kde lidé soupeřili s AI v co nejrychlejším scrollování obsahu na TikToku", correct: false },
                        { text: "Hromadné zakládání falešných účtů 'AI influencerů', které však fanoušci považovali za reálné osoby", correct: false }
                    ]
                },
                {
                    question: "Co patřilo mezi překvapivá kreativní využití AI v běžném životě roku 2025?",
                    answers: [
                        { text: "Používání AI drona k venčení psa zcela bez dozoru člověka", correct: false },
                        { text: "Vyfocení nepořádné police v koupelně a požádání AI asistenta, aby rozpoznal všechny produkty a navrhl jejich uspořádání (včetně vytvoření nákupního seznamu)", correct: true },
                        { text: "Využití domácí AI k tomu, aby za uživatele vedla nepříjemné telefonní hovory s telemarketéry", correct: false },
                        { text: "Trénování AI na vlastních snech – lidé si nechávali generovat videa podle toho, co se jim v noci zdálo", correct: false }
                    ]
                },
                {
                    question: "Jak se jmenuje virtuální influencerka, která vypadá a vystupuje jako skutečná osoba, přestože je kompletně generovaná umělou inteligencí, a má na Instagramu statisíce sledujících?",
                    answers: [
                        { text: "Alexa Nova – modelka, jejíž profil řídí AI manažer", correct: false },
                        { text: "RoboRose – AI avatar, který se stal moderátorem MTV", correct: false },
                        { text: "Lil Miquela – jedna z prvních a nejslavnějších AI influencerek na sociálních sítích", correct: true },
                        { text: "Kate Clone – virtuální dvojník známé celebrity, kterého vytvořili fanoušci pomocí AI", correct: false }
                    ]
                },
                {
                    question: "Jaký paradox se pojí s fenoménem tzv. AI 'halucinací'?",
                    answers: [
                        { text: "Že pokročilá AI nedokáže vysvětlit své vlastní myšlenkové postupy, takže působí jako geniální kouzelník beze slov", correct: false },
                        { text: "Že AI modely někdy s naprostou sebedůvěrou poskytují nesprávné či vymyšlené odpovědi – uživatelé pak mají dojem, že mluví s odborníkem, i když AI si ve skutečnosti 'vymýšlí'", correct: true },
                        { text: "Že čím více dat AI zná, tím častěji tvrdí, že 'nic neví' (aby se vyhnula odpovědnosti)", correct: false },
                        { text: "Že AI občas považují lidské odpovědi za chybné, protože nechápou kontext emocí", correct: false }
                    ]
                },
                {
                    question: "Čím překvapil jeden americký profesor při testování studentů v roce 2025 ohledně použití AI?",
                    answers: [
                        { text: "Nabídl nejlepšímu studentovi místo asistenta, ale ten ho odmítl s tím, že ho nahradí AI verze sebe sama", correct: false },
                        { text: "Zadal ChatGPT úkol odhalit, kteří studenti opsali práci pomocí AI – a ChatGPT mylně označil téměř všechny, takže profesor nejprve hromadně obvinil celou třídu z podvádění", correct: true },
                        { text: "Použil deepfake video ředitele školy, aby studentům promluvil do duše o poctivosti (a většina studentů nepoznala, že video není skutečné)", correct: false },
                        { text: "Nechal studenty napsat test společně s AI asistenty a všichni dosáhli lepšího hodnocení než předchozí roky", correct: false }
                    ]
                },
                {
                    question: "Jaké netradiční využití hlasových klonů AI pobavilo internet v roce 2025?",
                    answers: [
                        { text: "Vznikl trend posílat přátelům personalizované 'hlasové vzkazy', kde jim jakoby volá celebrita s blahopřáním k narozeninám", correct: false },
                        { text: "V populární videohře moderoval herní rádio AI hlas imitující bývalého amerického prezidenta", correct: false },
                        { text: "Fanoušci vytvořili duet 'Imagine' Johna Lennona a Kurta Cobaina, přestože tito hudebníci nikdy společně nezpívali – pomocí AI hlasů je propojili posmrtně do nové skladby", correct: true },
                        { text: "Byla vydána audio kniha, kde hlas AI napodobující Shakespeara 'čte' moderní detektivku", correct: false }
                    ]
                },
                {
                    question: "Který pojem se v roce 2025 stal populárním a označuje obavu z technologie AI, jež by mohla přinést zkázu nebo zánik lidstva?",
                    answers: [
                        { text: "'AI x-risk' (existential risk) – v debatách se často probíralo, zda by extrémně pokročilá AI mohla ohrozit samotnou existenci civilizace", correct: true },
                        { text: "'Digital apocalypse' – víra v to, že AI vyvolá globální kybernetickou válku", correct: false },
                        { text: "'AI winter' – označení hypotetického kolapsu vývoje AI kvůli regulacím", correct: false },
                        { text: "'Singularity now' – hnutí požadující okamžité spojení lidského mozku s AI", correct: false }
                    ]
                }
            ]
        }
    ]
};

// Export pro použití v app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = quizData;
}
