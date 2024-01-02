import styled from 'styled-components';

function Tag({ value, project }: { value: string[]; project?: boolean }) {
  const color = [
    'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)',
    'linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)',
    'linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%)',
    'linear-gradient(to top, #1b7b76 0%, #fed6e3 100%)',
    'linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)',
    'linear-gradient(to top, #feada6 0%, #f5efef 100%)',
    'linear-gradient(to top, #accbee 0%, #e7f0fd 100%)',
    'linear-gradient(to top, #c1dfc4 0%, #deecdd 100%)',
    'linear-gradient(60deg, #abecd6 0%, #fbed96 100%)',
  ];

  const randomColor = () => {
    const random = Math.round(Math.random() * (color.length - 1));

    return color[random];
  };

  return (
    <>
      {value.map((v) => (
        <TagItem
          key={v}
          $color={randomColor()}
          $project={project}
        >{`# ${v}`}</TagItem>
      ))}
    </>
  );
}

const TagItem = styled.span<{ $color: string; $project?: boolean }>`
  padding: ${(props) => (props.$project ? `0.5% 1%` : '1% 2%')};
  font-size: ${(props) => (props.$project ? `0.7vw` : '1vw')};
  border-radius: 20px;
  background-image: ${(props) => props.$color};
  white-space: nowrap;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: ${(props) => (props.$project ? `0.5vw` : '3vw')};
  }
  @media ${({ theme }) => theme.device.tablet} {
    font-size: ${(props) => (props.$project ? `0.5vw` : '2.5vw')};
  }
  @media ${({ theme }) => theme.device.laptop} {
    font-size: ${(props) => (props.$project ? `0.5vw` : '1.5vw')};
  }
`;

export default Tag;
