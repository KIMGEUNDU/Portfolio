import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function NavBar() {
  return (
    <Wrapper>
      <NavItem to="#" $current={true} />
      <NavItem to="#" $current={false} />
      <NavItem to="#" $current={false} />
      <NavItem to="#" $current={false} />
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  position: fixed;
  top: 50%;
  right: 1%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const NavItem = styled(NavLink)<{ $current: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.$current
      ? props.theme.themeColor.brown
      : props.theme.themeColor.pink};
`;

export default NavBar;
