import React, {
  Children,
  cloneElement,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';

import PropTypes from 'prop-types';

import styled, { ThemeProvider } from 'styled-components';
import TabIndicator from './TabIndicator';

const DEFAULT_THEME = {
  tabTextColor: '#333',
  tabSelectedTextColor: 'purple',
  tabSelectedBgColor: 'rgb(128 0 128 / 29%)',
  tabIndicatorBgColor: 'purple',
  tabFocusHoverBgColor: 'rgb(128 0 128 / 9%)'
};

const StyledTabs = styled.div`
  display: flex;
  position: relative;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  justify-content: ${(props) =>
    props.variant === 'center' ? 'center' : 'normal'};
`;

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
  const tabRefs = useRef([]);

  const mergedTheme = { ...DEFAULT_THEME, ...theme };
  useEffect(() => {
    const selectedTabRef = tabRefs.current[value];
    const handleResize = createSmartResizeHandler(() => {
      if (selectedTabRef) {
        setIndicatorStyle({
          width: selectedTabRef.offsetWidth,
          translateX: selectedTabRef.offsetLeft
        });
      }
    });

    if (selectedTabRef) {
      setIndicatorStyle({
        width: selectedTabRef.offsetWidth,
        translateX: selectedTabRef.offsetLeft
      });
    }

    window.addEventListener('resize', handleResize);

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
    <>
      <ThemeProvider theme={mergedTheme}>
        <StyledTabs variant={variant}>
          {tabs}
          <TabIndicator
            w={indicatorStyle.width}
            translateX={indicatorStyle.translateX}
          />
        </StyledTabs>
      </ThemeProvider>
    </>
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
