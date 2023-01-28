import Topbar from "../../components/topbar";
import Navbar from "../../components/navbar";
import useAuth from "../../hooks/useAuth";
import ThreadItem from "../../components/thread/threadItem";

export default () => {
  if (!useAuth()) return null;
  return (
    <>
      <Topbar />
      <Navbar />
      <div className="flex w-[calc(100%-62px)] ml-auto  mt-[62px] items-center flex-col justify-center">
        <ThreadItem />
      </div>
    </>
  );
};
