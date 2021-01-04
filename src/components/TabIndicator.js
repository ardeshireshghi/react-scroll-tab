import styled from 'styled-components';

const TabIndicator = styled.div`
  height: 2px;
  position: absolute;
  left: 0;
  bottom: 0;
  width: ${(props) => props.w}px;
  background-color: ${(props) => props.theme.tabIndicatorColor};
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(${(props) => props.translateX}px);
`;

TabIndicator.defaultProps = {
  w: 'auto'
};

export default TabIndicator;
