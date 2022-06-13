import Head from "next/head";
import React from "react";
import Header from "../components/Header/Header";
import UrbanArea from "../components/UrbanArea/UrbanArea";
import Apartments from "../components/Apartments/Apartments";
import HouseRules from "../components/HouseRules/HouseRules";
import IconsSection from "../components/IconsSection/IconsSection";
import Footer from "../components/Footer/Footer";
import StayLonger from "../components/StayLonger/StayLonger";
import setupAnalyticsService from '../lib/my-analytics-service'

// NEXT_PUBLIC_ANALYTICS_ID can be used here as it's prefixed by NEXT_PUBLIC_
setupAnalyticsService(process.env.open_weather_key)

export default function Home() {
    return (
        <>
            <Head>
                <title>Apartments Balabusic - Budva</title>
            </Head>
            <Header/>
            <UrbanArea/>
            <Apartments/>
            <IconsSection/>
            <StayLonger/>
            <HouseRules/>
            <Footer/>
        </>
    )
}
