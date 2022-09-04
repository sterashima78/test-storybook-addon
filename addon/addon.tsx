import React from 'react';
import { addons, types } from '@storybook/addons';

import { AddonPanel, SyntaxHighlighter, TabWrapper, Icons, IconButton } from '@storybook/components';
import { useParameter, useStorybookApi, useGlobals } from '@storybook/api';

const ADDON_ID = 'myaddon';
const PANEL_ID = `${ADDON_ID}/panel`;
const TAB_ID = `${ADDON_ID}/tab`;
const TOOL_ID = `${ADDON_ID}/tool`;
const PARAM_KEY = 'myAddon';

const MyPanel = () => {
  const value = useParameter<{ data: string } | null>(PARAM_KEY, null);
  const item = value ? value.data : 'No story parameter defined';
  return <div>{item}</div>;
};

addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'My Addon',
    render: ({ active, key }) => (
      <AddonPanel active={!!active} key={key}>
        <MyPanel />
      </AddonPanel>
    ),
  });
  addons.add(TAB_ID, {
    type: types.TAB,
    title: 'My Addon',
    route: ({ storyId }) => `/myaddon/${storyId}`,
    match: ({ viewMode }) => {
      console.log(viewMode, "addon")
      return viewMode === "myaddon"
    },
    render: ({ active, key }) => {
      const api = useStorybookApi()
      return (
        <TabWrapper active={!!active} key={key}>
          <SyntaxHighlighter language='json'>{JSON.stringify(api.getCurrentStoryData(), undefined, 2)}</SyntaxHighlighter>
        </TabWrapper>
      )
    }
  });

  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: "My addon",
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: ()=> {
      const [{ activeMyAddon }, updateGlobals] = useGlobals();
      const toggle = () => updateGlobals({ 
        activeMyAddon: !activeMyAddon
      })
      return <IconButton
        key={TOOL_ID}
        active={activeMyAddon}
        title="Enable my addon"
        onClick={toggle}
      >
        <Icons icon="star" />
      </IconButton>
    }
    
  });
});