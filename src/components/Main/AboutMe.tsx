import styled from 'styled-components';
import Title from './Title';
import profile from 'assets/aiProfile.png';

function AboutMe() {
  return (
    <Wrapper id="AboutMe">
      <Title id="aboutMeTitle">AboutMe</Title>
      <ProfileWrapper>
        <ProfileImage src={profile} alt="프로필사진" />
        <ProfileDescription>
          <P>
            <Purple>const</Purple>
            <Blue>KIMGEONJU</Blue>
            <Purple>&#61;</Purple>
            <Pink>&#123;</Pink>
          </P>
          <P>
            <Pink>이름 :</Pink>
            <Green $rest={true}>'김건주'</Green>
            <Pink>&#44;</Pink>
          </P>
          <P>
            <Pink>생년월일 :</Pink>
            <Green $rest={true}>'1995.08.09'</Green>
            <Pink>&#44;</Pink>
          </P>
          <P>
            <Pink>취미 :</Pink>
            <Green $rest={true}>'방탈출'</Green>
            <Pink>&#44;</Pink>
          </P>
          <P>
            <Pink>자격증 :</Pink>
            <Green $rest={true}>'웹디자인기능사'</Green>
            <Pink>&#44;</Pink>
          </P>
          <P>
            <Pink>수료증 :</Pink>
            <Blue>&#123;</Blue>
          </P>
          <P>
            <Green $rest={true} $object={true}>
              멋쟁이사자처럼1 : '프론트엔드스쿨 6기 &#40;4개월&#41;'
            </Green>
            <Pink>&#44;</Pink>
          </P>
          <P>
            <Green $rest={true} $object={true}>
              멋쟁이사자처럼2: ‘프론트엔드스쿨 플러스 1기 &#40;2개월&#41;'
            </Green>
            <Pink>&#44;</Pink>
          </P>
          <P>
            <Blue $rest={true} $object={true}>
              &#125;
            </Blue>
            <Pink>&#44;</Pink>
          </P>
          <P>
            <Pink>태그 : </Pink>
            <Blue>&#91;</Blue>
            <Green>‘컴포넌트마스터’</Green>
            <Blue>&#44;</Blue>
            <Green>'폭주기건차’</Green>
            <Blue>&#44;</Blue>
            <Green>'시맨틱마크업’</Green>
            <Blue>&#44;</Blue>
            <Green>'웹개발자’</Green>
            <Blue $rest={true}>&#93;</Blue>
            <Pink>&#44;</Pink>
          </P>
          <P>
            <Pink>&#125;</Pink>
          </P>
        </ProfileDescription>
      </ProfileWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.themeColor.yellow};
`;

const ProfileWrapper = styled.div`
  padding: 0 50px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const ProfileImage = styled.img`
  width: 25%;
  height: 100%;
`;

const ProfileDescription = styled.div`
  box-sizing: border-box;
  background-color: black;
  width: 50%;
  height: 100%;
  border-radius: 20px;
  padding: 20px 50px;
  font-size: 25px;
`;

const P = styled.p`
  padding: 8px 0;
`;

const Purple = styled.span`
  color: ${(props) => props.theme.themeColor.vsPurple};
  padding-right: 10px;
`;

const Blue = styled.span<{ $rest?: boolean; $object?: boolean }>`
  color: ${(props) => props.theme.themeColor.vsBlue};
  padding-right: ${(props) => (props.$rest ? '0' : '10px')};
  padding-left: ${(props) => (props.$object ? '90px' : '0')};
`;

const Pink = styled.span<{ $rest?: boolean }>`
  color: ${(props) => props.theme.themeColor.vsPink};
  padding-right: ${(props) => (props.$rest ? '0' : '10px')};
`;

const Green = styled.span<{ $rest?: boolean; $object?: boolean }>`
  color: ${(props) => props.theme.themeColor.vsGreen};
  padding-right: ${(props) => (props.$rest ? '0' : '10px')};
  padding-left: ${(props) => (props.$object ? '120px' : '0')};
`;

export default AboutMe;
