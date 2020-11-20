import React from "react";
import {
    Route,
    Link,
    Switch
} from "react-router-dom";
import Home from "./Home"
import NasaMap from "../apps/nasa/Nasa";
// import getCurrentLocation from "../apps/openweather/OpenWeather";
// import ZomatoApp from "../apps/zomato/Zomato"


const Sidebar =()=>{
    return(
        <div className="sidebar">
            <div className="sidebar-list-styling">
                <ul className="sidebar-list list-unstyled">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/nasa">NASA</Link></li>
                    <li><Link to="/weather">Weather</Link></li>
                    <li><Link to="/zomato">Zomato</Link></li>
                </ul>
            </div>
            <div className="sidebar-route">
                <Switch>
                    <Route exact path="/home"><Home /></Route>
                    <Route exact path="/nasa"><NasaMap /></Route>
                    {/* <Route exact path="/weather"><getCurrentLocation /></Route> */}
                    {/* <Route exact path="/zomato"><ZomatoApp/></Route> */}
                </Switch>
            </div>
        </div>
    );
};
export default Sidebar;