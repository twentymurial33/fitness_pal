import React, { useState } from "react";
import { StyledFlipCard } from "./style";

const FlipCard = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <StyledFlipCard onClick={handleFlip}>
      <StyledFlipCard>{frontContent}</StyledFlipCard>
      <StyledFlipCard>{backContent}</StyledFlipCard>
    </StyledFlipCard>
  );
};

export default FlipCard;
