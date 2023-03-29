import './App.css';
import { useState } from "react";
import GetRandomGift from './components/GetRandomGift';
import ToDoList from './components/ToDoList';
import Radio from './components/Radio';
import Checkbox from './components/Checkbox';
import Input from './components/Input';

function App() {
  const [randomGift, setRandomGift] = useState(false);
  const [toDoList, setToDoList] = useState(false);
  const [radio, setRadio] = useState(false);
  const [checkbox, setCheckbox] = useState(false);
  const [input, setInput] = useState(false);
  return (
    <>


      <h1 className='text-center '>ReactJS</h1>

      <button
        className="btn btn-primary w-100"
        onClick={() => setRandomGift(!randomGift)}>Random Gift
      </button>

      <button
        className="btn btn-primary w-100"
        onClick={() => setToDoList(!toDoList)}>To Do List
      </button>
      <button
        className="btn btn-primary w-100"
        onClick={() => setRadio(!radio)}>Radio
      </button>

      <button
        className="btn btn-primary w-100"
        onClick={() => setCheckbox(!checkbox)}>Checkbox
      </button>

      <button
        className="btn btn-primary w-100"
        onClick={() => setInput(!input)}>Input
      </button>

      {/* render component */}
      <div className="col-12 ">
        {randomGift && <GetRandomGift />}
        {toDoList && <ToDoList />}
        {radio && <Radio />}
        {checkbox && <Checkbox />}
        {input && <Input />}
      </div>
    </>
  );
}

export default App;
