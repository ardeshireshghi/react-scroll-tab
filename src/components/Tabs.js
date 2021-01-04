import React, {
  Children,
  cloneElement,
  useEffect,
  useMemo,
  useRef,
  useState,
  Fragment
} from 'react';

import PropTypes from 'prop-types';

import styled, { ThemeProvider } from 'styled-components';
import TabIndicator from './TabIndicator';
import { DEFAULT_THEME } from '../constants';

const StyledTabs = styled.div`
  display: flex;
  position: relative;
  gap: ${(props) => props.theme.tabGap};
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  justify-content: ${(props) =>
    props.variant === 'center' ? 'center' : 'normal'};
`;

const TabBorder = styled.div`
  width: ${(props) => `${props.w}px`};
  height: 0;
  border-bottom: 2px solid ${(props) => props.theme.tabListBorderBottomColor};
  position: absolute;
  bottom: 0px;
`;

TabBorder.defaultProps = {
  w: 0
};

const createSmartResizeHandler = (handlerFn) => {
  let timer;

  return (event) => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      handlerFn(event);
    }, 100);
  };
};
const Tabs = ({ children, onChange, variant, theme, value }) => {
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const [tabBorderStyle, setTabBorderStyle] = useState({});
  const tabRefs = useRef([]);

  const mergedTheme = { ...DEFAULT_THEME, ...theme };
  const tabsHaveBorderRadius = mergedTheme.tabBorderRadius !== '0';

  useEffect(() => {
    const selectedTabRef = tabRefs.current[value];
    const updateStyles = () => {
      if (selectedTabRef) {
        setIndicatorStyle({
          width: selectedTabRef.offsetWidth,
          translateX: selectedTabRef.offsetLeft
        });

        setTabBorderStyle({
          width: selectedTabRef.parentNode.scrollWidth
        });
      }
    };
    const handleResize = createSmartResizeHandler(updateStyles);
    window.addEventListener('resize', handleResize);

    updateStyles();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [value]);

  const tabs = useMemo(
    () =>
      Children.map(children, (child, index) => {
        return cloneElement(child, {
          key: index,
          ref: (el) => (tabRefs.current[index] = el),
          selected: index === value,
          onClick: () => onChange(index),
          variant: variant
        });
      }),
    [value, children, onChange, variant]
  );

  return (
    <Fragment>
      <ThemeProvider theme={mergedTheme}>
        <StyledTabs variant={variant}>
          {!tabsHaveBorderRadius && <TabBorder w={tabBorderStyle.width} />}
          {tabs}
          {!tabsHaveBorderRadius && (
            <TabIndicator
              w={indicatorStyle.width}
              translateX={indicatorStyle.translateX}
            />
          )}
        </StyledTabs>
      </ThemeProvider>
    </Fragment>
  );
};

Tabs.defaultProps = {
  value: 0,
  variant: 'fullWidth',
  theme: DEFAULT_THEME
};

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(['fullWidth', 'center']),
  value: PropTypes.number,
  theme: PropTypes.shape({})
};

export default Tabs;
