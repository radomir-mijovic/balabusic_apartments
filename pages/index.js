import Head from "next/head";
import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import UrbanArea from "../components/UrbanArea/UrbanArea";
import Apartments from "../components/Apartments/Apartments";
import HouseRules from "../components/HouseRules/HouseRules";
import IconsSection from "../components/IconsSection/IconsSection";
import Footer from "../components/Footer/Footer";
import StayLonger from "../components/StayLonger/StayLonger";
import ImageModal from "../components/ImageModal/ImageModal";
import { useModalContext } from "../context";

export default function Home() {
  const { isModal } = useModalContext();

  return (
    <>
      <Head>
        <title>Apartments Balabusic - Budva</title>
      </Head>
      {isModal && <ImageModal />}
      <Header />
      <UrbanArea />
      <Apartments />
      <IconsSection />
      <StayLonger />
      <HouseRules />
      <Footer />
    </>
  );
}
