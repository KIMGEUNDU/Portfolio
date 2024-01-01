import { useContactView } from '@/store/useContactView';
import { useEffect } from 'react';
import { TbSend } from 'react-icons/tb';
import styled, { keyframes } from 'styled-components';

function ContactButton() {
  const { view } = useContactView();

  const moveContactPage = () => {
    const element = document.getElementById('Contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const curveText = document.querySelectorAll<HTMLElement>('.curve');
    const reverseText = document.querySelectorAll<HTMLElement>('.reverse');

    curveText.forEach((v, i) => {
      const rotate = (i + 1) * 20;
      v.style.transform = `translateX(-50%) rotate(${rotate}deg)`;
    });

    reverseText.forEach((v, i) => {
      const rotate = (i + 1) * 20;
      v.style.transform = `translateX(-50%) rotate(${rotate}deg)`;
    });
  }, []);

  return (
    <Button
      type="button"
      id="contactButton"
      aria-label="연락하기"
      onClick={moveContactPage}
      $appear={view}
    >
      <ButtonImg as={TbSend} alt="contact 이미지" aria-hidden />
      <div>
        <ButtonText className="curve" aria-hidden>
          C
        </ButtonText>
        <ButtonText className="curve" aria-hidden>
          O
        </ButtonText>
        <ButtonText className="curve" aria-hidden>
          N
        </ButtonText>
        <ButtonText className="curve" aria-hidden>
          T
        </ButtonText>
        <ButtonText className="curve" aria-hidden>
          A
        </ButtonText>
        <ButtonText className="curve" aria-hidden>
          C
        </ButtonText>
        <ButtonText className="curve" aria-hidden>
          T
        </ButtonText>
      </div>
      <Test>
        <ButtonText className="reverse" aria-hidden>
          C
        </ButtonText>
        <ButtonText className="reverse" aria-hidden>
          O
        </ButtonText>
        <ButtonText className="reverse" aria-hidden>
          N
        </ButtonText>
        <ButtonText className="reverse" aria-hidden>
          T
        </ButtonText>
        <ButtonText className="reverse" aria-hidden>
          A
        </ButtonText>
        <ButtonText className="reverse" aria-hidden>
          C
        </ButtonText>
        <ButtonText className="reverse" aria-hidden>
          T
        </ButtonText>
      </Test>
    </Button>
  );
}

const rotateText = keyframes`
  0% {
    transform: translateX(0) rotate(90deg)
  }
  100% {
    transform: translateX(30px) translateY(50px) scale(30%) rotate(90deg)
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
  transform: rotate(-80deg);
  z-index: 10;
  @media ${({ theme }) => theme.device.mobile} {
    bottom: 60px;
  }
`;

const ButtonImg = styled.img`
  width: 50%;
  height: 50%;
  transform: rotate(90deg);
  #contactButton:hover & {
    animation: ${rotateText} 1s infinite alternate;
  }
`;

const ButtonText = styled.span`
  position: absolute;
  top: 0;
  left: 50%;
  height: 100%;
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

const Test = styled.div`
  position: absolute;
  top: 0;
  right: -2px;
  height: 100%;
  width: 100%;
  transform: rotate(180deg);
`;

export default ContactButton;
