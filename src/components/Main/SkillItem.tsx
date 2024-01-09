import { motion } from 'framer-motion';
import styled from 'styled-components';

interface SkillItem {
  children: string;
  top: number;
  left: number;
  bg: string;
  color: string;
  deg: number;
}

function SkillItem({ children, top, left, bg, color, deg }: SkillItem) {
  return (
    <Item
      $top={top}
      $left={left}
      $bg={bg}
      $color={color}
      $deg={deg}
      drag
      dragConstraints={{
        top: -100,
        left: -100,
        right: 100,
        bottom: 100,
      }}
      style={{ rotate: `${deg}deg` }}
    >
      {children}
    </Item>
  );
}

const Item = styled(motion.span)<{
  $top: number;
  $left: number;
  $bg: string;
  $color: string;
  $deg: number;
}>`
  position: absolute;
  top: ${(props) => `${props.$top}%`};
  left: ${(props) => `${props.$left}%`};
  background-color: ${(props) =>
    props.$bg === 'pink'
      ? props.theme.themeColor.pink
      : props.$bg === 'yellow'
      ? props.theme.themeColor.yellow
      : props.$bg === 'brown'
      ? props.theme.themeColor.brown
      : props.$bg};
  color: ${(props) => (props.$color === 'black' ? 'black' : 'white')};
  border-radius: 100px;
  font-size: 3vw;
  padding: 1% 2%;
  cursor: pointer;
`;

export default SkillItem;
