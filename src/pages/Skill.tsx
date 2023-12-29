import styled from 'styled-components';

function Skill() {
  return <Wrapper id="Skill"></Wrapper>;
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  @media ${({ theme }) => theme.device.mobile} {
  }
  @media ${({ theme }) => theme.device.tablet} {
  }
  @media ${({ theme }) => theme.device.laptop} {
  }
`;

export default Skill;
