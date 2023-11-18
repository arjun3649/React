import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
//useEffect Example:
//Imagine you have a magical notebook (React), and you want it to remind you
//to do your homework whenever your friend tells you a new joke
//(let's call it "counter"). useEffect is like a note in your magical
//notebook that says, "If your friend tells you a new joke, remind
//yourself to do homework." So, every time your friend shares a
//joke, your magical notebook reminds you about homework.

//useCallback Example:
//Now, let's say you have a favorite person (Callback) who's really good at telling jokes.
// Whenever you want to hear a joke, you always ask this specific person.
//useCallback is like a note in your
//magical notebook that says, "When you want to hear a joke, always ask your favorite person Callback."
//This ensures that you consistently go to the same person for jokes,
//not randomly to different people.

//In simpler terms, useEffect helps you remember to do something when a
//specific event happens, like getting a reminder in your magical notebook.
//On the other hand, useCallback helps you remember to always go to the same person
//for a particular task, like asking your favorite person for jokes.

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");
  let pass = "";
  let str = "ABCDEFGHIJKLMNIOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  //useCallback is a React Hook that lets you cache a function definition between re-renders.
  //It’s similar to memoization in JavaScript but with more built-in support for React.
  // it remembers the previous state of function and update accordingly.
  // in simple terms this hook is used to store everythihng in cache and memorize the state ,
  //this hook is generally used for optimisation.
  const passwordgenerator = useCallback(() => {
    if (number) str += "0123456789";
    if (char) str += "!@#$%^&*()_+-{}[]|";

    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, number, char, setPassword]);
  // useEffect is a React Hook that lets you synchronize a component with an external system.
  // It can be used to perform side effects like data fetching or setting up event handlers.
  // The function passed to `useEffect` will run after the render phase of the component has completed.
  // in simple terms the funciton will run at the start then if there are any changes
  // in dependecies it will run again 
  useEffect(() => {
    passwordgenerator();
  }, [length, number, char, setPassword]);
// useref helps to get the refernce like while copy v get some additional functionalities
//like what is selected(copied text will be highlighted) , how much to select etc.
  const passwordRef = useRef(null);
  const copyPasswordClipboard = () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  };

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        >
          copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            id="numberInput"
            defaultChecked={number}
            onChange={() => {
              setNumber((prevnumber) => !prevnumber);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            id="characterInput"
            defaultChecked={char}
            onChange={() => {
              setChar((prevchar) => !prevchar);
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
