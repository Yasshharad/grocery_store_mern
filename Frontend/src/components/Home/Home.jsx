import React from "react";
import './Home.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";

export default function Home() {
    return (
        <div className="home">
            <Header />
            <Banner />
            <Categories />
            <Footer />
        </div>
    );
}