import React, { useEffect } from "react";

function About(){

    useEffect(() => {
        console.log("about ")
    },[]);

    return (
        <div className="About">
            <h1>About</h1>
            <p>This is the CuotaList app v1.0.0. It is a
                React crash course</p>
        </div>
    )
}

export default About;