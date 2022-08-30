import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  
  // ORIGINAL FOR REFERANCE: const appClass = false ? "App dark" : "App light"
  
  //    1) need to use useState variable "mode" and use a setter
  //       function for that variable "setMode" AKA(array destructuring)
  const [mode, setMode] = useState(false)

  //    2) call the mode function 
  const appClass = mode ? "App dark" : "App light"

  //    3) update the state using the setter function(updates the variable)
  function handleMode(){
    setMode(!mode)
  }
  //    4)change <button>Dark Mode</button> to <button onClick={handleMode}>{mode?'Light Mode':'Dark Mode'}</button>
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleMode}>{mode?'Light Mode':'Dark Mode'}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;