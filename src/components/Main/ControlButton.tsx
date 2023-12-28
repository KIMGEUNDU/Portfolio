import styled from 'styled-components';

interface ControlButton {
  img: string;
  label: string;
  onClick: () => void;
}

function ControlButton({ img, label, onClick }: ControlButton) {
  return (
    <ControlItem aria-label={label} onClick={onClick}>
      <ControlItemImg as={img} alt={label} aria-hidden />
    </ControlItem>
  );
}

const ControlItem = styled.button`
  background-color: transparent;
  border: none;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const ControlItemImg = styled.img`
  width: 30px;
  height: 30px;
`;

export default ControlButton;
