import styled from 'styled-components';
import TypeIt from 'typeit-react';

function IThink() {
  return (
    <Wrapper id="IThink">
      <TypeIt
        options={{
          strings: ['I Think'],
          speed: 100,
          waitUntilVisible: true,
          keyboard: true,
          lifeLike: true,
        }}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20vw;
`;

export default IThink;
