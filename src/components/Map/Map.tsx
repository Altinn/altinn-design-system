import {
  AttributionControl,
  MapContainer,
  Marker,
  TileLayer,
  useMapEvents,
} from 'react-leaflet';
import React from 'react';
import { icon } from 'leaflet';

import classes from './Map.module.css';

import 'leaflet/dist/leaflet.css';

// Default is center of Norway
const DefaultCenterLocation: Location = {
  latitude: 64.888996,
  longitude: 12.8186054,
};
const DefaultZoom = 4;

// Default map layers from Kartverket
const DefaultMapLayers: MapLayer[] = [
  {
    url: 'https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=europa_forenklet&zoom={z}&x={x}&y={y}',
    attribution: 'Data © <a href="https://www.kartverket.no/">Kartverket</a>',
  },
  {
    url: 'https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=norgeskart_bakgrunn2&zoom={z}&x={x}&y={y}',
    attribution: 'Data © <a href="https://www.kartverket.no/">Kartverket</a>',
  },
];

export interface Location {
  latitude: number;
  longitude: number;
}

export interface MapLayer {
  url: string;
  attribution?: string;
  subdomains?: string[];
}

/**
 * It is expected you pass in the default icons when using the Map component, unless you want to provide your own icon.
 *
 * Example:
 *   import Marker from 'leaflet/dist/images/marker-icon.png';
 *   import RetinaMarker from 'leaflet/dist/images/marker-icon-2x.png';
 *   import MarkerShadow from 'leaflet/dist/images/marker-shadow.png';
 *
 *   <Map ... markerIcon={{
 *     iconUrl: Marker,
 *     iconRetinaUrl: RetinaMarker,
 *     shadowUrl: MarkerShadow,
 *     iconSize: [25, 41],
 *     iconAnchor: [12, 41],
 *   }} />
 *
 * This example requires your build system to support image loading (but you can provide the URLs for static icon files
 * if your build system doesn't support image loading).
 */
export interface MapIconOptions {
  iconUrl: string;
  iconRetinaUrl?: string | undefined;
  iconSize?: [number, number] | undefined;
  iconAnchor?: [number, number] | undefined;
  shadowUrl?: string | undefined;
  shadowRetinaUrl?: string | undefined;
  shadowSize?: [number, number] | undefined;
  shadowAnchor?: [number, number] | undefined;
}

export interface MapProps {
  readOnly?: boolean;
  layers?: MapLayer[];
  centerLocation?: Location;
  zoom?: number;
  markerLocation?: Location;
  onClick?: (location: Location) => void;
  markerIcon: MapIconOptions;
}

export const Map = ({
  readOnly = false,
  layers = DefaultMapLayers,
  centerLocation = DefaultCenterLocation,
  zoom = DefaultZoom,
  markerLocation,
  markerIcon,
  onClick,
}: MapProps) => {
  return (
    <MapContainer
      className={classes.map}
      center={locationToTuple(centerLocation)}
      zoom={zoom}
      zoomControl={!readOnly}
      dragging={!readOnly}
      touchZoom={!readOnly}
      doubleClickZoom={!readOnly}
      scrollWheelZoom={!readOnly}
      attributionControl={false}
    >
      {layers.map((layer, i) => (
        <TileLayer
          key={i}
          url={layer.url}
          attribution={layer.attribution}
          subdomains={layer.subdomains ? layer.subdomains : []}
          opacity={readOnly ? 0.5 : 1.0}
        />
      ))}
      <AttributionControl prefix={false} />
      {markerLocation ? (
        <Marker
          position={locationToTuple(markerLocation)}
          icon={icon(markerIcon)}
        />
      ) : null}
      <MapClickHandler
        readOnly={readOnly}
        onClick={onClick}
      />
    </MapContainer>
  );
};

function locationToTuple(location: Location): [number, number] {
  return [location.latitude, location.longitude];
}

type MapClickHandlerProps = Pick<MapProps, 'readOnly' | 'onClick'>;
const MapClickHandler = ({ onClick, readOnly }: MapClickHandlerProps) => {
  useMapEvents({
    click: (map) => {
      if (onClick && !readOnly) {
        const wrappedLatLng = map.latlng.wrap();
        onClick({
          latitude: wrappedLatLng.lat,
          longitude: wrappedLatLng.lng,
        });
      }
    },
  });

  return null;
};
