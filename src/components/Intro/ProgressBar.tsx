import styled, { keyframes } from 'styled-components';

function ProgressBar() {
  return (
    <ProgressBarWrapper>
      <ProgressBarItem
        id="firstProgressBarItem"
        $animation={percentNumber}
        $second={2}
        $repeat={1}
      >
        <span>0</span>
        <span>1</span>
      </ProgressBarItem>
      <ProgressBarItem
        id="secondProgressBarItem"
        $animation={randomNumber}
        $second={1}
        $repeat={2}
      >
        <span>0</span>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
        <span>9</span>
      </ProgressBarItem>
      <ProgressBarItem
        id="thirdProgressBarItem"
        $animation={randomNumber}
        $second={0.5}
        $repeat={3}
      >
        <span>0</span>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
        <span>9</span>
      </ProgressBarItem>
      <span style={{ padding: '0 5px' }}>%</span>
    </ProgressBarWrapper>
  );
}

// 애니메이션
const disappearProgressBar = keyframes`
    0% { opacity: 1 }
  100% { opacity: 0 }
`;

const percentNumber = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-100%); }
`;

const randomNumber = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-900%); }
  100% { transform: translateY(0); }
`;

const ProgressBarWrapper = styled.div`
  font-size: 30px;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translateX(50%) translateY(-50%);
  width: 150px;
  height: 30px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  animation: ${disappearProgressBar} 2s ease-in-out 2s forwards;
`;

const ProgressBarItem = styled.p<{
  $animation: ReturnType<typeof keyframes>;
  $second: number;
  $repeat: number;
}>`
  padding: 0 2px;
  display: flex;
  flex-direction: column;
  animation: ${(props) => props.$animation} ${(props) => props.$second}s
    ${(props) => props.$repeat} forwards ease-in-out;
`;

export default ProgressBar;
