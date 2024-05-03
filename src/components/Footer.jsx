import styled from "styled-components";

import { ReactComponent as LogoWDYS } from "../images/logo-wdys.svg";
import { ReactComponent as LogoInsta } from "../images/logo-instagram.svg";

const Footer = () => {
  return (
    <Wrapper>
      <Line />
      <span>왓두유씽이 궁금하시다면?</span>
      <Logo>
        <a
          href="https://whatdoyousing.swygbro.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LogoWDYS />
        </a>
        <a
          href="https://www.instagram.com/what_doyousing?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <LogoInsta />
        </a>
      </Logo>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  margin-top: auto;
  width: 100vw;
  min-height: 8.13rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    margin: 1.5rem auto 1rem;
    color: var(--Very-Dark-Gray, #6d6d6d);
    text-align: center;
    font-size: 1rem;
    font-weight: 700;
    line-height: 100%;
    letter-spacing: -0.02rem;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 0.0375rem;
  background: #a0a0a0;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.63rem;
`;
