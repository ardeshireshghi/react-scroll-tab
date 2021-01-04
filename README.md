# react-scroll-tab

A simple React tab component with scrollable tab content

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/@eardi/react-scroll-tab.svg)](https://www.npmjs.com/package/@eardi/react-scroll-tab)

## Install

`react-scroll-tab` requires Node.js version 12 or greater and React 16.

```bash
# npm
npm install --save @eardi/react-scroll-tab

# yarn
yarn add @eardi/react-scroll-tab
```

## Usage

```jsx
import React from 'react';
import { Tabs, Tab, TabPanel, TabScrollableContent } from '@eardi/react-scroll-tab';

const INITIAL_TAB_VALUE = 0;

function Page() {
  const [selectedTab, setSelectedTab] = useState(INITIAL_TAB_VALUE);

  return (
    <>
      <Tabs value={selectedTab} variant="fullWidth" onChange={(index) => setSelectedTab(index)}>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </Tabs>
      <TabScrollableContent>
        <TabPanel value={selectedTab}>
          <div>Tab 1 content</div>
        </TabPanel>
        <TabPanel value={selectedTab}>
          <div>Tab 2 content</div>
        </TabPanel>
        <TabPanel value={selectedTab}>
          <div>Tab 3 content</div>
        </TabPanel>
      </TabScrollableContent>
    </>
  );
}
```

### Use Custom Theme

The component is themeable. Below are the defined theme variables:

| Name     |      Description     |  Default |
|----------|:---------------------:|:--------:|
| tabTextColor |  Tab text color when not selected |  #333 |
| tabSelectedTextColor |  Selected Tab text color  |  #2980b9 (blue) || tabSelectedBgColor |  Selected Tab background color |  rgba(41, 128, 185, 0.06) (transparent blue) |
| tabIndicatorColor |  Indicator line background color |  #2980b9 (blue) |
| tabFocusHoverBgColor |  Tab background color when hovered or focused |  rgba(41, 128, 185, 0.06) (transparent blue) |
| tabFocusHoverColor |  Tab text color when hovered or focused |  #2980b9 (blue) |
| tabBorderRadius |  Border radius of the tab background |  0  |
| tabListBorderBottomColor |  Color of the Border line beneath the tabs list |  rgba(0, 0, 0, 0.05) |
| tabGap |  Gap or margin between each tab item |  0  |


Below is an example (for more examples look at Storybook demos):

```jsx
import React from 'react';
import { Tabs, Tab, TabPanel, TabScrollableContent } from '@eardi/react-scroll-tab';

const INITIAL_TAB_VALUE = 0;
const customTheme = {
  tabTextColor: 'black',
  tabSelectedTextColor: 'black',
  tabSelectedBgColor: 'white',
  tabIndicatorColor: 'black',
  tabFocusHoverBgColor: 'rgb(0 0 0 / 1%)'
};

function Page() {
  const [selectedTab, setSelectedTab] = useState(INITIAL_TAB_VALUE);

  return (
    <Tabs value={selectedTab} theme={customTheme} onChange={(index) => setSelectedTab(index)}>
      <Tab>Tab 1</Tab>
      <Tab>Tab 2</Tab>
      <Tab>Tab 3</Tab>
    </Tabs>
    ...
  );
}
```

## Demo

[Storybook](https://ardeshireshghi.github.io/react-scroll-tab/?path=/story/tabs--full-width)

## License

MIT © [ardeshireshghi](https://github.com/ardeshireshghi)
