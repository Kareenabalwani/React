import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import FetchItems from "./components/FetchItems";
import { useSelector } from "react-redux";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const fetchStatus = useSelector((state) => state.fetchStatus);
  return (
    <>
      <Header></Header>
      <FetchItems></FetchItems>
      {fetchStatus.isFetching ? <LoadingSpinner/>:<Outlet />}
      <Footer></Footer>
    </>
  );
}

export default App;
