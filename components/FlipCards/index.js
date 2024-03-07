import { StyledFlipCard, StyledText, StyledParagraph } from "./style";
import Card from "../card/card";

function FlipCards() {
  const date = new Date();
  const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  return (
    <StyledFlipCard>
      <StyledText>Today's Workout</StyledText>
      <StyledParagraph>{formattedDate}</StyledParagraph>
      <Card />
    </StyledFlipCard>
  );
}

export default FlipCards;
