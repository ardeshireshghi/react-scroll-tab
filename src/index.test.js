import React from 'react';
import ReactDOM from 'react-dom';

import { Tabs, Tab, TabPanel, TabScrollableContent } from '.';

const MockTabView = ({ onChange }) => {
  return (
    <>
      <Tabs onChange={onChange}>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
      </Tabs>
      <TabScrollableContent>
        <TabPanel>Panel 1</TabPanel>
        <TabPanel>Panel 2</TabPanel>
      </TabScrollableContent>
    </>
  );
};

describe('React scroll tab', () => {
  let wrapper;

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(wrapper);
  });

  it('renders with no problem', () => {
    wrapper = document.createElement('div');
    ReactDOM.render(<MockTabView onChange={jest.fn()} />, wrapper);

    expect(wrapper.innerHTML).toMatch('Tab 1');
    expect(wrapper.innerHTML).toMatch('Tab 2');
    expect(wrapper.innerHTML).toMatch('Panel 1');
    expect(wrapper.innerHTML).toMatch('Panel 2');
  });
});
