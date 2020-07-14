import React, { useContext } from 'react';
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import 'leaflet/dist/leaflet.css';
import './leafletmap.css';
import MyContext from '../../../MyContext';

export default function LeafletMap() {
  const contesto = useContext(MyContext);
  console.log("contestoooooooooooooooo mappaaaaaa ", contesto.citta[0].posizione);
  const position = [37.483616, 14.105787];
  return (
    //contesto.citta[0].posizione.latitudine, contesto.citta[0].posizione.longitudine
    //37.483616, 14.105787 Caltanissetta - centro per la Sicilia
    //array che contiene per ogni regione il centro geografico

    <Map center={[37.483616, 14.105787]} zoom={8} zoomControl={false} doubleClickZoom={false}
      closePopupOnClick={false}
      dragging={false}
      zoomSnap={false}
      zoomDelta={false}
      touchZoom={false}
      scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[37.483616, 14.105787]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </Map>
  );
}