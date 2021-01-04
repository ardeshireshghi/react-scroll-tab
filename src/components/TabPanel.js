import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';

const TabPanel = ({ value, children }) => {
  const panelRef = useRef(null);

  useEffect(() => {
    const scrollableContentEl = panelRef.current.parentNode;
    const panelIndex = [].indexOf.call(scrollableContentEl.children, panelRef.current);

    if (value === panelIndex) {
      panelRef.current.parentNode.scrollTo(0, panelRef.current.offsetTop);
    }
  }, [value]);
  return <div ref={panelRef}>{children}</div>;
};

TabPanel.propTypes = {
  value: PropTypes.number
};

export default TabPanel;
