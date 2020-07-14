import React,{useContext} from 'react';
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import 'leaflet/dist/leaflet.css';
import './leafletmap.css';
import MyContext from '../../../MyContext';

export default function LeafletMap() {
  const contesto = useContext(MyContext);
  console.log("contestoooooooooooooooo mappaaaaaa ", contesto.citta[0].posizione);
  return (
    //37.623981, 13.922668
    <Map center={[contesto.citta[0].posizione.latitudine, contesto.citta[0].posizione.longitudine]} zoom={8} zoomControl={false} doubleClickZoom={false} 
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
    </Map>
  );
}