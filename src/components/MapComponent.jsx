import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker, Popup } from "react-leaflet";

const MapComponent = () => {
  const position = [4.814, -75.694];
  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      className="mapComponent"
      dragging={true}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={position}>
        <Popup>A cute Message :D</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
