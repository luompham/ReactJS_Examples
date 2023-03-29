import './App.css';
import { useState } from "react";
import GetRandomGift from './components/GetRandomGift';
import ToDoList from './components/ToDoList';
import Radio from './components/Radio'

function App() {
  const [randomGift, setRandomGift] = useState(false);
  const [toDoList, setToDoList] = useState(false);
  const [radio, setRadio] = useState(false);
  console.log('jobs: ', localStorage.getItem('jobs'))
  return (
    <>
      <div className='App-wrapper'>
        <div className="container">
          <div className="row">
            <div className="col-12 my-4">
              <h1 className='text-center '>ReactJS</h1>
            </div>
            <div className="col-12 my-4">
              <div className="container">
                <div className="row">
                  <div className="col-2">
                    <button
                      className="btn btn-primary"
                      onClick={() => setRandomGift(!randomGift)}>Random Gift
                    </button>
                  </div>
                  <div className="col-2">
                    <button
                      className="btn btn-primary"
                      onClick={() => setToDoList(!toDoList)}>To Do List
                    </button>
                  </div>
                  <div className="col-2">
                    <button
                      className="btn btn-primary"
                      onClick={() => setRadio(!radio)}>Radio
                    </button>
                  </div>
                </div>
              </div>


            </div>

            <div className="col-12 ">
              {randomGift && <GetRandomGift />}
              {toDoList && <ToDoList />}
              {radio && <Radio />}
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
