import React, { useState } from "react";
import { StyledFlipCard } from "./style";

function Card() {
  const [flip, setFlip] = useState(false);
  return (
    <StyledFlipCard onClick={() => setFlip(!flip)}>
      <h3></h3>
    </StyledFlipCard>
  );
}

export default Card;
