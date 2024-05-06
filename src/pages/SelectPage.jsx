import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { selectData } from "../statics/data/selectData";

const SelectPage = () => {
  const [result, setResult] = useState([0, 0, 0, 0]); // [빨, 주, 파, 초]
  const [currentId, setCurrentId] = useState(1); // 현재 페이지 id

  const currentData = selectData.find((data) => data.id === currentId); // 현재 id 해당 데이터
  const updatedResult = [...result];

  const navigate = useNavigate();

  const select = (option) => {
    const count = currentData.count || [];
    for (let i = 0; i < result.length; i++) {
      if (
        (option === 1 && count.includes(i)) ||
        (option === 2 && !count.includes(i))
      ) {
        updatedResult[i] += 1;
      }
    }
    setResult(updatedResult);

    if (currentId <= 9) {
      goNext();
    } else {
      goResult(updatedResult);
    }
  };

  //다음 질문으로 이동
  const goNext = () => {
    setCurrentId(currentId + 1);
  };

  //결과 페이지로 이동
  const goResult = (updatedResult) => {
    const max = Math.max(...updatedResult);
    const maxIndex = updatedResult.indexOf(max);
    navigate("/result", { state: maxIndex });
  };

  return (
    <>
      <Wrapper>
        <Question>{selectData[currentId - 1].question}</Question>
        <Option onMouseUp={() => select(1)}>
          {selectData[currentId - 1].option1}
        </Option>
        <Option onMouseUp={() => select(2)}>
          {selectData[currentId - 1].option2}
        </Option>
        <PageNum>{currentId}/10</PageNum>
      </Wrapper>
    </>
  );
};

export default SelectPage;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Question = styled.div`
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--Black, #262121);
  text-align: center;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  letter-spacing: -0.03rem;
  white-space: pre-wrap;
  margin-bottom: 3.38rem;

  @media (max-width: 340px) {
    font-size: 1.3rem;
  }
`;

const Option = styled.div`
  display: flex;
  width: 18.625rem;
  padding: 1.25rem 1.25rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.56rem;

  border-radius: 0.75rem;
  border: 2px solid var(--Gray, #d9d9d9);
  background: var(--White, #fff);

  color: var(--Black, #262121);
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media (max-width: 340px) {
    width: 16.625rem;
    font-size: 1.1rem;
  }

  &:active {
    background-color: #ff005c;
    color: #fff;
    border: none;
  }
`;

const PageNum = styled.div`
  color: var(--Black, #262121);
  text-align: center;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 1.5rem */
  letter-spacing: -0.03rem;
  margin-top: 2.81rem;
`;
