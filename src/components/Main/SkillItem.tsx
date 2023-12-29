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
    <Item $top={top} $left={left} $bg={bg} $color={color} $deg={deg}>
      {children}
    </Item>
  );
}

const Item = styled.span<{
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
      : props.theme.themeColor.brown};
  color: ${(props) => (props.$color === 'black' ? 'black' : 'white')};
  transform: ${(props) => `rotate(${props.$deg}deg)`};
  border-radius: 100px;
  font-size: 3vw;
  padding: 1% 2%;
`;

export default SkillItem;
