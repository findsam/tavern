import Topbar from "../../components/topbar";
import Navbar from "../../components/navbar";
import useAuth from "../../hooks/useAuth";
import Item from "../../components/thread/item";
import Layout from "../../components/layout/navigation";

export default function Slug() {
  if (!useAuth()) return null;

  return (
    <>
      <div className="flex w-[calc(100%-62px)] ml-auto px-2.5 md:px-5 pb-12 mt-[62px] pt-6 md:pt-12 relative items-center justify-center">
        <Item />
      </div>
    </>
  );
}

Slug.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
