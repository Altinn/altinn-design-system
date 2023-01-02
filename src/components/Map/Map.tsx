import {
  AttributionControl,
  MapContainer,
  Marker,
  TileLayer,
  useMapEvents,
} from 'react-leaflet';
import React from 'react';

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

export interface MapProps {
  readOnly?: boolean;
  layers?: MapLayer[];
  centerLocation?: Location;
  zoom?: number;
  markerLocation?: Location;
  onClick?: (location: Location) => void;
}

export const Map = ({
  readOnly = false,
  layers = DefaultMapLayers,
  centerLocation = DefaultCenterLocation,
  zoom = DefaultZoom,
  markerLocation,
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
      <LocationMarker markerLocation={markerLocation} />
      <MapClickHandler
        readOnly={readOnly}
        onClick={onClick}
      />
    </MapContainer>
  );
};

type LocationMarkerProps = Pick<MapProps, 'markerLocation'>;
function LocationMarker({ markerLocation }: LocationMarkerProps) {
  return markerLocation ? (
    <Marker position={locationToTuple(markerLocation)} />
  ) : null;
}

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
