import { useState } from 'react';
import { FaPlay } from 'react-icons/fa6';
import { IoMdPause } from 'react-icons/io';
import styled, { keyframes } from 'styled-components';
import ControlButton from '../components/Main/ControlButton';

function Promise() {
  const [animationState, setAnimationState] = useState(false);
  const infinityText = 'Constant Challenge　';

  return (
    <Wrapper
      id="Promise"
      draggable={true}
      onDragStart={(e) => {
        e.preventDefault();
      }}
    >
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
  font-size: 1.8rem;
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
  font-size: 9rem;
  font-weight: 900;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 3rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 5rem;
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
