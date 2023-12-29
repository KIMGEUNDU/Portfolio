import { useContactView } from '@/store/useContactView';
import { TbSend } from 'react-icons/tb';
import styled, { keyframes } from 'styled-components';

function ContactButton() {
  const { view } = useContactView();

  const moveContactPage = () => {
    const element = document.getElementById('Contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Button
      type="button"
      id="contactButton"
      aria-label="연락하기"
      onClick={moveContactPage}
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
  width: 6vw;
  height: 6vw;
  min-width: 75px;
  min-height: 75px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const ButtonImg = styled.img`
  width: 50%;
  height: 50%;
  #contactButton:hover & {
    animation: ${rotateText} 1s infinite alternate;
  }
`;

const ButtonText = styled.span`
  font-size: 1vw;
  font-weight: 600;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 0.7rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 0.8rem;
  }
  @media ${({ theme }) => theme.device.laptop} {
    font-size: 0.8rem;
  }
`;

export default ContactButton;
