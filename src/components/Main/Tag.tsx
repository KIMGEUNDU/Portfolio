import styled from 'styled-components';

function Tag({ value }: { value: string[] }) {
  const color = [
    '#FCB9AA',
    '#FFDBCC',
    '#ECEAE4',
    '#A2E1DB',
    '#55CBCD',
    '#FFAEA5',
    '#ABDEE6',
    '#CBAACB',
    '#FFFFB5',
    '#FFCCB6',
    '#F3B0C3',
    '#C6DBDA',
    '#FEE1E8',
    '#FED7C3',
    '#F6EAC2',
    '#e7c7f6',
  ];

  const randomColor = () => {
    const random = Math.round(Math.random() * color.length);

    return color[random];
  };

  return (
    <>
      {value.map((v) => (
        <TagItem key={v} $color={randomColor()}>{`# ${v}`}</TagItem>
      ))}
    </>
  );
}

const TagItem = styled.span<{ $color: string }>`
  padding: 1% 2%;
  font-size: 1.2vw;
  border-radius: 20px;
  background-color: ${(props) => props.$color};
  white-space: nowrap;
`;

export default Tag;
