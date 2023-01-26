import Topbar from "../../components/topbar";
import Navbar from "../../components/navbar";
import useAuth from "../../hooks/useAuth";

export default () => {
  const isLoggedIn = useAuth();
  if (!isLoggedIn) return null;
  return (
    <>
      <Topbar />
      <Navbar />
    </>
  );
};
