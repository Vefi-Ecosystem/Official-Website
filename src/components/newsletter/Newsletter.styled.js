import styled from "styled-components";
import rectangle from "../../assets/images/rectangle.svg";
export const StyledNewsletter = styled.section`
  width: 100%;
  display: flex;
  height: 400px;
  background: url(${rectangle});
  color: white;
  padding-top: 50px;
`;

export const NewsletterContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  position: relative;
  flex-direction: column;
`;

export const NewsletterDiv = styled.div`
  background: #fbf6b4;
  width: 90%;
  display: flex;
  flex: 0.5;
  color: #000;
  border-radius: 20px;
  padding: 50px 30px;
  flex-direction: column;
`;
export const NewsletterGetStarted = styled.div`
  h1 {
    font-size: 34px;
    letter-spacing: 1.5px;
    font-weigh: 600;
    margin-bottom: 20px;
  }
  p {
    font-weight: 400;
    font-size: 18px;
    margin-left: 8px;
    line-height: 1.3em;
  }
`;
export const NewsletterFormContainer = styled.div`
  margin-top: 20px;
`;
export const NewletterForm = styled.div`
  background: white;
  width: 500px;
  border-radius: 5px;
  padding: 5px;
  border: 1px solid #000 #ccc;
  display: flex;
  input {
    width: 80%;
    border: none;
    outline: none;
    color: #333;
    padding: 8px;
    font-weight: 600;
    margin-right: 10px;
  }
  button {
    background: black;
    color: #fff;
    text-transform: lowercase;

    &:hover {
      background: black;
    }
  }
`;

export const NewsletterImage = styled.div`
  flex: 0.3;
  display: flex;
  position: absolute;
  right: 0;
  top: 0;
  height: 200px;
  margin-top: -80px;
  margin-right: 30px;

  img {
    width: 350px;
    height: 350px;
    object-fit: contain;
  }
`;