import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  const center = [4.814, -75.694];

  return (
    <MapContainer
      center={center}
      zoom={13}
      scrollWheelZoom={false}
      className="mapComponent"
      dragging={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        maxZoom={19}
        subdomains={["a", "b", "c"]}
      />

      <Marker position={center}>
        <Popup>A cute Message :D</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
