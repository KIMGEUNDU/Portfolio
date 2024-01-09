import iphone from '@/assets/iphone.png';
import { useModal } from '@/store/useModal';
import { FaGithubAlt } from 'react-icons/fa';
import { ImMobile } from 'react-icons/im';
import { IoIosTabletLandscape } from 'react-icons/io';
import { IoLogoFigma } from 'react-icons/io5';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { SiNetlify } from 'react-icons/si';
import { TbDeviceImac, TbFileTypePpt } from 'react-icons/tb';
import mac from '@/assets/mac.png';
import styled from 'styled-components';
import Tag from './Tag';

function ProjectModal({
  deploy,
  github,
  figma,
  ppt,
  thumnail,
  name,
  type,
  skill,
  image,
  explan,
}: Pick<
  Project,
  | 'deploy'
  | 'github'
  | 'figma'
  | 'ppt'
  | 'thumnail'
  | 'name'
  | 'type'
  | 'skill'
  | 'image'
  | 'explan'
>) {
  const { setOpen } = useModal();

  return (
    <Wrapper>
      <Project>
        <ControlWrapper>
          {deploy && (
            <ControlButton onClick={() => window.open(`${deploy}`)}>
              <ControlImg as={SiNetlify} alt="배포사이트 보러가기" />
            </ControlButton>
          )}
          <ControlButton onClick={() => window.open(`${github}`)}>
            <ControlImg as={FaGithubAlt} alt="Github 보러가기" />
          </ControlButton>
          <ControlButton onClick={() => setOpen(false)}>
            <ControlImg as={RiArrowGoBackFill} alt="되돌아가기" />
          </ControlButton>
        </ControlWrapper>
        <ProjectContents>
          <ThumnailWrapper>
            {thumnail && <Thumnail src={thumnail} alt="프로젝트 이미지" />}
            {!thumnail && <NoThumnail>진행중인 프로젝트입니다.</NoThumnail>}
            <Icon>🏅</Icon>
          </ThumnailWrapper>
          <Title>{name}</Title>
          <TagWrapper>
            <Tag value={skill} project={true} />
          </TagWrapper>
          <ToolWrapper>
            {type === 'web' && (
              <Base>
                <ToolImg as={TbDeviceImac} alt="웹 프로젝트" $color="black" />
                &nbsp; 웹
              </Base>
            )}
            {type === 'mobile' && (
              <Base>
                <ToolImg as={ImMobile} alt="모바일 프로젝트" $color="black" />
                &nbsp; 모바일
              </Base>
            )}
            {type === 'responsive' && (
              <Base>
                <ToolImg
                  as={IoIosTabletLandscape}
                  alt="반응형 프로젝트"
                  $color="black"
                />
                &nbsp; 반응형
              </Base>
            )}
            {deploy && (
              <ToolLink href={deploy} target="_blank" rel="noreferrer noopener">
                <ToolImg
                  as={SiNetlify}
                  alt="배포사이트 보러가기"
                  $color="#5CAAB9"
                />
                <ToolName>Deploy</ToolName>
              </ToolLink>
            )}
            {github && (
              <ToolLink href={github} target="_blank" rel="noreferrer noopener">
                <ToolImg
                  as={FaGithubAlt}
                  alt="Github 보러가기"
                  $color="black"
                />
                <ToolName>Github</ToolName>
              </ToolLink>
            )}
            {figma && (
              <ToolLink href={figma} target="_blank" rel="noreferrer noopener">
                <ToolImg
                  as={IoLogoFigma}
                  alt="Figma 보러가기"
                  $color="#A259FF"
                />
                <ToolName>Figma</ToolName>
              </ToolLink>
            )}
            {ppt && (
              <ToolLink href={ppt} target="_blank" rel="noreferrer noopener">
                <ToolImg
                  as={TbFileTypePpt}
                  alt="PPT 보러가기"
                  $color="#C35033"
                />
                <ToolName>PPT</ToolName>
              </ToolLink>
            )}
          </ToolWrapper>
          <ContentWrapper>
            <PreviewWrapper $type={type}>
              {image && type === 'web' && (
                <>
                  <PreviewBase
                    src={mac}
                    alt="Designed by Freepik"
                    $type={type}
                  />
                  <PreviewImg src={image} alt="미리보기" $type={type} />
                </>
              )}
              {image && type === 'mobile' && (
                <>
                  <PreviewBase
                    src={iphone}
                    alt="Designed by Freepik"
                    $type={type}
                  />
                  <PreviewImg src={image} alt="미리보기" $type={type} />
                </>
              )}
              {!image && <NoImage>진행중</NoImage>}
            </PreviewWrapper>
            <Explan $type={type}>{explan}</Explan>
          </ContentWrapper>
        </ProjectContents>
      </Project>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(61, 61, 61, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  overflow: hidden;
`;

const Project = styled.div`
  background-color: white;
  border-radius: 10px;
  width: 60%;
  height: 80%;
  padding-bottom: 30px;
  overflow: hidden;
  @media ${({ theme }) => theme.device.mobile} {
    width: 80%;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 80%;
  }
`;

const ControlWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  padding: 0 2%;
  text-align: right;
  @media ${({ theme }) => theme.device.mobile} {
    height: 30px;
  }
`;

const ControlButton = styled.button`
  width: 30px;
  height: 100%;
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  margin: 0 7px;
  @media ${({ theme }) => theme.device.mobile} {
    width: 25px;
  }
`;

const ControlImg = styled.img`
  width: 100%;
  height: 100%;
`;

const ProjectContents = styled.div`
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  border-radius: 0 0 10px 10px;
  &::-webkit-scrollbar-thumb {
    background-color: #c1a787;
    border-radius: 0 0 10px 0;
  }
  &::-webkit-scrollbar-track {
    background-color: #cecece;
    border-radius: 0 0 10px 0;
  }
  &::-webkit-scrollbar {
    width: 12px;
  }
`;

const ThumnailWrapper = styled.div`
  position: relative;
  margin-bottom: 65px;
  height: 45%;
  @media ${({ theme }) => theme.device.mobile} {
    height: 30%;
  }
  @media ${({ theme }) => theme.device.tablet} {
    height: 30%;
  }
`;

const NoThumnail = styled.p`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Thumnail = styled.img`
  width: 100%;
  height: 100%;
`;

const Icon = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(50%);
  font-size: 5vw;
  padding: 0 5%;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 12vw;
  }
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 10vw;
  }
  @media ${({ theme }) => theme.device.laptop} {
    font-size: 7vw;
  }
`;

const Title = styled.p`
  font-size: 2.5vw;
  font-weight: 600;
  padding: 0 5%;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 8vw;
  }
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 6vw;
  }
  @media ${({ theme }) => theme.device.laptop} {
    font-size: 3.5vw;
  }
`;

const TagWrapper = styled.p`
  display: flex;
  flex-wrap: wrap;
  gap: 2%;
  padding: 2% 4%;
  @media ${({ theme }) => theme.device.mobile} {
    flex-wrap: wrap;
  }
`;

const ToolWrapper = styled.div`
  padding: 1% 4%;
  display: flex;
  gap: 2%;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 3.5vw;
    flex-wrap: wrap;
    gap: 5%;
    padding: 3% 4%;
  }
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 2.5vw;
    flex-wrap: wrap;
    gap: 3%;
    padding: 3% 4%;
  }
  @media ${({ theme }) => theme.device.laptop} {
    font-size: 1.5vw;
    flex-wrap: wrap;
    gap: 3%;
    padding: 3% 4%;
  }
`;

const ToolLink = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: black;
`;

const Base = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 2%;
  border-right: 2px solid black;
`;

const ToolImg = styled.img<{ $color?: string }>`
  width: 30px;
  height: 100%;
  color: ${(props) => props.$color};
`;

const ToolName = styled.span`
  @media ${({ theme }) => theme.device.mobile} {
    display: none;
  }
`;

const ContentWrapper = styled.div`
  padding: 3% 5%;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
    font-size: 4vw;
    align-items: center;
  }
  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: column;
    font-size: 2.5vw;
    align-items: center;
  }
  @media ${({ theme }) => theme.device.laptop} {
    font-size: 1.8vw;
  }
`;

const PreviewWrapper = styled.div<{ $type: string }>`
  box-sizing: border-box;
  position: relative;
  width: ${(props) => (props.$type === 'mobile' ? '30%' : '50%')};
  height: ${(props) => (props.$type === 'mobile' ? '600px' : '350px')};
  padding: ${(props) => (props.$type === 'mobile' ? '0% 1%' : '1.1% 1%')};
  margin: ${(props) => (props.$type === 'mobile' ? '60px 0' : 0)};
  @media ${({ theme }) => theme.device.mobile} {
    width: ${(props) => (props.$type === 'mobile' ? '85%' : '95%')};
    padding: ${(props) =>
      props.$type === 'mobile' ? '23% 3.5% 25% 3.5%' : '2.5% 2%'};
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: ${(props) => (props.$type === 'mobile' ? '65%' : '100%')};
    height: ${(props) => (props.$type === 'mobile' ? 'auto' : '50vh')};
    padding: ${(props) =>
      props.$type === 'mobile' ? '18% 3.5% 20% 2.8%' : '2.5% 2%'};
  }
  @media ${({ theme }) => theme.device.laptop} {
    width: ${(props) => (props.$type === 'mobile' ? '65%' : '100%')};
    padding: ${(props) =>
      props.$type === 'mobile' ? '13% 2% 14% 2%' : '1.7% 1.5%'};
  }
`;

const NoImage = styled.p`
  font-family: 'Cafe24Shiningstar';
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.themeColor.brown};
  font-size: 3vw;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 7vw;
  }
`;

const PreviewBase = styled.img<{ $type: string }>`
  position: absolute;
  top: ${(props) => (props.$type === 'mobile' ? '-65px' : '0')};
  left: 0;
  width: 100%;
  height: 100%;
`;

const PreviewImg = styled.img<{ $type: string }>`
  width: 100%;
  height: ${(props) => (props.$type === 'mobile' ? '78%' : '68%')};
`;

const Explan = styled.p<{ $type: string }>`
  width: ${(props) => (props.$type === 'mobile' ? '70%' : '50%')};
  @media ${({ theme }) => theme.device.mobile} {
    width: ${(props) => (props.$type === 'mobile' ? '85%' : '90%')};
    padding-bottom: 30px;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: ${(props) => (props.$type === 'mobile' ? '85%' : '100%')};
    padding-bottom: 30px;
  }
`;

export default ProjectModal;
