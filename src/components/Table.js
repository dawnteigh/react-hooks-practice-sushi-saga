import React, { useState } from "react";

function Table({ plates = [], money, setMoney }) {

  const [cash, setCash] = useState(0)

  // renders an empty plate for every element in the array
  const emptyPlates = plates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  const handleSubmit = (e) => {
    e.preventDefault()
    setMoney(money + cash)
    e.target.reset()
  }

  return (
    <>
      <h1 className="remaining">
        You have: ${money} remaining!
      </h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
        <form onSubmit={handleSubmit} >
        <input onChange={(e) => setCash(parseFloat(e.target.value))} type="number" step="0.01" placeholder="0.00" />
        <input type="submit" value="Add Money"/>
      </form>
      </div>
      
    </>
  );
}

export default Table;
