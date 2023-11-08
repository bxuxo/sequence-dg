import "./App.css";

import { useRef } from "react";

import SlideComponent from "./components/SlideComponent.js";
import TitleScreen from "./components/TitleScreen.js";

export default function App() {
    const mainElem = useRef(null);

    function onEnter() {
        mainElem.current.focus();
    }

    return (
        <>
            <TitleScreen
                author={"Justs, Bruno, Roberts, Kārlis"}
                title={"Sekvences diagramma"}
                enterCallback={onEnter}
            />

            <main
                className="container-all hidden-scrollbar"
                ref={mainElem}
                tabIndex={-1}
            >
                <SlideComponent
                    title={
                        "Kas tā ir un vai tā ir struktūras vai uzvedības modeļa daļa?"
                    }
                    description={
                        "Sekvenču diagramma ir viena no uzvedības diagrammu kategorijām, un tās galvenais mērķis ir attēlot, kā dažādi objekti un sistēmas komponentes mijiedarbojas laika gaitā, modelējot to secību un notikumu izpildi. Sekvenču diagramma pieder uzvedības diagrammu kategorijai un tiek izmantota, lai vizuāli modelētu sistēmas uzvedību un darbību laika gaitā, neattiecoties uz to struktūru."
                    }
                    imgUrl={
                        "./img/template5.webp"
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
                        "./img/OIP.jpg"
                    }
                    bgCol={"rgb(50, 50, 50)"}
                    textCol={"white"}
                />

                <SlideComponent
                    title={"Kādi UML elementi ir sekvences diagrammā?"}
                    description={
                        "Līnija dzīvē: Līnija dzīvē ir UML elements, kas pārstāv objektu vai dalībnieku mijiedarbībā, un tas tiek izmantots, lai attēlotu objekta pastāvēšanu laika gaitā.Aktivizācijas josla: Aktivizācijas josla, kas ir vertikāls četrstūris uz līnijas dzīvē, pārstāv laika periodu, kurā objekts ir aktīvs un apstrādā ziņojumu.Ziņojums: Ziņojumi, ieskaitot sinhronos, asinhronos un atgriešanas ziņojumus, ir UML elementi, kas tiek izmantoti, lai attēlotu komunikāciju un mijiedarbību starp objektiem.Paša ziņojums: Paša ziņojumi, kas tiek izmantoti, lai parādītu, ka objekts sūta ziņojumu pašam sev, ir arī UML elementi."
                    }
                    imgUrl={
                        "./img/elements.png"
                    }
                    bgCol={"rgb(50, 50, 50)"}
                    textCol={"white"}
                />

                <SlideComponent
                    title={"Kāds ir piemērs ar skaidrojumu?"}
                    description={""}
                    imgUrl={
                        "./img/paskaidrojums.png"
                    }
                    bgCol={"rgb(50, 50, 50)"}
                    textCol={"white"}
                />

                <SlideComponent
                    title={"Kā šī diagramma izskatās Bloga gadījumā?"}
                    description={""}
                    imgUrl={
                        "./img/bloga_dg.png"
                    }
                    bgCol={"rgb(50, 50, 50)"}
                    textCol={"white"}
                />
                <SlideComponent
                    title={"Uzdevums jums!!!"}
                    description={
                        "Lietotājs grib nopirkt biļeti uz piecām naktīm pie fredija fazlāča. Izveido sekvences diagrammu, kur lietotājs ar serveri mijiedarbojās, pērkot biļeti onlainā."
                    }
                    imgUrl={
                        "./img/cigar.jpg"
                    }
                    bgCol={"rgb(50, 50, 50)"}
                    textCol={"white"}
                />

                <SlideComponent
                    title={"Mūsu koncepts pareizajai atbildei!"}
                    description={""}
                    imgUrl={
                        "./img/pareiza.png"
                    }
                    bgCol={"rgb(50, 50, 50)"}
                    textCol={"white"}
                />
            </main>
        </>
    );
}
