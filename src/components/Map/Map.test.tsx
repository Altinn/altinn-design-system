import React from 'react';
import {
  act,
  fireEvent,
  render as renderRtl,
  screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { mockMediaQuery } from '@test/testUtils';

import type { MapProps, Location } from './Map';
import { Map } from './Map';

const mediaQueryBreakPoint = 500;
const { setScreenWidth } = mockMediaQuery(mediaQueryBreakPoint);

const user = userEvent.setup();

window.scrollTo = jest.fn();

describe('Map', () => {
  beforeEach(() => {
    setScreenWidth(mediaQueryBreakPoint + 100);
  });

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
    it('should call mapClicked with correct coordinates when map is clicked', async () => {
      const handleMapClicked = jest.fn();
      render({
        onClick: handleMapClicked,
      });

      clickMap();

      expect(handleMapClicked).toHaveBeenCalledWith({
        latitude: 59.265880628258095,
        longitude: 10.371093750000002,
      } as Location);
    });

    it('should get different coordinates when map is clicked at a different location', () => {
      const mapClicked = jest.fn();
      render({
        onClick: mapClicked,
      });

      clickMap(50, 50);

      expect(mapClicked).toHaveBeenCalledWith({
        latitude: 56.9449741808516,
        longitude: 14.765625000000002,
      } as Location);
    });

    it('should call mapClicked two times when map is clicked twice', async () => {
      const mapClicked = jest.fn();
      render({
        onClick: mapClicked,
      });

      // First click
      clickMap();
      expect(mapClicked).toHaveBeenCalledWith({
        latitude: 59.265880628258095,
        longitude: 10.371093750000002,
      } as Location);

      // Zoom out
      const zoomInButton = screen.getByRole('button', { name: 'Zoom out' });
      await act(async () => {
        await user.click(zoomInButton);
      });

      // Second click at different location
      clickMap(50, 50);
      expect(mapClicked).toHaveBeenCalledWith({
        latitude: 54.470037612805754,
        longitude: 19.16015625,
      } as Location);
    });
  });
});

function locationMarker() {
  return screen.queryByRole('button', { name: 'Marker' });
}

function clickMap(clientX = 0, clientY = 0) {
  const firstMapLayer = screen.getAllByRole('presentation')[0];
  fireEvent.click(firstMapLayer, { clientX: clientX, clientY: clientY });
}

const render = (props: Partial<MapProps> = {}) => {
  const allProps = {
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
    onClick: () => {
      return;
    },
    ...props,
  };

  return renderRtl(<Map {...allProps} />);
};
