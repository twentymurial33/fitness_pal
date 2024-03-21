import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px 0;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const FooterSection = styled.div`
  /* flex: 1 1 30%; */
  margin-bottom: 20px;
`;

export const FooterTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const FooterText = styled.p`
  font-size: 14px;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;

  & > a {
    color: #fff;
    font-size: 20px;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #ccc;
    }
  }
`;