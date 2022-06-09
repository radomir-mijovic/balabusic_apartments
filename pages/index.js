import Head from "next/head";
import React from "react";
import Header from "../components/Header/Header";
import UrbanArea from "../components/UrbanArea/UrbanArea";

export default function Home() {
    return (
        <>
            <Head>
                <title>Apartments Balabusic - Budva</title>
            </Head>
            <Header/>
            <UrbanArea/>
        </>
    )
}
