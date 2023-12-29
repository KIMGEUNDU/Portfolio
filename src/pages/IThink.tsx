import styled from 'styled-components';
import TypeIt from 'typeit-react';

function IThink() {
  return (
    <Wrapper
      id="IThink"
      draggable={true}
      onDragStart={(e) => {
        e.preventDefault();
      }}
    >
      <TypeIt
        options={{
          strings: ['I Think'],
          speed: 100,
          waitUntilVisible: true,
          keyboard: true,
          lifeLike: true,
          loop: true,
          loopDelay: [3000, 5000],
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
