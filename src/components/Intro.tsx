import styled from 'styled-components';
import ProgressBar from './ProgressBar';
import PortFolioTitle from './PortFolioTitle';

function Intro() {
  return (
    <Wrapper>
      <ProgressBar />
      <PortFolioTitle />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: ${(props) => props.theme.blue};
  width: 100vw;
  height: 100vh;
  color: white;
  font-weight: bold;
  font-size: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Intro;
