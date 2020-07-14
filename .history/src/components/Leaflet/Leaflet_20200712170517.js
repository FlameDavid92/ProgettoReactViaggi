import React,{useState} from 'react';
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import 'leaflet/dist/leaflet.css';
import './leaflet.css';

export default function LeafletMap() {
  const [resized,setResized] = useState(false);
  window.addEventListener('resize', () => {
    console.log("resized");
    setResized(!resized)});
  return (
    <Map center={[41.881846, 12.514092]} zoom={30} zoomControl={false} doubleClickZoom={false} 
    closePopupOnClick={false} 
    dragging={false} 
    zoomSnap={false} 
    zoomDelta={false} 
    trackResize={false}
    touchZoom={false}
    scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </Map>
  );
}