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
const DefaultCenter: Location = {
  latitude: 64.888996,
  longitude: 12.8186054,
};
const DefaultZoom = 4;

// Default map layers from Kartverket
const DefaultMapLayers: MapLayer[] = [
  {
    url: 'https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=europa_forenklet&zoom={z}&x={x}&y={y}',
    attribution: 'Data © <a href="http://www.kartverket.no/">Kartverket</a>',
  },
  {
    url: 'https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=norgeskart_bakgrunn2&zoom={z}&x={x}&y={y}',
    attribution: 'Data © <a href="http://www.kartverket.no/">Kartverket</a>',
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
  center?: Location;
  zoom?: number;
  marker?: Location;
  onClick?: (location: Location) => void;
}

export const Map = ({
  readOnly,
  layers,
  center,
  zoom,
  marker,
  onClick,
}: MapProps) => {
  readOnly = readOnly ? readOnly : false;
  layers = layers ? layers : DefaultMapLayers;
  center = center ? center : DefaultCenter;
  zoom = zoom ? zoom : DefaultZoom;

  return (
    <MapContainer
      className={classes.map}
      center={locationToTuple(center)}
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
        />
      ))}
      <AttributionControl prefix={false} />
      <LocationMarker
        location={marker}
        handleClick={onClick}
      />
    </MapContainer>
  );
};

interface LocationMarkerProps {
  location?: Location;
  handleClick?: (location: Location) => void;
}
function LocationMarker({ location, handleClick }: LocationMarkerProps) {
  useMapEvents({
    click(me) {
      if (handleClick) {
        handleClick({
          latitude: me.latlng.lat,
          longitude: me.latlng.lng,
        });
      }
    },
  });

  const markerIcon = icon({
    iconUrl: UrlIcon,
    iconRetinaUrl: RetinaUrlIcon,
    shadowUrl: ShadowUrlIcon,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  return location ? (
    <Marker
      position={locationToTuple(location)}
      icon={markerIcon}
    />
  ) : null;
}

function locationToTuple(location: Location): [number, number] {
  return [location.latitude, location.longitude];
}
