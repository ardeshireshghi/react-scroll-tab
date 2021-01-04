import React, { useState } from 'react';
import styled from 'styled-components';
import Tab from './Tab';
import Tabs from './Tabs';
import TabScrollableContent from './TabScrollableContent';
import TabPanel from './TabPanel';

const Wrapper = styled.div`
  font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue',
    Helvetica, Arial, 'Lucida Grande', sans-serif;
  margin: 0 auto;
  max-width: 800px;
`;

// This default export determines where your story goes in the story list
export default {
  title: 'Tabs',
  component: Tabs,
  decorators: [
    (Story) => (
      <Wrapper>
        <Story />
      </Wrapper>
    )
  ]
};

const Template = (args) => {
  const [selectedTab, setSelectedTab] = useState(args.value);

  return (
    <>
      <Tabs {...args} value={selectedTab} onChange={setSelectedTab}>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
        <Tab>Tab 4</Tab>
        <Tab>Tab 5</Tab>
        <Tab>Tab 6</Tab>
        <Tab>Tab 7</Tab>
        <Tab>Tab 8</Tab>
        <Tab>Tab 9</Tab>
      </Tabs>
      <TabScrollableContent>
        <TabPanel value={selectedTab}>
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
        </TabPanel>
        <TabPanel value={selectedTab}>
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
        </TabPanel>
        <TabPanel value={selectedTab}>
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
        </TabPanel>
        <TabPanel value={selectedTab}>
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
        </TabPanel>
        <TabPanel value={selectedTab}>
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
        </TabPanel>
        <TabPanel value={selectedTab}>
          <h2>Tab 6 content</h2>
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
        </TabPanel>
        <TabPanel value={selectedTab}>
          <h2>Tab 7 content</h2>
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
        </TabPanel>
        <TabPanel value={selectedTab}>
          <h2>Tab 8 content</h2>
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
        </TabPanel>
        <TabPanel value={selectedTab}>
          <h2>Tab 9 content</h2>
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
        </TabPanel>
      </TabScrollableContent>
    </>
  );
};

export const Centered = Template.bind({});
export const FullWidth = Template.bind({});
export const Themed = Template.bind({});

Centered.args = {
  variant: 'center',
  value: 0
};

FullWidth.args = {
  variant: 'fullWidth',
  value: 1
};

Themed.args = {
  value: 0,
  theme: {
    tabTextColor: 'black',
    tabSelectedTextColor: 'black',
    tabSelectedBgColor: 'white',
    tabIndicatorBgColor: 'black',
    tabFocusHoverBgColor: 'rgb(0 0 0 / 1%)'
  }
};
