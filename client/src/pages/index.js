import Navbar from "../components/navbar";
import Topbar from "../components/topbar";
import Feed from "../components/feed";
import useAuth from "../hooks/useAuth";
import { dummyData } from "../static/util";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState(dummyData);
  const {
    query: { activity },
  } = useRouter();

  useEffect(() => {
    if (activity == "feed") {
      setData(dummyData);
    }
    if (activity == "following") {
      setData(data.slice(0, 3));
    }
  }, [activity]);

  if (!useAuth()) return null;

  return (
    <>
      <Topbar />
      <Navbar />
      <div className="flex w-[calc(100%-62px)] ml-auto px-2.5 md:px-5  pb-12 mt-[62px] pt-2.5 md:pt-5">
        <Feed passedPosts={data} />
      </div>
    </>
  );
}
