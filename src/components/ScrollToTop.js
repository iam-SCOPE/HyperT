import React, { useEffect, useRef } from "react";

export default function ScrollToTop(){
    const firstDivRef = useRef(null);

    //Scroll to the top whenever a compnent mount
    function scroll(){
        if (firstDivRef.current) {
            firstDivRef.current.scrollIntoView();
        }
    }

    useEffect(() =>{scroll()}, [])

    return(
        <div ref={firstDivRef}></div>
    )
}