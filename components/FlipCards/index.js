import { StyledFlipCard, StyledText } from "./style";
import Card from "../card/card";

function FlipCards() {
  const date = new Date();
  const formattedDate = `${date.toLocaleDateString()} ${
    date.toLocaleTimeString
  }`;
  return (
    <StyledFlipCard>
      <div>{formattedDate}</div>
      <StyledText>Today's Workout</StyledText>
      <Card />
    </StyledFlipCard>
  );
}

export default FlipCards;
