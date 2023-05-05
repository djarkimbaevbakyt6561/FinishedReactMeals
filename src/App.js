import { useState } from "react";
import { createPortal } from "react-dom";
import "./App.css";
import Header from "./components/header/Header";
import MealSummary from "./components/meal-summary/MealSummary";
import Meals from "./components/meals/Meals";
import Modal from "./components/modal/Modal";
function App() {
  const [openModalState, setOpenModalState] = useState(false)
  function toggleModalHandler() {
    setOpenModalState((prev) => !prev)
  }

  return (
    <div className="App">
      <Header onClick={toggleModalHandler}  />
      <MealSummary></MealSummary>
      <Meals></Meals>
      {openModalState && createPortal(
        <Modal onClick={toggleModalHandler} />,
        document.getElementById('modal')
      )}
    </div>
  );
}

export default App;