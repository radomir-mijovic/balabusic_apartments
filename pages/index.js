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
        <Head>
  <title>Apartments Balabusic - Budva</title>
  <meta
    name="description"
    content="Welcome to Balabusic apartments in Budva, where comfort is everything. Beautiful rooms, easy booking & reservation."
  />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Apartments Balabusic - Budva" />
  <meta
    property="og:description"
    content="Welcome to Balabusic apartments in Budva, where comfort is everything. Beautiful rooms, easy booking & reservation."
  />
  <meta property="og:url" content="https://balabusic.com" />
  <meta property="og:image" content="https://balabusic.com/og-image.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:type" content="image/jpeg" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Apartments Balabusic - Budva" />
  <meta
    name="twitter:description"
    content="Welcome to Balabusic apartments in Budva, where comfort is everything."
  />
  <meta name="twitter:image" content="https://balabusic.com/og-image.jpg" />
</Head>
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
