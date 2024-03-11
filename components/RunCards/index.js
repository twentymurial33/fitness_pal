import React, { useState } from "react";
import {
  FlipWrapper,
  StyledContainer,
  FlipButton,
  StyledCardContent,
  StyledBack,
  StyledFlipFront,
  StyledFlipInner,
} from "./style";

const RunCards = () => {
  const cardFront = "Welcome to GFG.";
  const cardBack = "Computer Science Portal.";
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
            <StyledBack>
              <StyledCardContent>{cardBack}</StyledCardContent>
              <FlipButton onClick={handleFlip}>Flip</FlipButton>
            </StyledBack>
          </StyledFlipInner>
        </div>
      </FlipWrapper>
    </StyledContainer>
  );
};

export default RunCards;
