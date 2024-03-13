import React, { useState } from "react";
import {
  FlipWrapper,
  StyledContainer,
  FlipButton,
  StyledCardContent,
  StyledFlipFront,
  StyledFlipInner,
} from "./style";

const RunCards = () => {
  const cardFront = "Welcome to Fitness Pal.";
  const [isFlipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };

  return (
    <StyledContainer>
      <FlipWrapper>
        <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
          <StyledFlipInner div className="flip-card-inner">
            <StyledFlipFront div className="flip-card-front">
              <StyledCardContent>{cardFront}</StyledCardContent>
              <FlipButton onClick={handleFlip}>Flip</FlipButton>
            </StyledFlipFront>
          </StyledFlipInner>
        </div>
      </FlipWrapper>
    </StyledContainer>
  );
};

export default RunCards;
