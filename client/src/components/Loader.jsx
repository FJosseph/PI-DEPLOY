import React from "react";
import loader from './loader.css'

const Loader = ()=>{
    return (
        <div id="loader">
           <div className="loader"></div>
           <div className="spinner">
                <span>L</span>
                <span>O</span>
                <span>A</span>
                <span>D</span>
                <span>I</span>
                <span>N</span>
                <span>G</span>
            </div>
        </div>
    )
}
export default Loader