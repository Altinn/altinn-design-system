import UrlIcon from 'leaflet/dist/images/marker-icon.png';
import RetinaUrlIcon from 'leaflet/dist/images/marker-icon-2x.png';
import ShadowUrlIcon from 'leaflet/dist/images/marker-shadow.png';
import { icon } from 'leaflet';
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
  const markerIcon = icon({
    iconUrl: UrlIcon,
    iconRetinaUrl: RetinaUrlIcon,
    shadowUrl: ShadowUrlIcon,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  return markerLocation ? (
    <Marker
      position={locationToTuple(markerLocation)}
      icon={markerIcon}
    />
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
        onClick({
          latitude: map.latlng.lat,
          longitude: map.latlng.lng,
        });
      }
    },
  });

  return null;
};
