import React from "react";
import { FiDownload } from "react-icons/fi";

import Image from "../../components/Image";
import {
  Heading,
  InfoColumn,
  InfoRow,
  InfoSec,
  InfoTextWrapper,
  InfoHeading,
  InfoDescription,
  Subheading
} from "../../styles/section/Section.styled";
import { Whitepapper } from "../../utility";
import { Button, Container } from "../../utility/GlobalStyle";

const InfoSection = ({ AboutUs }) => {
  return (
    <>
      <InfoSec id={AboutUs.id}>
        <Container>
          <Heading size="sm" bold className="infoSecHeading">
            {AboutUs?.title}
          </Heading>
          <InfoRow>
            <InfoColumn>
              <InfoTextWrapper>
                <InfoHeading>
                  <Heading bold size="sm" className="infoSecSubheading">
                    {AboutUs?.subtitle}
                  </Heading>
                </InfoHeading>
                <InfoDescription>
                  {AboutUs.description.map((des, i) => (
                    <Subheading key={i} padding="5px 0px">
                      {des}
                    </Subheading>
                  ))}
                </InfoDescription>
                <a href={Whitepapper} target="_blank" rel="noreferrer">
                  <Button
                    bgColor="var(--bg-blue)"
                    fontColor="#fff"
                    style={{ marginTop: "20px" }}
                    className="button"
                    icon={<FiDownload />}
                    label={AboutUs?.buttonText}
                  >
                    <FiDownload /> &nbsp;
                    {AboutUs?.buttonText}
                  </Button>
                </a>
              </InfoTextWrapper>
            </InfoColumn>
            <InfoColumn>
              <Image img={AboutUs.img} alt={AboutUs?.title} />
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
