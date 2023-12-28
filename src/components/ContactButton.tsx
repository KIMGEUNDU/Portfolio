import { useContactView } from '@/store/useContactView';
import { TbSend } from 'react-icons/tb';
import styled, { keyframes } from 'styled-components';

function ContactButton() {
  const { view } = useContactView();

  return (
    <Button
      type="button"
      id="contactButton"
      aria-label="연락하기"
      onClick={() => console.log('안녕')}
      $appear={view}
    >
      <ButtonImg as={TbSend} alt="contact 이미지" aria-hidden />
      <ButtonText aria-hidden>CONTACT</ButtonText>
    </Button>
  );
}

const rotateText = keyframes`
  0% {
    transform: translateX(0)
  }
  100% {
    transform: translateX(30px) translateY(-50px) scale(30%)
  }`;

const Button = styled.button<{ $appear: boolean }>`
  opacity: ${(props) => (props.$appear ? '1' : '0')};
  visibility: ${(props) => (props.$appear ? 'visible' : 'hidden')};
  transition: opacity 2s, visibility 2s;
  cursor: pointer;
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: black;
  color: white;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  @media ${({ theme }) => theme.device.mobile} {
    width: 70px;
    height: 70px;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 90px;
    height: 90px;
  }
`;

const ButtonImg = styled.img`
  width: 50%;
  height: 50%;
  #contactButton:hover & {
    animation: ${rotateText} 1s infinite alternate;
  }
`;

const ButtonText = styled.span`
  font-size: 15px;
  font-weight: 600;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 10px;
  }
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 12px;
  }
`;

export default ContactButton;
