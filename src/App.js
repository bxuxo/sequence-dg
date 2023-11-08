import "./App.css";

import { useRef } from "react";

import SlideComponent from "./components/SlideComponent.js";
import TitleScreen from "./components/TitleScreen.js";

export default function App() {
    const mainElem = useRef(null);

    function onEnter( ) {
        mainElem.current.focus( );
    }

    return (
        <>
            <TitleScreen 
                author={ 'Justs, Bruno, Roberts, Kārlis' }
                title={ 'Sekvences diagramma' }
                enterCallback={ onEnter }
            />

            <main className="container-all hidden-scrollbar" ref={ mainElem } tabIndex={ -1 }>

                <SlideComponent
                    title={
                        "Kas tā ir un vai tā ir struktūras vai uzvedības modeļa daļa?"
                    }
                    description={
                        "Sekvenču diagramma ir viena no uzvedības diagrammu kategorijām, un tās galvenais mērķis ir attēlot, kā dažādi objekti un sistēmas komponentes mijiedarbojas laika gaitā, modelējot to secību un notikumu izpildi. Sekvenču diagramma pieder uzvedības diagrammu kategorijai un tiek izmantota, lai vizuāli modelētu sistēmas uzvedību un darbību laika gaitā, neattiecoties uz to struktūru."
                    }
                    imgUrl={
                        "https://creately.com/static/assets/guides/sequence-diagram-tutorial/template5.webp"
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
                    imgUrl={"https://cdn.discordapp.com/attachments/515119370125443082/1171707601856254002/image.png?ex=655da8bd&is=654b33bd&hm=19fee0c26f849bf9f97bd38f454e25922b015d87c00f7f018d0030866a59a1c0&"}
                    bgCol={"rgb(50, 50, 50)"}
                    textCol={"white"}
                />


                <SlideComponent
                    title={"Kāds ir piemērs ar skaidrojumu?"}
                    description={
                        "Lorem lorem rejahb rgueahriofhajbfh oijahebfjo iuhajvebhjfiuo uhegajvnbfiuou heajvbjfiuo hkajebjhkofiu hkjbaehuoi fhjbaeiuohk fjbvnheajiuohfjb kaoeiuhj fbkiuoeahbj fkoiueahjvbnhfjiuo aeuhjvbhfiuo aehkjb"
                    }
                    imgUrl={"https://cdn-images.visual-paradigm.com/guide/uml/what-is-sequence-diagram/01-sequence-diagram-example.png"}
                    bgCol={"rgb(50, 50, 50)"}
                    textCol={"white"}
                />

                <SlideComponent
                    title={"Kā šī diagramma izskatās Bloga gadījumā?"}
                    description={
                        "Lorem lorem rejahb rgueahriofhajbfh oijahebfjo iuhajvebhjfiuo uhegajvnbfiuou heajvbjfiuo hkajebjhkofiu hkjbaehuoi fhjbaeiuohk fjbvnheajiuohfjb kaoeiuhj fbkiuoeahbj fkoiueahjvbnhfjiuo aeuhjvbhfiuo aehkjb"
                    }
                    imgUrl={"https://cdn.discordapp.com/attachments/515119370125443082/1171706744590831706/image.png?ex=655da7f1&is=654b32f1&hm=fa6596d9635fc7ef2c5912f6193b3a369518e3a50deb59e7acb66bf7983e667d&"}
                    bgCol={"rgb(50, 50, 50)"}
                    textCol={"white"}
                />
            </main>
        </>
    );
}