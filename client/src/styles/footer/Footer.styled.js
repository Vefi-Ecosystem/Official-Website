import styled from 'styled-components';
import { LinkRouter } from '../../utility';
import { Heading, Subheading } from '../section/Section.styled';
import { Box, Row } from '../section/Tokenomics.styled';

export const FooterWrapper = styled.section`
  width: 100%;
  background: ${({ bg }) => bg || ''};
  height: 100%;
  padding: 80px 0px;

  ${Heading} {
    padding-top: 20px;
  }
  ${Subheading} {
    margin-left: 5px;
  }

  ${Box} {
    padding-top: 50px;

    @media screen and (max-width: 768px) {
      padding-top: 10px;
    }
  }

  @media screen and (max-width: 768px) {
    height: 100%;

    ${Row} {
      flex-direction: column;
    }
  }
`;

export const FooterLogo = styled(LinkRouter)`
  img {
    width: 150px;
    height: 60px;
    object-fit: contain;
  }
`;
export const FooterLink = styled.a`
  @media screen and (max-width: 768px) {
    button {
      float: left;
    }
  }
`;
