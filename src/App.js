import logo from './logo.svg';
import './App.css';
import { UseState } from './components/UseState/UseState';
import { UseReducer } from './components/UseReducer.js/UseReducer';
import { ObjectUseState } from './components/Immutable State/ObjectUseState';
import { ArrayUseState } from './components/Immutable State/ArrayUseState';
import { Parent } from './components/Parent Child/Parent';
import { ParentOne } from './components/Optimization/ParentOne';
import { ChildOne } from './components/Optimization/ChildOne';
import { GrandOne } from './components/Optimization/GrandOne';
import { ParentTwo } from './components/Optimization/ParentTwo';
import { ParentThree } from './components/Incorrect Optimizations/ParentThree';
import { ParentFour } from './components/Incorrect Optimizations/ParentFour';

function App() {
  return (
    <div className="App">
      <ParentFour />
      {/* <Parent /> */}
      {/* <ArrayUseState /> */}
      {/* <ObjectUseState /> */}
      {/* <UseReducer /> */}
      {/* <UseState />       */}
    </div>
  );
}

export default App;
