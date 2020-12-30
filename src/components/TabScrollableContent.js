import styled from 'styled-components';

const TabScrollableContent = styled.div`
  max-height: calc(100vh - 4rem);
  overflow-y: auto;
  scroll-behavior: smooth;
  position: relative;
  overscroll-behavior: none;
`;

export default TabScrollableContent;
