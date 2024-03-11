import { StyledFlipCard, StyledText, StyledParagraph } from "./style";
import RunCards from "../RunCards";

function FlipCards() {
  const date = new Date();
  const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  return (
    <StyledFlipCard>
      <StyledText>Today's Workout</StyledText>
      <StyledParagraph>{formattedDate}</StyledParagraph>
      <RunCards />
    </StyledFlipCard>
  );
}

export default FlipCards;
