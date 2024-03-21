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
          <FooterSection>
            <FooterTitle>About Us</FooterTitle>
            <FooterText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </FooterText>
          </FooterSection>
          <FooterSection>
            <FooterTitle>Contact Us</FooterTitle>
            <FooterText>Email: example@example.com</FooterText>
            <FooterText>Phone: 123-456-7890</FooterText>
          </FooterSection>
          <FooterSection>
            {/* <FooterTitle>Follow Us</FooterTitle> */}
            {/* <SocialIcons>
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </SocialIcons> */}
          </FooterSection>
        </FooterContent>
        <div className="footer__bottom">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </FooterContainer>
    </ThemeProvider>
  );
}
