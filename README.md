# react-scroll-tab

A simple React tab component with scrollable tab content

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-scroll-tab.svg)](https://www.npmjs.com/package/@eardi/react-scroll-tab)

## Install

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

```jsx
import React from 'react';
import { Tabs, Tab, TabPanel, TabScrollableContent } from '@eardi/react-scroll-tab';

const INITIAL_TAB_VALUE = 0;
const customTheme = {
  tabTextColor: 'black',
  tabSelectedTextColor: 'black',
  tabSelectedBgColor: 'white',
  tabIndicatorBgColor: 'black',
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
