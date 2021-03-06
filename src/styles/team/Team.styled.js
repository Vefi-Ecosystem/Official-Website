import styled from "styled-components";
import { Heading, Subheading } from "../section/Section.styled";

export const TeamContainer = styled.div`
  width: 100%;
  .teamheading {
    font: normal normal bold 40px/49px Gilroy ☞;
  }
  @media screen and (max-width: 768px) {
    .teamheading {
      font-size: var(--font-sm);
      font-weight: 600;
    }
  }
`;
export const TeamMember = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 265px);
  gap: 5px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const TeamWrapper = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  word-wrap: break-word;
`;
export const TeamMemeberImage = styled.div`
  width: 100%;
  height: 250px;

  img {
    width: 240px;
    height: 240px;
    object-fit: cover;
    border-radius: 50%;
    @media screen and (max-width: 768px) {
      height: 380px;
      width: 100%;
      border-radius: 20px;
    }
  }
  @media screen and (max-width: 768px) {
    height: 400px;
  }
`;
export const TeamMemberName = styled.div`
  @media screen and (max-width: 768px) {
    ${Heading} {
      font-size: 26px;
    }
  }
`;
export const TeamMemberRole = styled.div`
  margin-bottom: 10px;

  ${Subheading} {
    padding: 0px;
    font-size: small;

    @media screen and (max-width: 768px) {
      font-size: 18px;
    }
  }
`;
export const SocialLinks = styled.a`
  color: var(--heading-color);
  margin: 0px 5px;
  transition: 0.8s all ease-in-out;
  &:hover {
    color: var(--bg-blue);
    transition: 0.8s all ease-in-out;
  }
`;
