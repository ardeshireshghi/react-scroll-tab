import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';

const TabPanel = ({
  index,
  value,
  shouldForceScroll,
  setShouldForceScroll,
  children
}) => {
  const panelRef = useRef(null);

  useEffect(() => {
    if (value === index) {
      panelRef.current.parentNode.scrollTo(0, panelRef.current.offsetTop);
      setShouldForceScroll(false);
    }
  }, [value, shouldForceScroll]);

  return <div ref={panelRef}>{children}</div>;
};

TabPanel.propTypes = {
  value: PropTypes.number,
  shouldForceScroll: PropTypes.bool,
  setShouldForceScroll: PropTypes.func
};

export default TabPanel;
