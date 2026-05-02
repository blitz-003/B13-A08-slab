import Banner from "@/components/Banner";
import Featured from "@/components/AnnouncementBar";
import TopGenerations from "@/components/TopGenerations";
import Image from "next/image";
import AnnouncementBar from "@/components/AnnouncementBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <div>
      <Banner />
      <AnnouncementBar />

      <TopGenerations />
      <ToastContainer />
    </div>
  );
}
