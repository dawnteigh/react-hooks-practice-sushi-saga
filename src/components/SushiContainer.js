import React from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi'

function SushiContainer({ sushi, handleEatSushi, handleMoreSushi, money }) {

 

  return (
    <div className="belt">
      {sushi.map(s => {
        return (<Sushi money={money} handleEatSushi={handleEatSushi} key={s.id} {...s} />)
      })}
      <MoreButton handleMoreSushi={handleMoreSushi} />
    </div>
  );
}

export default SushiContainer;
