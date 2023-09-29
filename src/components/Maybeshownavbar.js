import React, { createContext } from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


export const MaybeShowNavBar = ({ children }) => {
    

    const location = useLocation();

    const [showNavBar, setShowNavBar] = useState(false)

    useEffect(() => {
        if (location.pathname == '/mati-kompleks') {
            setShowNavBar(false)
        } 
        else if(location.pathname == '/lakrishte') {
            setShowNavBar(false)
        }
        else if(location.pathname == '/Kontaktoni') {
            setShowNavBar(false)
        }
        else if(location.pathname == '/car') {
            setShowNavBar(false)
        }
        else {
            setShowNavBar(true)
        }
    }, [location]);


    return (

            <div> {showNavBar && children} </div>
    )
}

export default MaybeShowNavBar