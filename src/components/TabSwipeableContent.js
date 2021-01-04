import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import PropTypes from 'prop-types';

const TabSwipeableContent = ({
  index,
  onChangeIndex,
  children,
  ...otherProps
}) => {
  return (
    <SwipeableViews index={index} onChangeIndex={onChangeIndex} {...otherProps}>
      {children}
    </SwipeableViews>
  );
};

TabSwipeableContent.propTypes = {
  index: PropTypes.number.isRequired,
  onChangeIndex: PropTypes.func
};

export default TabSwipeableContent;
