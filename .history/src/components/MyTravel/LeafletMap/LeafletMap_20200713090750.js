import React,{useContext} from 'react';
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import 'leaflet/dist/leaflet.css';
import './leafletmap.css';
import MyContext from '../../MyContext';

export default function LeafletMap() {
  contesto = useContext(MyContext);
  return (
    <Map center={[41.881846, 12.514092]} zoom={30} zoomControl={false} doubleClickZoom={false} 
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