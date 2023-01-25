import Topbar from "../../components/topbar";
import Navbar from "../../components/navbar";
import useAuth from "../../hooks/useAuth";

export default () => {
  if (!useAuth()) return null;
  return (
    <>
      <Topbar />
      <Navbar />
    </>
  );
};
