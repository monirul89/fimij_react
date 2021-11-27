import { Component } from "react";
import Header  from "../header";
import Hero from "../partials/hero";
class Home extends Component{
    render(){
        return <div className="home-page">
            <Header />
            <Hero />
        </div>
    }
}

export default Home;