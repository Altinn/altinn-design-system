import React from 'react';
import { render as renderRtl, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import type { MapProps, Location } from './Map';
import { Map } from './Map';

const user = userEvent.setup();

window.scrollTo = jest.fn();

describe('Map', () => {
  describe('Marker', () => {
    it('should show marker when marker is set', () => {
      render({
        markerLocation: { latitude: 59.2641592, longitude: 10.4036248 },
      });
      expect(locationMarker()).toBeInTheDocument();
    });

    it('should not show marker when marker is not set', () => {
      render({ markerLocation: undefined });
      expect(locationMarker()).not.toBeInTheDocument();
    });
  });

  describe('Click map', () => {
    it('should call onClick with correct coordinates when map is clicked', async () => {
      const handleMapClicked = jest.fn();
      render({
        onClick: handleMapClicked,
      });

      await clickMap();

      expect(handleMapClicked).toHaveBeenCalledWith({
        latitude: 59.265880628258095,
        longitude: 10.37109375,
      } as Location);
    });

    it('should call onClick with longitude between 180 and -180 even when map is wrapped', async () => {
      const handleMapClicked = jest.fn();
      render({
        onClick: handleMapClicked,
      });

      // Click so that the world is wrapped
      await clickMap(2500, 0);

      expect(handleMapClicked).toHaveBeenCalledWith({
        latitude: 59.265880628258095,
        longitude: -129.90234375,
      } as Location);
    });

    it('should not call onClick when readOnly is true and map is clicked', async () => {
      const handleMapClicked = jest.fn();
      render({
        onClick: handleMapClicked,
        readOnly: true,
      });

      await clickMap();

      expect(handleMapClicked).not.toHaveBeenCalled();
    });

    it('should get different coordinates when map is clicked at different location', async () => {
      const mapClicked = jest.fn();
      render({
        onClick: mapClicked,
      });

      // First click
      await clickMap();
      expect(mapClicked).toBeCalledTimes(1);
      const firstLocation = mapClicked.mock.calls[0][0] as Location;

      // Second click at different location
      await clickMap(50, 50);
      expect(mapClicked).toBeCalledTimes(2);
      const secondLocation = mapClicked.mock.calls[1][0] as Location;

      expect(firstLocation.latitude).not.toBe(secondLocation.latitude);
      expect(firstLocation.longitude).not.toBe(secondLocation.longitude);
    });
  });

  it('should display attribution link', () => {
    render({
      layers: [
        {
          url: 'dummy',
          attribution: '<a href="https://dummylink.invalid">Dummy link</a>',
        },
      ],
    });

    expect(getLink('Dummy link')).toBeInTheDocument();
  });

  it('should show map with zoom buttons when readonly is false', () => {
    render({
      readOnly: false,
    });

    expect(getButton('Zoom in')).toBeInTheDocument();
    expect(getButton('Zoom out')).toBeInTheDocument();
  });

  it('should show map without zoom buttons when readonly is true', () => {
    render({
      readOnly: true,
    });

    expect(getButton('Zoom in')).not.toBeInTheDocument();
    expect(getButton('Zoom out')).not.toBeInTheDocument();
  });
});

function locationMarker() {
  return screen.queryByRole('button', { name: 'Marker' });
}

function getButton(name: string) {
  return screen.queryByRole('button', { name: name });
}

function getLink(name: string) {
  return screen.queryByRole('link', { name: name });
}

async function clickMap(clientX = 0, clientY = 0) {
  const firstMapLayer = screen.getAllByRole('presentation')[0];
  await user.pointer([
    {
      pointerName: 'mouse',
      target: firstMapLayer,
      coords: {
        clientX,
        clientY,
      },
      keys: '[MouseLeft]',
    },
  ]);
}

const render = (props: Partial<MapProps> = {}) => {
  const allProps: MapProps = {
    readOnly: false,
    layers: undefined,
    centerLocation: {
      latitude: 59.2641592,
      longitude: 10.4036248,
    } as Location,
    zoom: 4,
    markerLocation: {
      latitude: 59.2641592,
      longitude: 10.4036248,
    } as Location,
    markerIcon: {
      iconUrl: 'marker.png',
    },
    onClick: jest.fn(),
    ...props,
  };

  return renderRtl(<Map {...allProps} />);
};
