import { useState } from "react";
import PropsDemo from "./exercises/PropsDemo";
import "./App.css";
import ListDemo from "./exercises/ListDemo";
import FormUncontrolled from "./exercises/FormUncontrolled";
import StateDemo2 from "./exercises/StateDemo2";
import StateDemo1 from "./exercises/StateDemo";
import EventDemo1 from "./exercises/EventDemo";
import StateDemo3 from "./exercises/StateDemo3";
import UseEffectDemo from "./exercises/UseEffect";
import ContextDemoApp from "./exercises/ContextDemo";
import LiftingState from "./components/LiftingState";

export default function App() {
  const [selectedView, setSelectedView] = useState("info");
  function handleSelected(selected: string) {
    setSelectedView(selected);
  }
  return (
    <>
      <div className="outer-div-style">
        <div className="header-style">
          <h2>React Exercises</h2>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1, padding: 10 }}>
            <Buttons onSelected={handleSelected} />
          </div>
          <div className="exercise-style">
            {selectedView == "info" ? <p>All exercises for React day-1</p> : null}
            {selectedView == "props1" ? <PropsDemo title="Props Demo"/> : null}
            {selectedView == "listdemo1" ? <ListDemo title="List Demo"/> : null}
            {selectedView == "eventdemo1" ? <EventDemo1 title="Event Demo" /> : null}
            {selectedView == "form-uncontrolled" ? <FormUncontrolled title="Forms uncontrolled" /> : null}
            {selectedView == "statedemo1" ? <StateDemo1 title="Forms uncontrolled" /> : null}
            {selectedView == "statedemo2" ? <StateDemo2 title="State demo 2" /> : null}
            {selectedView == "statedemo3" ? <StateDemo3 title="State demo 3" /> : null}
            {selectedView == "useeffect1" ? <UseEffectDemo title="Use effect demo1" /> : null}
            {selectedView == "liftingstate1" ? <LiftingStat title="Lifting state demo1" /> : null}
            {selectedView == "contextdemo1" ? <ContextDemoApp title="Context demo1" /> : null}
          </div>
        </div>
      </div>
    </>
  );
}

type ButtonProps = {
  onSelected: (selected: string) => void;
};

const Buttons = (props: ButtonProps) => {
  const { onSelected: handleSelected, btnStyle: btnStyle } = props;
  return (
    <>
      <button className="btn-w100" onClick={() => handleSelected("info")}>
        Info
      </button>
      <button className="btn-w100" onClick={() => handleSelected("props1")}>
        Props Demo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("listdemo1")}>
        List Demo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("eventdemo1")}>
        Event Demo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("statedemo1")}>
        State Demo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("formuncontrolleddemo1")}>
        Formuncontrolled
      </button>
      <button className="btn-w100" onClick={() => handleSelected("statedemo2")}>
        State Demo 2
      </button>
      <button className="btn-w100" onClick={() => handleSelected("statedemo3")}>
        State Demo 3
      </button>
      <button className="btn-w100" onClick={() => handleSelected("useeffectdemo1")}>
        Use Effect
      </button>
      <button className="btn-w100" onClick={() => handleSelected("liftingstatedemo1")}>
        Lifting State
      </button>
      <button className="btn-w100" onClick={() => handleSelected("contextdemo1")}>
        Context Demo
      </button>
    </>
  );
};