import styled from 'styled-components';
const Tab = styled.button`
  flex: ${(props) => (props.variant === 'center' ? 0 : 1)} 0 auto;
  cursor: pointer;
  background-color: ${(props) =>
    props.selected ? props.theme.tabSelectedBgColor : 'transparent'};
  color: ${(props) =>
    props.selected
      ? props.theme.tabSelectedTextColor
      : props.theme.tabTextColor};
  font-weight: ${(props) => (props.selected ? 500 : 400)};
  border-radius: ${(props) => props.theme.tabBorderRadius};
  border: none;
  font-size: 1rem;
  font-family: inherit;
  padding: 1rem;
  margin: 0;
  outline: none;
  transition: background-color 0.35s ease;
  will-change: background-color;

  &:hover,
  &:focus {
    background-color: ${(props) =>
      props.selected
        ? props.theme.tabSelectedBgColor
        : props.theme.tabFocusHoverBgColor};
    color: ${(props) =>
      props.selected
        ? props.theme.tabSelectedTextColor
        : props.theme.tabFocusHoverColor};
  }
`;

export default Tab;
