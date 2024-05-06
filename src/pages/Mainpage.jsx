import styled from "styled-components";

import { ReactComponent as MainCocktail } from "../images/main-cocktail.svg";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  const goTest = () => {
    navigate("/select");
  };

  return (
    <Wrapper>
      <MainImg />
      <MainText>당신에게 딱 맞는 칵테일은?</MainText>
      <SubText style={{ marginTop: "1.88rem" }}>
        해방이화 138주년 대동제 &lt;LIBER EWHA&gt;를 맞아 <br />
        &lt;왓두유씽?&gt;팀이 특별히 준비한 칵테일 테스트!
      </SubText>
      <SubText style={{ marginTop: "1.38rem" }}>
        테스트로 자신에게 딱 맞는 칵테일이 무엇인지 알아보세요! <br />
        학관 12번 &lt;왓두유씽?&gt; 부스에서 <br />
        똑같은 칵테일을 직접 마셔볼 수 있어요 :) <br />
      </SubText>
      <TestBtn onClick={goTest}>테스트 하러가기</TestBtn>
      <Footer />
    </Wrapper>
  );
};

export default MainPage;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const MainImg = styled(MainCocktail)`
  margin: 3.22rem 5.19rem 2.5rem 6.63rem;
  flex-shrink: 0;

  @media (max-width: 320px) {
    margin-top: 5.69rem;
  }
`;

const MainText = styled.div`
  color: var(--Black, #262121);
  text-align: center;
  font-family: Hahmlet;
  font-size: 1.875rem;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -2px;

  @media (max-width: 320px) {
    font-size: 1.675rem;
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

const TestBtn = styled.button`
  margin: 1.87rem auto 2rem;
  display: flex;
  width: 18.625rem;
  padding: 1.25rem 3rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.75rem;
  border: 2px solid var(--Gray, #d9d9d9);
  background: var(--White, #fff);

  color: var(--Black, #262121);
  font-size: 1.25rem;
  font-weight: 600;
`;
