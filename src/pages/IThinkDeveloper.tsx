import EmphasisText from '@/components/Main/EmphasisText';
import styled from 'styled-components';

function IThinkDeveloper() {
  return (
    <Wrapper
      id="IThinkDeveloper"
      draggable={true}
      onDragStart={(e) => {
        e.preventDefault();
      }}
    >
      <p>개발자란</p>
      <p>개발만 하는 것이 아닌</p>
      <p>
        <EmphasisText color="yellow">유저가 원하는 것</EmphasisText>이 무엇인지
      </p>
      <p>끊임없이 고민하는 사람이라 생각합니다</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.themeColor.brown};
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 4%;
  gap: 5%;
  font-weight: 600;
  font-size: 6vw;
`;

export default IThinkDeveloper;
