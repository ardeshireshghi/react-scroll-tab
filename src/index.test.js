import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import {
  Tabs,
  Tab,
  TabPanel,
  TabScrollableContent,
  TabSwipeableContent
} from '.';

const TabViewWithScroll = ({ onChange }) => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleChange = (newIndex) => {
    setCurrentTab(newIndex);
    onChange(newIndex);
  };

  return (
    <>
      <Tabs value={currentTab} onChange={handleChange}>
        <Tab id='tab1'>Tab 1</Tab>
        <Tab id='tab2'>Tab 2</Tab>
      </Tabs>
      <TabScrollableContent id='scrollable-content'>
        <TabPanel value={currentTab}>Panel 1</TabPanel>
        <TabPanel value={currentTab}>Panel 2</TabPanel>
      </TabScrollableContent>
    </>
  );
};

const TabViewWithSwipe = ({ onChange }) => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleChange = (newIndex) => {
    setCurrentTab(newIndex);
    onChange(newIndex);
  };

  return (
    <>
      <Tabs value={currentTab} onChange={handleChange}>
        <Tab id='tab1'>Tab 1</Tab>
        <Tab id='tab2'>Tab 2</Tab>
      </Tabs>
      <TabSwipeableContent
        index={currentTab}
        onChangeIndex={handleChange}
        id='swipeable-content'
      >
        <div id='tab1-content'>Content 1</div>
        <div id='tab2-content'>Content 2</div>
      </TabSwipeableContent>
    </>
  );
};

describe('React scrollable tab view', () => {
  let wrapper;

  beforeEach(() => {
    window.Element.prototype.scrollTo = jest.fn();
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(wrapper);
  });

  it('shows tabs and panels', () => {
    wrapper = document.createElement('div');
    ReactDOM.render(<TabViewWithScroll onChange={jest.fn()} />, wrapper);

    expect(wrapper.innerHTML).toMatch('Tab 1');
    expect(wrapper.innerHTML).toMatch('Tab 2');
    expect(wrapper.innerHTML).toMatch('Panel 1');
    expect(wrapper.innerHTML).toMatch('Panel 2');
  });

  describe('when tab is clicked', () => {
    let changeHandlerSpy;
    let scrollableContentEl;

    beforeEach(() => {
      wrapper = document.createElement('div');
      changeHandlerSpy = jest.fn();

      ReactDOM.render(
        <TabViewWithScroll onChange={changeHandlerSpy} />,
        wrapper
      );
      scrollableContentEl = wrapper.querySelector('#scrollable-content');

      // Click second tab
      wrapper.querySelector('#tab2').click();
    });

    it('calls change handler with the correct index', () => {
      expect(changeHandlerSpy).toHaveBeenCalledWith(1);
    });

    it('scrolls to the second tab panel', () => {
      expect(scrollableContentEl.scrollTo).toHaveBeenCalledTimes(1);
    });
  });
});

describe('React swipeable tab view', () => {
  let wrapper;

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(wrapper);
  });

  it('shows tabs and content of first tab', () => {
    wrapper = document.createElement('div');
    ReactDOM.render(<TabViewWithSwipe onChange={jest.fn()} />, wrapper);

    expect(wrapper.innerHTML).toMatch('Tab 1');
    expect(wrapper.innerHTML).toMatch('Tab 2');
    expect(wrapper.innerHTML).toMatch('Content 1');
  });

  describe('when tab is clicked', () => {
    let changeHandlerSpy;

    beforeEach(() => {
      wrapper = document.createElement('div');
      changeHandlerSpy = jest.fn();

      ReactDOM.render(
        <TabViewWithSwipe onChange={changeHandlerSpy} />,
        wrapper
      );

      // Click second tab
      wrapper.querySelector('#tab2').click();
    });

    it('calls change handler with the correct index', () => {
      expect(changeHandlerSpy).toHaveBeenCalledWith(1);
    });

    it('shows the second tab content', () => {
      expect(wrapper.innerHTML).toMatch('Content 2');
    });
  });
});
