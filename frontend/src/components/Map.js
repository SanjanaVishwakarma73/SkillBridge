import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 27.4924, // Mathura (you can change later)
  lng: 77.6737,
};

function Map() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyADOjBOq8uri9r8R9MVgZ6ho0i312-ycKE">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;