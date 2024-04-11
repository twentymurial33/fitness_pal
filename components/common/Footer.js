import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {
  FooterContainer,
  FooterContent,
  FooterSection,
  FooterTitle,
  FooterText,
  SocialIcons,
} from "./style";

const defaultTheme = createTheme();

export default function StickyFooter() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <FooterContainer>
        <FooterContent>
          <FooterSection></FooterSection>
          <FooterSection style={{ marginRight: "380px" }}>
            <FooterText>Email: example@example.com</FooterText>
            <FooterText>Phone: 123-456-7890</FooterText>
          </FooterSection>
          <FooterSection></FooterSection>
        </FooterContent>
      </FooterContainer>
    </ThemeProvider>
  );
}
