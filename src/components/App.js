import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushi, setSushi] = useState([])
  const [eaten, setEaten] = useState([])
  const [position, setPosition] = useState(0)
  const [money, setMoney] = useState(200)

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(data => setSushi(data))
  }, [])

  const sushiDisplay = sushi.slice(position, position + 4)

  const handleEatSushi = (id, price) => {
    if (!eaten.includes(id) && money >= price) {
      const newEaten = [...eaten, id]
      const newMoney = money - price
      setEaten(newEaten)
      setMoney(newMoney)
    }
  }

  const handleMoreSushi = () => {
    if (position === sushi.length - 4) {
      setPosition(0)
    } else {
    setPosition(position + 4)
    }
  }

  return (
    <div className="app">
      <SushiContainer sushi={sushiDisplay} handleEatSushi={handleEatSushi} handleMoreSushi={handleMoreSushi} money={money} />
      <Table setMoney={setMoney} money={money} plates={eaten} />
    </div>
  );
}

export default App;
