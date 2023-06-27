import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Hr,
  Img,
  Row,
  Column,
  Link,
  Section,
} from "@react-email/components";
import * as React from "react";

interface WaitlistEmailProps {
  name: string;
}

export const WaitlistEmail: React.FC<Readonly<WaitlistEmailProps>> = ({
  name,
}) => (
  <Html>
    <Head />
    <Preview>Dive into Naas Open Source Alert!!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section>
          <Img
            src="https://naas-official.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fccbd55f2-9969-42e8-b2e1-e6a58aa558db%2Fnaas-1-fond-noir.png?id=81155057-1156-4ede-b0ab-4362752678c2&table=block&spaceId=974ebd2d-7215-456f-b6d1-55233bc34c5b&width=2000&userId=&cache=v2"
            width="100"
            height="100"
            alt="Naasai logo"
          />
        </Section>
        <Heading style={h1}>PR Review | 26th June, 2023</Heading>
        <Section>
          <Text style={text}>
            Hey {name}! What's up?
            <Hr />
            <Text style={text}>
              If you have ever wondered about the inner workings of our
              contribution reviews. I have finally rolled out a video that
              explains it.
              <br />
              <br />
              I apologize in advance for the raw aspect of the video - we are
              coders, after all, not Hollywood directors. But I'm quite sure
              that the authenticity and passion will prevail🔥
              <br />
            </Text>
            <Hr />
            <Text style={text}>
              Just remember - as with all things open source, it's not about
              perfection, but about collaboration, learning, and improvement.
              <br />
              <br />
              I'm excited to share this journey with you, and even more excited
              to see where you'll take it. So grab some popcorn (or coffee,
              depending on the hour), and dive in! Your support, like, comments
              are most welcome on those social posts 🙏
            </Text>
            <Hr />
          </Text>
          <Row style={menu.container}>
            <Column style={{ width: "33%" }} colSpan={1}>
              <Link href="https://youtu.be/IpnWng_3tzo" style={menu.text}>
                Youtube video📽️
              </Link>
            </Column>
            <Column style={{ width: "33%" }} colSpan={1}>
              <Link
                href="https://twitter.com/ravenel_jeremy/status/1673433363246374913?s=61&t=bmgxmy5955l3-AHGz4iHKA"
                style={menu.text}
              >
                Twitter Post🧢
              </Link>
            </Column>
            <Column style={{ width: "33%" }} colSpan={1}>
              <Link
                href="https://www.linkedin.com/posts/jeremyravenel_100dayschallenge-datavisualization-datascience-activity-7079193571060260864-z6DI/?utm_source=share&utm_medium=member_desktop"
                style={menu.text}
              >
                LinkedIn Post🖇️
              </Link>
            </Column>
          </Row>
          <Text style={postScriptText}>
            1. If you want to contribute and don't know where to start, I can
            assign you a few challenges ;)
          </Text>
          <Text style={postScriptText}>
            2. We have a big announcement to make on Thursday 5PM CET during the
            community. Will you be with us?
          </Text>
          <Hr />
        </Section>
        <Section>
          <Heading style={h2}>
            <b>Next Naas Community Call</b>
          </Heading>
          <Text style={text}>
            Thursday, June 29 · 5:00 – 6:00pm CET
            <br />
              Video call <a href="https://meet.google.com/zxo-yjbm-qug">link</a>.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default WaitlistEmail;

const main = {
  backgroundColor: "#000000",
  margin: "0 auto",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
};

const container = {
  margin: "auto",
  padding: "96px 20px 64px",
};

const h1 = {
  color: "#ffffff",
  fontSize: "24px",
  fontWeight: "600",
  lineHeight: "40px",
  margin: "0 0 20px",
};

const h2 = {
  color: "#ffffff",
  fontSize: "18px",
  lineHeight: "20px",
  margin: "0 0 20px",
};

const text = {
  color: "white",
  fontSize: "14px",
  lineHeight: "24px",
  margin: "0 0 40px",
  greyed: {
    color: "grey",
  },
};

const menu = {
  container: {
    padding: "20px 20px 20px 20px",
    backgroundColor: "white",
  },
  content: {
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  title: {
    paddingLeft: "20px",
    paddingRight: "20px",
    fontWeight: "bold",
  },
  text: {
    fontSize: "13.5px",
    marginTop: 0,
    fontWeight: 500,
    color: "black",
  },
  tel: {
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "32px",
    paddingBottom: "22px",
  },
};

const postScriptText = {
  fontSize: "12px",
  color: "grey",
  margin: "15px 15px",
  lineHeight: "auto",
};
