import React from "react";
import "./spinner.css"



const Spinner = () => {
    return (
        <div className="loader d-flex justify-content-center">
            <div className="box-1 box"></div>
            <div className="box-2 box"></div>
            <div className="box-3 box"></div>
            <div className="box-4 box"></div>
            <div className="box-5 box"></div>
        </div>
    );
};

export default Spinner;