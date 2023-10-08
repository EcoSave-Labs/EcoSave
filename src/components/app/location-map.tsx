"use client";

import { Icon, LatLng, Point } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";

interface LocationMapProps {
  onSetLocation: (location: LatLng) => void;
}

function LocationMarker({ onSetLocation }: LocationMapProps) {
  const [position, setPosition] = useState<LatLng | null>(null);
  const map = useMapEvents({
    click(e) {
      map.locate();

      if (position !== undefined) {
        setPosition(e.latlng);
        onSetLocation(e.latlng);
        console.log(e.latlng);
      }
    },
    locationfound(e) {
      setPosition(e.latlng);
      onSetLocation(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker
      position={position}
      icon={
        new Icon({
          iconUrl: "/map-marker.png",
          iconRetinaUrl: "/map-marker.png",
          iconSize: new Point(50, 64),
          iconAnchor: [25, 64],
          className: "bg-transparent -mt-12",
        })
      }
    >
      <Popup>You are here</Popup>
    </Marker>
  );
}

export default function LocationMap({ onSetLocation }: LocationMapProps) {
  return (
    <MapContainer
      center={{ lat: 51.505, lng: -0.09 }}
      zoom={13}
      className="w-full aspect-video overflow-hidden rounded-md"
    >
      <TileLayer
        attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
      />
      <TileLayer
        attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/stamen_toner_labels/{z}/{x}/{y}{r}.png"
      />
      <LocationMarker onSetLocation={onSetLocation} />
    </MapContainer>
  );
}
