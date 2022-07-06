import React, { useState } from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';

import { StoryPage } from '@sb/StoryPage';

import type { Location } from './Map';
import { Map } from './Map';

const figmaLink = '';

export default {
  title: `Components/Map`,
  component: Map,
  parameters: {
    layout: 'fullscreen',
    design: config([
      {
        type: 'figma',
        url: figmaLink,
      },
      {
        type: 'link',
        url: figmaLink,
      },
    ]),
    docs: {
      page: () => <StoryPage description={`Map component`} />,
    },
  },
  args: {
    //
  },
} as ComponentMeta<typeof Map>;

const Template: ComponentStory<typeof Map> = (args) => {
  const [location, setLocation] = useState<Location | undefined>(undefined);

  const mapClicked = (location: Location) => {
    setLocation(location);
    console.log(`Map clicked at [${location.latitude},${location.longitude}]`);
  };

  return (
    <Map
      {...args}
      marker={location}
      onClick={mapClicked}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    description: {
      story:
        'This is the default map you get if you do not specify any map layers. Kartverket with layers "europa_forenklet" and "norgeskart_bakgrunn2"',
    },
  },
};

export const OpenStreetMap = Template.bind({});
OpenStreetMap.args = {
  layers: [
    {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      subdomains: ['a', 'b', 'c'],
      attribution:
        '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
    },
  ],
};
OpenStreetMap.parameters = {
  docs: {
    description: {
      story: 'OpenStreetMap',
    },
  },
};

export const KartverketTerrain = Template.bind({});
KartverketTerrain.args = {
  layers: [
    {
      url: 'https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=terreng_norgeskart&zoom={z}&x={x}&y={y}',
      attribution: 'Data © <a href="http://www.kartverket.no/">Kartverket</a>',
    },
  ],
};
KartverketTerrain.parameters = {
  docs: {
    description: {
      story: 'Kartverket terrain map',
    },
  },
};

export const KartverketSea = Template.bind({});
KartverketSea.args = {
  layers: [
    {
      url: 'https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=sjokartraster&zoom={z}&x={x}&y={y}',
      attribution: 'Data © <a href="http://www.kartverket.no/">Kartverket</a>',
    },
  ],
};
KartverketSea.parameters = {
  docs: {
    description: {
      story: 'Kartverket sea map',
    },
  },
};

export const GoogleMaps = Template.bind({});
GoogleMaps.args = {
  layers: [
    {
      url: 'http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      attribution: '© Google Maps',
    },
  ],
};
GoogleMaps.parameters = {
  docs: {
    description: {
      story: 'Google Maps',
    },
  },
};
