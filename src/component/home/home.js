import { Component } from "react";
import Header  from "../header";
import Hero from "../partials/hero";
import Footer from '../footer';

class Home extends Component{
    render(){
        return <div className="home-page">
            <Header />
            <Hero />
            <Footer />
        </div>
    }
}

export default Home;