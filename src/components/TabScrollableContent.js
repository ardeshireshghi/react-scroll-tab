import PropTypes from 'prop-types';
import React, {
  useRef,
  useEffect,
  Children,
  useState,
  cloneElement
} from 'react';
import styled from 'styled-components';
import { useDebounce } from '../hooks/useDebounce';

const MAX_TABS_HEIGHT = 64;
const MIN_PANELS_TO_RENDER = 5;
const PANELS_RENDER_STEPS = 5;

const StyledTabScrollableContent = styled.div`
  min-height: 50px;
  max-height: ${(props) => props.mh};
  overflow-y: auto;
  scroll-behavior: smooth;
  position: relative;
  overscroll-behavior: none;
`;

StyledTabScrollableContent.propTypes = {
  mh: PropTypes.string
};

const viewportHeight = () =>
  Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

const TabScrollableContent = ({ children, value, ...otherProps }) => {
  const scrollableEl = useRef(null);
  const [scrollableContentHeight, setScrollableContentHeight] = useState(0);
  const [maxPanelToRender, setMaxPanelRendered] = useState(
    Math.max(MIN_PANELS_TO_RENDER, value)
  );

  if (value > maxPanelToRender) {
    setMaxPanelRendered(value);
  }
  const handleScroll = useDebounce({
    cb(e) {
      const reachedEndofScrollBar =
        Math.abs(
          e.target.scrollHeight - (e.target.scrollTop + e.target.offsetHeight)
        ) < 1;

      if (reachedEndofScrollBar) {
        setMaxPanelRendered((currentMax) => currentMax + PANELS_RENDER_STEPS);
      }
    },
    wait: 50
  });

  useEffect(() => {
    const maxHeight = viewportHeight() - MAX_TABS_HEIGHT;

    if (scrollableContentHeight < maxHeight) {
      const currentContentHeight = scrollableEl.current.scrollHeight - 1;
      setScrollableContentHeight(Math.min(maxHeight, currentContentHeight));
    }
  }, [maxPanelToRender]);

  return (
    <StyledTabScrollableContent
      mh={scrollableContentHeight + 'px'}
      ref={scrollableEl}
      onScroll={handleScroll}
      {...otherProps}
    >
      {Children.toArray(children)
        .slice(0, maxPanelToRender + 1)
        .map((child, index) => {
          return cloneElement(child, {
            key: index,
            value
          });
        })}
    </StyledTabScrollableContent>
  );
};

TabScrollableContent.propTypes = {
  value: PropTypes.number,
  children: PropTypes.node
};

TabScrollableContent.defaultProps = {
  value: 0
};

export default TabScrollableContent;
