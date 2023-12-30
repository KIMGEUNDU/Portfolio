import Favorite from '@mui/icons-material/Favorite';
import { IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { BsStars } from 'react-icons/bs';
import { FaCamera } from 'react-icons/fa';
import { IoIosSend } from 'react-icons/io';
import { IoBookmarkSharp } from 'react-icons/io5';
import { RiMore2Line } from 'react-icons/ri';
import styled, { css, keyframes } from 'styled-components';

function Contact() {
  const [like, setLike] = useState(809);
  const [photo, setPhoto] = useState(false);

  const bookMarkClicked = () => {
    toast('내 마음속의 저장♥', {
      icon: '😘',
      duration: 1000,
    });
  };

  const handleClick = () => {
    setPhoto(true);

    setTimeout(() => {
      setPhoto(false);
    }, 1000);
  };

  return (
    <Wrapper
      id="Contact"
      draggable={true}
      onDragStart={(e) => {
        e.preventDefault();
      }}
    >
      <InstagramWrapper>
        <InstagramHeader>
          <div style={{ position: 'relative' }}>
            <InstagramButton
              as={FaCamera}
              $photo={true}
              onClick={handleClick}
            />
            <StarAnimation as={BsStars} alt="찰칵 효과" $photo={photo} />
          </div>
          <Title>CONTACT</Title>
          <InstagramButton as={IoIosSend} />
        </InstagramHeader>
        <User>
          <UserImage
            src="https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/pd/v2/3/0/5/6/1/3/LYWFS/6284305613_B.png"
            alt="프로필사진"
          />
          <UserName>KIMGEONJU</UserName>
          <UserMoreButton type="button">
            <UserMore as={RiMore2Line} alt="더보기" />
          </UserMoreButton>
        </User>
        <FeedImg
          src="https://mblogthumb-phinf.pstatic.net/MjAxODA0MDJfMTY3/MDAxNTIyNjYxNDgzMDAy.L9BpVASfGdvv6hJ1KvK5m4uZSeQs5teZ0Ku23k75rbIg.VXw4osG7dq9Z1jY7nwYm-tKTanmYHlvyBEYoPtakGI4g.GIF.kma9501/IMG_4989.GIF?type=w800"
          alt="피드사진"
        />
        <LinkButtonWrapper>
          <ExceptMark>
            <IconButton
              aria-label="좋아요"
              style={{ color: '#FF4A4A', padding: 0 }}
              onClick={() => setLike(like + 1)}
            >
              <Favorite sx={{ width: '45px', height: '40px' }} />
            </IconButton>
            <Link
              href="https://github.com/KIMGEUNDU"
              target="_blank"
              rel="noreferrer noopener"
              $margin={15}
            >
              <LinkButtonImg
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Font_Awesome_5_brands_github.svg/1200px-Font_Awesome_5_brands_github.svg.png"
                alt="Github 이동"
              />
            </Link>
            <Link
              href="https://velog.io/@f_vlkoklv/posts"
              target="_blank"
              rel="noreferrer noopener"
            >
              <LinkButtonImg
                src="https://pbs.twimg.com/profile_images/1228368893321736193/Ov0og7E8_400x400.jpg"
                alt="Velog 이동"
              />
            </Link>
          </ExceptMark>
          <LinkButton as={IoBookmarkSharp} onClick={bookMarkClicked} />
        </LinkButtonWrapper>
        <LikeCount>{`좋아요 ${like}개`}</LikeCount>
        <FeetText>
          <span style={{ fontWeight: '600' }}>KIMGEONJU&#160;&#160;</span>
          emailAddress&#160;
          <span style={{ color: 'red' }}>"vlkoklv@naver.com"</span>
          <FeedMoreText>&#160;&#160;&#160;...더보기</FeedMoreText>
        </FeetText>
      </InstagramWrapper>
    </Wrapper>
  );
}

const photoEffect = keyframes`
  0% {
    opacity: 1;
    transform: scale(150%);
  }
  100% {
    opacity: 0;
  }
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: pink;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InstagramWrapper = styled.div`
  border: 3px solid white;
  width: 40%;
  height: 80%;
  @media ${({ theme }) => theme.device.mobile} {
    width: 80%;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 70%;
  }
  @media ${({ theme }) => theme.device.laptop} {
    width: 50%;
  }
`;

const InstagramButton = styled.button<{ $photo?: boolean }>`
  width: 42px;
  height: 40px;
  cursor: ${(props) => (props.$photo ? 'pointer' : '')};
`;

const StarAnimation = styled.img<{ $photo: boolean }>`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 30px;
  height: 30px;
  opacity: 0;
  transform: scale(0);
  color: ${(props) => props.theme.themeColor.yellow};
  ${(props) =>
    !props.$photo &&
    css`
      animation: ${photoEffect} 1s backwards;
    `}
`;

const InstagramHeader = styled.div`
  border-bottom: 3px solid white;
  padding: 10px 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-family: 'Cafe24Shiningstar';
  font-size: 3vw;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 9vw;
  }
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 6vw;
  }
  @media ${({ theme }) => theme.device.laptop} {
    font-size: 4vw;
  }
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 2%;
  padding: 2%;
  height: 70px;
`;

const UserImage = styled.img`
  width: 70px;
  height: 100%;
  border-radius: 50%;
  border: 5px solid transparent;
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(
      80deg,
      rgba(255, 111, 252, 1) 0%,
      rgba(246, 255, 25, 1) 45%,
      rgba(247, 70, 70, 1) 100%
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
  @media ${({ theme }) => theme.device.mobile} {
    width: 60px;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 65px;
  }
`;

const UserName = styled.p`
  flex-grow: 1;
  font-size: 1.5vw;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 3vw;
  }
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 4vw;
  }
  @media ${({ theme }) => theme.device.laptop} {
    font-size: 2vw;
  }
`;

const UserMoreButton = styled.button`
  background-color: transparent;
  border: none;
`;

const UserMore = styled.img`
  width: 30px;
  height: 100%;
  color: white;
`;

const FeedImg = styled.img`
  box-sizing: border-box;
  padding: 0 2%;
  width: 100%;
  height: 50%;
`;

const LinkButtonWrapper = styled.div`
  padding: 1% 2%;
  display: flex;
  justify-content: space-between;
`;

const ExceptMark = styled.div`
  display: flex;
  align-items: center;
`;

const LinkButton = styled(motion.button)<{ $color?: string }>`
  border: none;
  background-color: transparent;
  width: 45px;
  height: 40px;
  cursor: pointer;
  color: ${(props) =>
    props.$color === 'red' ? props.theme.themeColor.red : 'white'};
`;

const Link = styled.a<{ $margin?: number }>`
  display: inline-block;
  width: 42%;
  height: 40px;
  margin: ${(props) => (props.$margin ? `0 ${props.$margin}px` : 0)};
`;

const LinkButtonImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const LikeCount = styled.p`
  padding: 2%;
  font-size: 1.2vw;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 4vw;
  }
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 3vw;
  }
  @media ${({ theme }) => theme.device.laptop} {
    font-size: 2vw;
  }
`;

const FeetText = styled.p`
  padding: 0 2%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 3.5vw;
  }
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 3vw;
  }
  @media ${({ theme }) => theme.device.laptop} {
    font-size: 2vw;
  }
`;

const FeedMoreText = styled.span`
  font-size: 1.1vw;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 2.5vw;
  }
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 2.5vw;
  }
  @media ${({ theme }) => theme.device.laptop} {
    font-size: 1.5vw;
  }
`;

export default Contact;
