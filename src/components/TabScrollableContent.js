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

const TABS_SECTION_HEIGHT = 64;
const PANEL_RANGE_COUNT = 5;
const PANEL_RANGE_LOWER_INDEX = 0;
const PANEL_RANGE_UPPER_INDEX = 1;

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
  const [shouldForceScroll, setShouldForceScroll] = useState(false);
  const [panelRangeToRender, setPanelRangeToRender] = useState([
    Math.max(0, value - PANEL_RANGE_COUNT),
    value + PANEL_RANGE_COUNT
  ]);

  const handleScroll = useDebounce({
    cb(e) {
      const reachedEndofScrollBar =
        Math.abs(
          e.target.scrollHeight - (e.target.scrollTop + e.target.offsetHeight)
        ) < 1;

      if (reachedEndofScrollBar) {
        setPanelRangeToRender(([currentMin, currentMax]) => [
          currentMin,
          currentMax + PANEL_RANGE_COUNT
        ]);
      } else if (e.target.scrollTop === 0) {
        e.target.setAttribute('previous-scroll-height', e.target.scrollHeight);
        setPanelRangeToRender(([currentMin, currentMax]) => [
          Math.max(0, currentMin - PANEL_RANGE_COUNT),
          currentMax
        ]);
      }
    },
    wait: 50
  });

  useEffect(() => {
    if (value > panelRangeToRender[PANEL_RANGE_UPPER_INDEX]) {
      setPanelRangeToRender(([currentMin, _]) => [
        currentMin,
        value + PANEL_RANGE_COUNT
      ]);
    } else if (value < panelRangeToRender[PANEL_RANGE_LOWER_INDEX]) {
      setPanelRangeToRender(([_, currentMax]) => [
        Math.max(0, value - PANEL_RANGE_COUNT),
        currentMax
      ]);

      setShouldForceScroll(true);
    }
  }, [value, setPanelRangeToRender]);

  useEffect(() => {
    const maxHeight = viewportHeight() - TABS_SECTION_HEIGHT;

    if (scrollableContentHeight < maxHeight) {
      const currentContentHeight = scrollableEl.current.scrollHeight - 1;
      setScrollableContentHeight(Math.min(maxHeight, currentContentHeight));
    }

    // Scroll back to the first visible element after reaching beginning of scroll
    if (scrollableEl.current.hasAttribute('previous-scroll-height')) {
      const prevScrollHeight = scrollableEl.current.getAttribute(
        'previous-scroll-height'
      );
      scrollableEl.current.removeAttribute('previous-scroll-height');

      scrollableEl.current.style.setProperty('scroll-behavior', 'auto');
      scrollableEl.current.scrollTo(
        0,
        scrollableEl.current.scrollHeight - prevScrollHeight
      );
      scrollableEl.current.style.removeProperty('scroll-behavior');
    }
  }, [panelRangeToRender]);

  return (
    <StyledTabScrollableContent
      mh={scrollableContentHeight + 'px'}
      ref={scrollableEl}
      onScroll={handleScroll}
      {...otherProps}
    >
      {Children.toArray(children)
        .slice(
          panelRangeToRender[PANEL_RANGE_LOWER_INDEX],
          panelRangeToRender[PANEL_RANGE_UPPER_INDEX] + 1
        )
        .map((child, index) => {
          return cloneElement(child, {
            index: index + panelRangeToRender[PANEL_RANGE_LOWER_INDEX],
            key: index + panelRangeToRender[PANEL_RANGE_LOWER_INDEX],
            shouldForceScroll:
              index + panelRangeToRender[PANEL_RANGE_LOWER_INDEX] === value
                ? shouldForceScroll
                : false,
            setShouldForceScroll,
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
