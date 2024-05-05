import React, { useState } from "react";
import styled from "styled-components";
import { selectData } from "../components/Select.mock";

const SelectPage = () => {
  const [result, setResult] = useState([0, 0, 0, 0]); // 빨 주 파 초
  const [currentId, setCurrentId] = useState(1); // 현재 페이지 id
  const [selected, setSelected] = useState(0);

  //1번 선택
  const select1 = () => {
    console.log("result: " + result);
    setSelected(1);
    handleOptionClick();
  };

  //2번 선택
  const select2 = () => {
    console.log("result: " + result);
    setSelected(2);
    handleOptionClick();
  };

  //다음 질문으로 이동
  const goNext = () => {
    if (currentId < selectData.length) {
      setSelected(0);
      setCurrentId(currentId + 1);
    } else {
      const max = Math.max(...result); // 최댓값 저장
      //navigate('/result');
    }
  };

  //값 증가 처리
  const handleOptionClick = () => {
    const currentData = selectData.find((data) => data.id === currentId); // 현재 id 해당 데이터
    const count = currentData.count || [];

    if (selected === 1) {
      for (let i = 0; i < result.length; i++) {
        if (count.includes(i)) {
          setResult([result[i] + 1]);
        }
      }
    } else if (selected === 2) {
      for (let i = 0; i < result.length; i++) {
        if (!count.includes(i)) {
          setResult([result[i] + 1]);
        }
      }
    }

    goNext();
  };

  return (
    <>
      <Wrapper>
        <Question>{selectData[currentId - 1].question}</Question>
        <Option onClick={select1}>{selectData[currentId - 1].option1}</Option>
        <Option onClick={select2}>{selectData[currentId - 1].option2}</Option>
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
  padding: 0 2.87rem;
`;

const Question = styled.div`
  width: 100%;
  height: auto;
  color: var(--Black, #262121);
  text-align: center;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 1.5rem */
  letter-spacing: -0.03rem;
  margin-bottom: 4.38rem;
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
