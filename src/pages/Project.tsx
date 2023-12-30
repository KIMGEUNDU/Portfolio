import styled from 'styled-components';

function Project() {
  return <Wrapper id="Project">Project</Wrapper>;
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.themeColor.brown};
`;

export default Project;
