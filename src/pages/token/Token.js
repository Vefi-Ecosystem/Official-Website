import { Container } from "@material-ui/core";
import React from "react";
import { StyledButton } from "../../components/Button";
import { Timer } from "../../components/CountDown";
import { SectionWrapper } from "../../components/Section";
import { H1, P } from "../../components/Typography";
import { FaCheckCircle } from "react-icons/fa";

import SEO from "../../seo";
import {
  StyledTokenCounterTimerBox,
  StyledTokenSalesContainer,
  StyledTokenSalesCountDownContainer,
  StyledTokenSalesDesc,
  StyledTokenSaleStat,
  StyledTokenSaleWrapper
} from "./Token.styled";

const Token = () => {
  return (
    <>
      <SEO title="Buy VEF Token" />
      <SectionWrapper>
        <Container>
          <StyledTokenSalesContainer>
            <StyledTokenSaleWrapper>
              <div>
                <StyledTokenSalesCountDownContainer>
                  <H1 size="2.5rem" fw="normal">
                    Our seed sales starts in
                  </H1>
                  <StyledTokenCounterTimerBox>
                    <Timer>
                      <H1 size="4rem !important">46</H1>
                      <span>Days</span>
                    </Timer>
                    <span>:</span>
                    <Timer>
                      <H1 size="4rem !important">12</H1>
                      <span>Hours</span>
                    </Timer>
                    <span>:</span>
                    <Timer>
                      <H1 size="4rem !important">05</H1>
                      <span>Min</span>
                    </Timer>
                    <span>:</span>
                    <Timer>
                      <H1 size="4rem !important">56</H1>
                      <span>Sec</span>
                    </Timer>
                  </StyledTokenCounterTimerBox>
                  <StyledTokenSaleStat>
                    <p>VEF sold</p>
                    <div className="box"></div>
                    <div className="progress">
                      <span>0 vef</span>
                      <span>50m vef</span>
                      <span>100m vef</span>
                      <span>150m vef</span>
                    </div>
                  </StyledTokenSaleStat>
                  <StyledButton bg="#1673B9">Purchase VEF Token</StyledButton>
                </StyledTokenSalesCountDownContainer>
              </div>
              <div>
                <StyledTokenSalesDesc>
                  <H1 size="2.8rem" lh="1.2em">
                    Our ICO sales program for VEF token will drive the Internet from Africa to the World.
                  </H1>
                  <P size="1.6rem">
                    We are currently opening our ICO for VEF token, with all funds collected to build and develop the
                    technical ecosystem for VEFI.
                  </P>
                  <ul>
                    <li>
                      <span>
                        <FaCheckCircle />
                      </span>
                      <span>Current token prize: $0.75</span>
                    </li>
                    <li>
                      <span>
                        <FaCheckCircle />
                      </span>
                      <span>Min purchase: $50</span>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <span>
                        <FaCheckCircle />
                      </span>
                      <span>Next token prize: $1.75</span>
                    </li>
                    <li>
                      <span>
                        <FaCheckCircle />
                      </span>
                      <span>Max purchase: $100,000</span>
                    </li>
                  </ul>
                </StyledTokenSalesDesc>
              </div>
            </StyledTokenSaleWrapper>
          </StyledTokenSalesContainer>
        </Container>
      </SectionWrapper>
    </>
  );
};

export default Token;