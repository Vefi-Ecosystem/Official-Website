import React from "react";
import Banner from "../../components/Banner";
import { Container } from "@material-ui/core";
import { Display, Section } from "../../components/Grid";
import { H1, H2, P } from "../../components/Typography";
import AppBar from "../../components/AppBar";
import { AiFillCaretDown } from "react-icons/ai";

const AboutUs = () => {
  return (
    <>
      <Banner text="Changing the world's  future to make the world work better for us all" />
      <Section>
        <Container maxWidth="md">
          <Display width="0.6">
            <H1 size="30px">About us</H1>
          </Display>
          <Display width="1">
            <P size="20px" FontWeight="400" LineHeight="1.13em">
              <strong>VEFI</strong> is a blockchain system that operates a
              cryptocurrency exchange where all crypto services and products are
              as well accessed on a single platform.
            </P>
            <P size="20px" FontWeight="400" LineHeight="1.13em">
              The VEFI ecosystem Labs and members work towards one goal, which
              is to bring Blockchain technology closer to everyone with
              innovations that make impacts.
            </P>
            <P size="20px" FontWeight="400" LineHeight="1.13em">
              VEFI is enabling the efficient and easier way to create financial
              products, protocols and exchange of value across DeFi, governments
              and financial institutions.
            </P>
          </Display>
        </Container>
      </Section>
      <AppBar heading="Our Vision and Mission" icon={<AiFillCaretDown />} />
      <Section>
        <Container maxWidth="md">
          <Display width="0.6"></Display>
          <Display width="1">
            <H2 FontWeight="400" LineHeight="1.3em" size="18px">
              Our vision and mission is to globally improve the freedom of
              money, improve the blockchain technology and as well become a
              major blockchain infranstructure services provider in the
              ecosystem.
            </H2>
          </Display>
        </Container>
      </Section>
      <AppBar heading="Our Solution" icon={<AiFillCaretDown />} />
    </>
  );
};

export default AboutUs;
