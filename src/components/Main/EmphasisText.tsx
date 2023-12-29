import styled from 'styled-components';

interface EmphasisText {
  color: string;
  children: string;
}

function EmphasisText({ color, children }: EmphasisText) {
  return <Text $textColor={color}>{children}</Text>;
}

const Text = styled.span<{ $textColor: string }>`
  white-space: nowrap;
  color: ${(props) =>
    props.$textColor === 'yellow'
      ? props.theme.themeColor.yellow
      : props.$textColor === 'pink'
      ? props.theme.themeColor.pink
      : props.theme.themeColor.brown};
`;

export default EmphasisText;
