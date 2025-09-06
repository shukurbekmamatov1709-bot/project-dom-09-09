import { useState, useEffect} from "react";
import ToggleButton from "./components/ToggleButton";
import CardsList from "./components/UI/CardList";

const App = () => {

const[abal,setAbal]=useState(false)
const click=()=>setAbal(!abal)

 useEffect(() => {
    document.body.style.backgroundColor = abal ? "#2563eb" : "#f3f4f6"; 
  }, [abal]);
  return (
    <>
      <h1>Helloo</h1>
       <ToggleButton onClick={click} text="Изменить фон страницы" />
      <CardsList />
    </>
  );
};

export default App;