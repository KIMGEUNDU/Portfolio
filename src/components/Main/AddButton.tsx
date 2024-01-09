import styled from 'styled-components';

interface AddButton {
  children: string;
  top: number;
  right: number;
  color: string;
  onClick: () => void;
}

function AddButton({ children, top, right, color, onClick }: AddButton) {
  return (
    <Button
      type="button"
      onClick={onClick}
      $top={top}
      $right={right}
      $color={color}
    >
      {children}
    </Button>
  );
}

const Button = styled.button<{ $top: number; $right: number; $color: string }>`
  position: absolute;
  top: ${(props) => `${props.$top}%`};
  right: ${(props) => `${props.$right}%`};
  background-color: transparent;
  color: ${(props) => props.$color};
  padding: 5px;
  border: ${(props) => `1px solid ${props.$color}`};
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.5s;
  &:hover {
    background-color: ${(props) => props.$color};
    color: ${(props) =>
      props.$color === 'white' ? props.theme.themeColor.brown : 'white'};
  }
`;

export default AddButton;
