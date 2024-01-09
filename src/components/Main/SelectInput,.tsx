import styled from 'styled-components';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';

interface SelectInput {
  label: string;
  select: boolean;
  onSelect: () => void;
  color: string;
  onColor: (color: string) => void;
  value: string[];
}

function SelectInput({
  label,
  select,
  onSelect,
  color,
  onColor,
  value,
}: SelectInput) {
  const selectList = value;

  return (
    <>
      <SelectLabel>{label}</SelectLabel>
      <SelectWrapper>
        <SelectButton type="button" onClick={onSelect}>
          {color === '선택' && (
            <>
              선택
              <SelectArrow
                as={select ? TiArrowSortedUp : TiArrowSortedDown}
                alt={`${label} 선택하기`}
                aria-hidden
              />
            </>
          )}
          {color !== '선택' && color}
        </SelectButton>
        <SelectListWrapper $select={select}>
          {selectList.map((v, i) => {
            return (
              <SelectList
                key={i}
                type="button"
                onClick={() => onColor(v)}
                $select={select}
              >
                {v}
              </SelectList>
            );
          })}
        </SelectListWrapper>
      </SelectWrapper>
    </>
  );
}

const SelectWrapper = styled.div`
  position: relative;
  width: 110px;
`;

const SelectButton = styled.button`
  box-sizing: border-box;
  padding: 0 1%;
  background-color: transparent;
  width: 100%;
  border: 2px solid ${(props) => props.theme.themeColor.blue};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.themeColor.blue};
  cursor: pointer;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 3vw;
  }
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 3vw;
  }
`;

const SelectLabel = styled.p`
  white-space: nowrap;
  margin-right: 5px;
  width: 60px;
  @media ${({ theme }) => theme.device.laptop} {
    width: 90px;
  }
`;

const SelectArrow = styled.img`
  transform: translateX(50%);
  width: 20px;
  height: 20px;
`;

const SelectListWrapper = styled.div<{ $select: boolean }>`
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(100%);
  border: 2px solid ${(props) => props.theme.themeColor.blue};
  border-radius: 5px;
  text-align: center;
  width: 100%;
  transition: height 0.5s, opacity 0.1s;
  height: ${(props) => (props.$select ? 'auto' : '0')};
  opacity: ${(props) => (props.$select ? '1' : '0')};
`;

const SelectList = styled.button<{ $select: boolean }>`
  box-sizing: border-box;
  background-color: #fff;
  white-space: nowrap;
  padding: 1%;
  cursor: pointer;
  border: none;
  width: 100%;
  display: ${(props) => (props.$select ? 'block' : 'none')};
  &:hover {
    background-color: ${(props) => props.theme.themeColor.blue};
  }
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 4vw;
  }
`;

export default SelectInput;
