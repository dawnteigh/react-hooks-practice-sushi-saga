import React, { useState } from "react";

function Sushi({ id, name, img_url, price, handleEatSushi, money }) {

  const [isEaten, setIsEaten] = useState(false)
  const toggleEaten = (id) => {
    if (isEaten === false && money >= price) {
      setIsEaten(isEaten => !isEaten)
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={() => {handleEatSushi(id, price); toggleEaten(id)}}>
        {/* Tell me if this sushi has been eaten! */}
        {isEaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
