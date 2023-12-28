import { useState } from 'react';
import styled, { keyframes } from 'styled-components';

function MenuBarItem({
  img,
  delayTime = 1,
  onClick,
  children,
}: {
  img: string;
  delayTime?: number;
  onClick: () => void;
  children: string;
}) {
  const [endAnimation, setEndAnimation] = useState(false);

  return (
    <ItemLink id="navLink" onClick={onClick}>
      <Image
        src={img}
        alt="Designed by Freepik"
        $delayTime={delayTime}
        $endAnimation={endAnimation}
        onAnimationEnd={() => setEndAnimation(true)}
      />
      <ImageTitle>{children}</ImageTitle>
    </ItemLink>
  );
}

const appearImage = keyframes`
    0%{opacity: 0; transform: scale(0)}
    100%{opacity: 1; transform: scale(1)}
`;

const ItemLink = styled.button`
  background-color: transparent;
  border: none;
  position: relative;
  text-align: center;
`;

const Image = styled.img<{ $delayTime: number; $endAnimation: boolean }>`
  opacity: ${(props) => (props.$endAnimation ? '1' : '0')};
  max-width: 80%;
  animation: ${appearImage} 2s linear ${(props) => props.$delayTime}s forwards;
  @media ${({ theme }) => theme.device.mobile} {
    width: 30%;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 40%;
  }
`;

const ImageTitle = styled.span`
  font-size: 25px;
  opacity: 0;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translateX(50%) rotate(-30deg);
  background-color: black;
  color: white;
  padding: 10px 10%;
  #navLink:hover & {
    transition: opacity 0.5s;
    opacity: 1;
  }
  @media screen and (max-width: 500px) {
    font-size: 15px;
  }
`;

export default MenuBarItem;
