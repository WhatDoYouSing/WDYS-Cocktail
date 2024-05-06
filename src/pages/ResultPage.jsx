import React, { useState } from "react";
import styled from "styled-components";

import cocktail01 from "../images/cocktail01.png";
import cocktail02 from "../images/cocktail02.png";
import cocktail03 from "../images/cocktail03.png";
import cocktail04 from "../images/cocktail04.png";
import Footer from "../components/Footer";

const ResultPage = () => {
  const [resultIndex, setResultIndex] = useState(0);

  const resultArray = [
    {
      name: "Love parade",
      color: "#FC6637",
      card: cocktail01,
      link: "https://whatdoyousing.swygbro.com/detail/212",
    },
    {
      name: "항해",
      color: "#50CBF1",
      card: cocktail02,
      link: "https://whatdoyousing.swygbro.com/detail/214",
    },
    {
      name: "난춘",
      color: "#FFA23F",
      card: cocktail03,
      link: "https://whatdoyousing.swygbro.com/detail/213",
    },
    {
      name: "초록비",
      color: "#66DA87",
      card: cocktail04,
      link: "https://whatdoyousing.swygbro.com/detail/215",
    },
  ];

  return (
    <Wrapper>
      <MainText>나에게 딱 맞는 칵테일은-</MainText>
      <Card>
        <img src={resultArray[resultIndex].card} alt="card img" />
      </Card>
      <SubText style={{ marginTop: "2rem" }}>
        <span
          style={{ color: resultArray[resultIndex].color, fontWeight: "800" }}
        >
          {resultArray[resultIndex].name} 칵테일
        </span>
        은 무슨 맛일지 <br />
        궁금하지 않으신가요?
      </SubText>
      <a
        href={resultArray[resultIndex].link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ColorBtn
          style={{
            color: resultArray[resultIndex].color,
            borderColor: resultArray[resultIndex].color,
          }}
        >
          이 칵테일 들으러 가기
        </ColorBtn>
      </a>
      <SubText>
        그리고 학관 12번 &lt;왓두유씽?&gt; 부스에 오시면 <br />
        실제 칵테일을 직접 마셔볼 수 있어요!
      </SubText>
      <SaveBtn>테스트 하러가기</SaveBtn>
      <ShareBtn>친구에게 테스트 공유하기</ShareBtn>
      <Footer />
    </Wrapper>
  );
};

export default ResultPage;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainText = styled.div`
  margin: 6.06rem auto 2.5rem;
  color: var(--Black, #262121);
  text-align: center;
  font-family: Hahmlet;
  font-size: 1.875rem;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -0.0375rem;

  @media (max-width: 320px) {
    font-size: 1.775rem;
  }
`;

const Card = styled.div`
  height: 32.6rem;
  flex-shrink: 0;
  border: 0.595px solid #000;
  background: var(--middle-light-gray-bg, #fff);
  box-shadow: 3.905px 3.905px 6.931px 0px rgba(0, 0, 0, 0.25);

  img {
    width: 18.67019rem;
    height: 32.5rem;
    flex-shrink: 0;
  }
`;

const SubText = styled.div`
  color: var(--Black, #262121);
  text-align: center;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.0175rem;
`;

const ColorBtn = styled.button`
  margin: 1rem auto 1.25rem;
  display: flex;
  padding: 0.75rem 1.25rem;
  justify-content: center;
  align-items: center;
  border-radius: 5rem;
  border: 1.5px solid;
  background: var(--White, #fff);

  font-size: 0.875rem;
  font-weight: 600;
`;

const SaveBtn = styled.button`
  margin: 1.5rem auto 1rem;
  display: flex;
  width: 13.96875rem;
  padding: 0.9375rem 2.25rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.5625rem;
  border: 1.5px solid var(--Gray, #d9d9d9);
  background: var(--White, #fff);

  color: var(--Black, #262121);
  font-size: 0.9375rem;
  font-weight: 600;
`;

const ShareBtn = styled.button`
  margin-bottom: 2.25rem;
  display: flex;
  width: 13.96875rem;
  padding: 0.9375rem 2.25rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.5625rem;
  background: var(--Point-Pink, #ff005c);

  color: var(--White, #fff);
  font-size: 0.9375rem;
  font-weight: 600;
`;
