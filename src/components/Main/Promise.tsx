import { Helmet } from 'react-helmet-async';
import { FaPlay } from 'react-icons/fa6';
import { IoMdPause } from 'react-icons/io';
import styled, { keyframes } from 'styled-components';
import ControlButton from './ControlButton';
import { useState } from 'react';

function Promise() {
  const [animationState, setAnimationState] = useState(false);
  const infinityText = 'Constant Challenge　';

  return (
    <>
      <Helmet>
        <title>Promise</title>
      </Helmet>
      <Wrapper>
        <MoveLogin>KIMGEONJU</MoveLogin>
        <ControlButtonWrapper>
          <ControlButton
            img={IoMdPause}
            label="일시정지"
            onClick={() => setAnimationState(true)}
          />
          <ControlButton
            img={FaPlay}
            label="재생"
            onClick={() => setAnimationState(false)}
          />
        </ControlButtonWrapper>
        <InfinityTextWrapper>
          <InfinityTextTrack $state={animationState}>
            {infinityText.repeat(10)}
          </InfinityTextTrack>
        </InfinityTextWrapper>
      </Wrapper>
    </>
  );
}

const InfinityTextAnimation = keyframes`
  0% {transform: translateX(0)}
  100% {transform: translateX(-50%)}
`;

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.themeColor.pink};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MoveLogin = styled.button`
  position: absolute;
  top: 15px;
  left: 50%;
  transform: translateX(-50%);
  margin: 0 auto;
  font-size: 30px;
  background-color: transparent;
  border: none;
`;

const ControlButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px 40px;
  gap: 20px;
`;

const InfinityTextWrapper = styled.div`
  position: relative;
  padding: 130px 0;
  font-size: 200px;
  font-weight: 900;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 50px;
  }
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 100px;
  }
`;

const InfinityTextTrack = styled.p<{ $state: boolean }>`
  position: absolute;
  top: 0%;
  white-space: nowrap;
  will-change: transform;
  border-top: 10px solid;
  border-bottom: 10px solid;
  padding: 40px 0;
  animation: ${InfinityTextAnimation} 60s linear infinite;
  animation-play-state: ${(props) => (props.$state ? 'paused' : 'running')};
`;

export default Promise;
