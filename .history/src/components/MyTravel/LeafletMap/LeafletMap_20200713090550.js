import React,{useContext} from 'react';
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import 'leaflet/dist/leaflet.css';
import './leafletmap.css';
import MyContext from '../../MyContext';

export default function LeafletMap() {
  const contesto = useContext(MyContext);
  return (
    <Map center={[contesto.citta[0].latitudine, contesto.citta[0].longitudine]} zoom={15} zoomControl={false} doubleClickZoom={false} 
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