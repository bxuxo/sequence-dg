import "./App.css";

import SlideComponent from "./components/SlideComponent.js";
import TitleScreen from "./components/TitleScreen.js";

export default function App() {
    return (
        <main className="container-all hidden-scrollbar">
            <TitleScreen 
                author={ 'Justs, Bruno, Roberts, Kārlis' }
                title={ 'Sekvences diagramma' }
            />

            <SlideComponent
                title={"Sekvences diagramma"}
                description={"Roberts, Kārlis, Bruno, Justs"}
                imgUrl={
                    "https://w0.peakpx.com/wallpaper/87/777/HD-wallpaper-hipster-cat-glasses-thumbnail.jpg"
                }
                bgCol={"rgb(50, 50, 50)"}
                textCol={"white"}
            />

            <SlideComponent
                title={
                    "Kas tā ir un vai tā ir struktūras vai uzvedības modeļa daļa?"
                }
                description={
                    "Sekvenču diagramma ir viena no uzvedības diagrammu kategorijām, un tās galvenais mērķis ir attēlot, kā dažādi objekti un sistēmas komponentes mijiedarbojas laika gaitā, modelējot to secību un notikumu izpildi. Sekvenču diagramma pieder uzvedības diagrammu kategorijai un tiek izmantota, lai vizuāli modelētu sistēmas uzvedību un darbību laika gaitā, neattiecoties uz to struktūru."
                }
                imgUrl={
                    "https://media.kare11.com/assets/ETONLINE/images/ff7512df-eb27-44af-8cc4-3029fe0c3c8f/ff7512df-eb27-44af-8cc4-3029fe0c3c8f_1140x641.png"
                }
                bgCol={"rgb(50, 50, 50)"}
                textCol={"white"}
            />

            <SlideComponent
                title={"Kad to izmanto?"}
                description={
                    "Secības diagrammas ir noderīgas, lai vizualizētu un izprastu mijiedarbības plūsmu sistēmā. Tās parasti izmanto programmatūras izstrādes projektēšanas un dokumentēšanas fāzēs, lai attēlotu sistēmas dinamisko uzvedību vai izprastu esošās sistēmas."
                }
                imgUrl={
                    "https://th.bing.com/th/id/OIP.n0YL6HVlb9Pp0yWMgk9VugHaIN?pid=ImgDet&rs=1"
                }
                bgCol={"rgb(50, 50, 50)"}
                textCol={"white"}
            />

            <SlideComponent
                title={"Kādi UML elementi ir sekvences diagrammā?"}
                description={
                    "Līnija dzīvē: Līnija dzīvē ir UML elements, kas pārstāv objektu vai dalībnieku mijiedarbībā, un tas tiek izmantots, lai attēlotu objekta pastāvēšanu laika gaitā.Aktivizācijas josla: Aktivizācijas josla, kas ir vertikāls četrstūris uz līnijas dzīvē, pārstāv laika periodu, kurā objekts ir aktīvs un apstrādā ziņojumu.Ziņojums: Ziņojumi, ieskaitot sinhronos, asinhronos un atgriešanas ziņojumus, ir UML elementi, kas tiek izmantoti, lai attēlotu komunikāciju un mijiedarbību starp objektiem.Paša ziņojums: Paša ziņojumi, kas tiek izmantoti, lai parādītu, ka objekts sūta ziņojumu pašam sev, ir arī UML elementi."
                }
                imgUrl={"https://i.imgur.com/79TgQz9.jpg"}
                bgCol={"rgb(50, 50, 50)"}
                textCol={"white"}
            />


            <SlideComponent
                title={"Kāds ir piemērs ar skaidrojumu?"}
                description={
                    "Lorem lorem rejahb rgueahriofhajbfh oijahebfjo iuhajvebhjfiuo uhegajvnbfiuou heajvbjfiuo hkajebjhkofiu hkjbaehuoi fhjbaeiuohk fjbvnheajiuohfjb kaoeiuhj fbkiuoeahbj fkoiueahjvbnhfjiuo aeuhjvbhfiuo aehkjb"
                }
                imgUrl={"https://i.imgur.com/79TgQz9.jpg"}
                bgCol={"rgb(50, 50, 50)"}
                textCol={"white"}
            />

            <SlideComponent
                title={"Kā šī diagramma izskatās Bloga gadījumā?"}
                description={
                    "Lorem lorem rejahb rgueahriofhajbfh oijahebfjo iuhajvebhjfiuo uhegajvnbfiuou heajvbjfiuo hkajebjhkofiu hkjbaehuoi fhjbaeiuohk fjbvnheajiuohfjb kaoeiuhj fbkiuoeahbj fkoiueahjvbnhfjiuo aeuhjvbhfiuo aehkjb"
                }
                imgUrl={"https://i.imgur.com/79TgQz9.jpg"}
                bgCol={"rgb(50, 50, 50)"}
                textCol={"white"}
            />
        </main>
    );
}
