import styled from "styled-components";
import rec from "../../assets/images/map.png";
import media from "../../utility/Media";

export const StyledExchange = styled.section`
  width: 100%;
  background: url(${rec}) no-repeat, #0f154a;
  display: flex;
  background-position: left;
  background-size: contain;
  background-blend-mode: darken;
  color: #fff;

  ${media.mobile`
    background:none;
    background-position: right;
  `}
`;

export const ExchangeContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin: 60px 0px;
  padding-bottom: 70px;

  h1 {
    margin-top: 70px;
    margin-bottom: 10px;
  }
  p {
    font-weight: 400;
    font-size: 24px;
    line-height: 1.3em;
    margin-left: 25px;
  }
  div > img {
    width: 350px;
    height: 450px;
    margin-bottom: -50px;
    object-fit: contain;
  }

  .desktop,
  .arrow {
    display: none;
  }
  ${media.mobile`
    width:100%;
    display:flex;
    flex-direction:column-reverse;
    margin-top:-30px;
    margin-bottom:-40px;
    color:#131313;
    .deskToptext{
      display:none;
    }
    .arrow{
      margin:20px 0px;
      display:flex;
      align-items:center;
      text-align:center;
      justify-content:center;

      img{
        width:60px;height:60px;object-fit:contain;
      }
    }
    .desktop{
      display:flex;
      width:100%;
      margin-top:40px;
      justify-content:center;
      
      img{
   
        width:100px;
        height:50%;
        object-fit:contain;
        margin:20px 20px;
      }
    }
    .mobileText{
      display:block;
      font-size:18px;
      font-weight:600;
      color:#131313;
    }
    h1{
      font-size:30px;
      margin-left:20px;
      color:#131313 !important;

      span{
        font-size:30px;
      }
    }

    div > img{
      width:450px;
    }
`}
`;
