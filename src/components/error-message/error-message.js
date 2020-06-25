import React from "react";
import "./error-message.css";
import icon from "./error-image.jpg";



const ErrorMessage = () => {
    return (
        <div className="ErrorMessage rounded d-flex flex-column bgColor align-items-center my-4 p-3">
            <img src={icon} alt="error icon"></img>
            <h4 className="mt-2 text-danger">It's Error!</h4>
            <span className="text-danger">We have already sent droids to fix it</span>
        </div>
    );
};

export default ErrorMessage;