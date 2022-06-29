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
const DefaultCenter: [number, number] = [64.888996, 12.8186054];
const DefaultZoom = 4;

// Default map layers from Kartverket
const DefaultMapLayers = [
  {
    url: 'https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=europa_forenklet&zoom={z}&x={x}&y={y}',
    attribution: 'Data © <a href="http://www.kartverket.no/">Kartverket</a>',
  },
  {
    url: 'https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=norgeskart_bakgrunn2&zoom={z}&x={x}&y={y}',
    attribution: 'Data © <a href="http://www.kartverket.no/">Kartverket</a>',
  },
];

export interface MapProps {
  readOnly: boolean;
  layers?: {
    url: string;
    attribution?: string;
    subdomains?: string[];
  }[];
  center?: [number, number];
  zoom?: number;
  marker?: [number, number];
  footerText?: string;
  mapClicked?: (lat: number, lon: number) => void;
}

export const Map = ({
  readOnly,
  layers,
  center,
  zoom,
  marker,
  footerText,
  mapClicked,
}: MapProps) => {
  layers = layers ? layers : DefaultMapLayers;
  center = center ? center : DefaultCenter;
  zoom = zoom ? zoom : DefaultZoom;

  return (
    <>
      <MapContainer
        className={classes.map}
        center={center}
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
          handleClick={mapClicked}
        />
      </MapContainer>
      {footerText && <div className={classes.footer}>{footerText}</div>}
    </>
  );
};

interface LocationMarkerProps {
  location?: [number, number];
  handleClick?: (lat: number, lon: number) => void;
}
function LocationMarker({ location, handleClick }: LocationMarkerProps) {
  useMapEvents({
    click(me) {
      if (handleClick) {
        handleClick(me.latlng.lat, me.latlng.lng);
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
      position={location}
      icon={markerIcon}
    />
  ) : null;
}
