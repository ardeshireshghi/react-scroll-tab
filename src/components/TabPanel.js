import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';

const TabPanel = ({ index, value, children }) => {
  const panelRef = useRef(null);

  useEffect(() => {
    if (value === index) {
      panelRef.current.parentNode.scrollTo(0, panelRef.current.offsetTop);
    }
  }, [index, value]);

  return <div ref={panelRef}>{children}</div>;
};

TabPanel.propTypes = {
  value: PropTypes.number
};

export default TabPanel;
