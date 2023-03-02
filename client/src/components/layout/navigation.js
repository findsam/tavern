import Navbar from "../navbar";
import Topbar from "../topbar";

export default function Layout({ children }) {
  return (
    <>
      <Topbar />
      <Navbar />
      <main>{children}</main>
    </>
  );
}
