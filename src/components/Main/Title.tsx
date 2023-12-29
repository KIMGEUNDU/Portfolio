import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface Title {
  id: string;
  children: string;
}

function Title({ id, children }: Title) {
  const [appearTitle, setAppearTitle] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((e) => {
      const firstObject = e[0];

      if (firstObject.isIntersecting) {
        setAppearTitle(true);
      } else {
        setAppearTitle(false);
      }
    });

    const element = document.getElementById(id);

    if (element) {
      observer.observe(element);
    }
  }, []);

  return (
    <Heading id={id} $appear={appearTitle}>
      {children}
    </Heading>
  );
}

const Heading = styled.h2<{ $appear: boolean }>`
  font-size: 9vw;
  font-weight: 900;
  padding: 30px 0;
  transform: ${(props) =>
    props.$appear ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 1s;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 20vw;
  }
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 20vw;
  }
`;

export default Title;
