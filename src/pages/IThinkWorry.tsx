import EmphasisText from '@/components/Main/EmphasisText';
import styled from 'styled-components';

function IThinkWorry() {
  return (
    <Wrapper
      id="IThinkWorry"
      draggable={true}
      onDragStart={(e) => {
        e.preventDefault();
      }}
    >
      <P>
        유저의 관점에서는&#160;
        <EmphasisText color="pink">접근성</EmphasisText>을 고려하고
      </P>
      <P>
        개발자의 관점에서는&#160;
        <EmphasisText color="brown">재사용성</EmphasisText>을 고민합니다
      </P>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.themeColor.yellow};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 3%;
  gap: 5%;
  font-weight: 600;
  flex-wrap: nowrap;
  font-size: 5vw;
  @media ${({ theme }) => theme.device.mobile} {
    padding: 0 6%;
    font-size: 11vw;
    flex-wrap: wrap;
  }
  @media ${({ theme }) => theme.device.tablet} {
    padding: 0 2%;
    font-size: 11vw;
    flex-wrap: wrap;
  }
  @media ${({ theme }) => theme.device.laptop} {
    padding: 0 2%;
  }
`;

const P = styled.p`
  white-space: nowrap;
  display: flex;
  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
  }
  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: column;
  }
  @media ${({ theme }) => theme.device.laptop} {
  }
`;

export default IThinkWorry;
