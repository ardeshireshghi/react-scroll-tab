/* istanbul ignore file */
import React, { useState } from 'react';
import styled from 'styled-components';

import {
  Tabs,
  Tab,
  TabPanel,
  TabScrollableContent,
  TabSwipeableContent
} from '../';

const Wrapper = styled.div`
  font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue',
    Helvetica, Arial, 'Lucida Grande', sans-serif;
`;

// This default export determines where your story goes in the story list
export default {
  title: 'Tabs',
  component: Tabs
};

const renderTabs = (count) => {
  return [...Array(count)].map((_, index) => (
    <Tab key={index}>Tab {index + 1}</Tab>
  ));
};

const renderTabPanels = (count) => {
  return [...Array(count)].map((_, index) => (
    <TabPanel key={index}>
      <h2>Tab {index + 1} content</h2>
      <h3>
        Non do sint occaecat aliqua culpa culpa laboris tempor amet veniam et
        duis.
      </h3>
      <p>
        Elit do qui excepteur reprehenderit ex irure officia pariatur. Nulla
        quis enim est deserunt irure esse veniam. Commodo enim tempor do in
        ullamco sunt ipsum. Nisi veniam minim enim laborum nostrud consequat qui
        duis incididunt non. Pariatur consectetur aliquip laboris ex fugiat anim
        nisi excepteur nisi reprehenderit anim adipisicing id. Exercitation
        eiusmod magna Lorem quis minim esse.
      </p>
    </TabPanel>
  ));
};

const Template = (args) => {
  const [selectedTab, setSelectedTab] = useState(args.value);

  return (
    <Wrapper>
      <Tabs {...args} value={selectedTab} onChange={setSelectedTab}>
        {renderTabs(args.tabCount)}
      </Tabs>
      <TabScrollableContent
        value={selectedTab}
        onScrollChangeIndex={setSelectedTab}
      >
        {renderTabPanels(args.tabCount)}
      </TabScrollableContent>
    </Wrapper>
  );
};

const SwipeableTemplate = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <Wrapper>
      <Tabs variant='fullWidth' value={selectedTab} onChange={setSelectedTab}>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
        <Tab>Tab 4</Tab>
        <Tab>Tab 5</Tab>
      </Tabs>
      <TabSwipeableContent index={selectedTab} onChangeIndex={setSelectedTab}>
        <div>
          <h2>Tab 1 content</h2>
          <h3>
            Non do sint occaecat aliqua culpa culpa laboris tempor amet veniam
            et duis.
          </h3>
          <p>
            Elit do qui excepteur reprehenderit ex irure officia pariatur. Nulla
            quis enim est deserunt irure esse veniam. Commodo enim tempor do in
            ullamco sunt ipsum. Nisi veniam minim enim laborum nostrud consequat
            qui duis incididunt non. Pariatur consectetur aliquip laboris ex
            fugiat anim nisi excepteur nisi reprehenderit anim adipisicing id.
            Exercitation eiusmod magna Lorem quis minim esse.
          </p>
        </div>
        <div>
          <h2>Tab 2 content</h2>
          <h3>
            Deserunt dolore reprehenderit dolore Lorem irure fugiat do do in
            incididunt cupidatat id.
          </h3>
          <p>
            Elit do qui excepteur reprehenderit ex irure officia pariatur. Nulla
            quis enim est deserunt irure esse veniam. Commodo enim tempor do in
            ullamco sunt ipsum. Nisi veniam minim enim laborum nostrud consequat
            qui duis incididunt non. Pariatur consectetur aliquip laboris ex
            fugiat anim nisi excepteur nisi reprehenderit anim adipisicing id.
            Exercitation eiusmod magna Lorem quis minim esse.
          </p>
        </div>
        <div>
          <h2>Tab 3 content</h2>
          <h3>
            Velit nulla ullamco cillum labore aliquip velit pariatur
            consectetur.
          </h3>
          <p>
            Elit do qui excepteur reprehenderit ex irure officia pariatur. Nulla
            quis enim est deserunt irure esse veniam. Commodo enim tempor do in
            ullamco sunt ipsum. Nisi veniam minim enim laborum nostrud consequat
            qui duis incididunt non. Pariatur consectetur aliquip laboris ex
            fugiat anim nisi excepteur nisi reprehenderit anim adipisicing id.
            Exercitation eiusmod magna Lorem quis minim esse.
          </p>
        </div>
        <div>
          <h2>Tab 4 content</h2>
          <h3>
            Velit nulla ullamco cillum labore aliquip velit pariatur
            consectetur.
          </h3>
          <p>
            Elit do qui excepteur reprehenderit ex irure officia pariatur. Nulla
            quis enim est deserunt irure esse veniam. Commodo enim tempor do in
            ullamco sunt ipsum. Nisi veniam minim enim laborum nostrud consequat
            qui duis incididunt non. Pariatur consectetur aliquip laboris ex
            fugiat anim nisi excepteur nisi reprehenderit anim adipisicing id.
            Exercitation eiusmod magna Lorem quis minim esse.
          </p>
        </div>
        <div>
          <h2>Tab 5 content</h2>
          <h3>
            Velit nulla ullamco cillum labore aliquip velit pariatur
            consectetur.
          </h3>
          <p>
            Elit do qui excepteur reprehenderit ex irure officia pariatur. Nulla
            quis enim est deserunt irure esse veniam. Commodo enim tempor do in
            ullamco sunt ipsum. Nisi veniam minim enim laborum nostrud consequat
            qui duis incididunt non. Pariatur consectetur aliquip laboris ex
            fugiat anim nisi excepteur nisi reprehenderit anim adipisicing id.
            Exercitation eiusmod magna Lorem quis minim esse.
          </p>
        </div>
      </TabSwipeableContent>
    </Wrapper>
  );
};

export const Centered = Template.bind({});
export const FullWidth = Template.bind({});
export const Themed = Template.bind({});
export const ThemeWithBorderRadius = Template.bind({});
export const Virtualised = Template.bind({});

Centered.args = {
  tabCount: 9,
  variant: 'center',
  value: 0
};

FullWidth.args = {
  tabCount: 9,
  variant: 'fullWidth',
  value: 0
};

Virtualised.args = {
  tabCount: 1000,
  variant: 'fullWidth',
  value: 0
};

Themed.args = {
  tabCount: 9,
  value: 0,
  theme: {
    tabTextColor: 'black',
    tabSelectedTextColor: 'black',
    tabFocusHoverColor: 'black',
    tabSelectedBgColor: 'white',
    tabIndicatorColor: 'black',
    tabFocusHoverBgColor: 'rgb(0 0 0 / 1%)'
  }
};

ThemeWithBorderRadius.args = {
  tabCount: 9,
  value: 0,
  theme: {
    tabTextColor: '#00b8a9',
    tabSelectedTextColor: 'white',
    tabSelectedBgColor: '#00ccbc',
    tabFocusHoverBgColor: 'rgb(0 204 188 / 14%)',
    tabFocusHoverColor: '#00b8a9',
    tabBorderRadius: '16px',
    tabGap: '0.5rem'
  }
};

export const Swipeable = SwipeableTemplate.bind({});
