import React from "react";
import styled from 'styled-components';
import { Image } from '../components/image';
import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <AboutContainer>
      <Image/>
        <AboutMeBlurb>
        <AboutMeTitle>About Me</AboutMeTitle>
        <AboutMeText>
          Since graduating from Vanderbilt University's School of Engineering in May of 2019, I've 
          been working as a full stack software engineer with a particular love for frontend development. I
          have experience working with React, Node.js, GraphQL,  Microsoft .NET frameworks, AWS Cloud technologies, and more.
          I'm particularly passionate about applications of technology for social good and am a strong advocate for women in technology.
          In my free time, you can find me exploring NYC, planning my next trip, doing yoga, or sipping bubble tea. 
        </AboutMeText>
    </AboutMeBlurb>
    </AboutContainer>
  </Layout>
)

const AboutContainer = styled.div`
  margin-top: 54px;
  height: 700px;
`;

const AboutMeBlurb = styled.div`
    max-width: 500px;
    margin: auto;
    margin-top: 20px;
    align-items: center;
`;

const AboutMeTitle = styled.h3`
  margin-bottom: 5px;
`;

const AboutMeText = styled.p`
  font-size: 16px;
  max-width: 500px;
  word-spacing: 3px;
`;


export default AboutPage;

