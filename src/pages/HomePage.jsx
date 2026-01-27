import HomeHeader from "../components/HomeHeader";
import MapComponent from "../components/MapComponent";
import SearchBar from "../components/SearchBar";

function HomePage() {
  return (
    <>
      <HomeHeader />
      <SearchBar />
      <h1>Ubicaion en el mapa</h1>
      <MapComponent />
    </>
  );
}
export default HomePage;
