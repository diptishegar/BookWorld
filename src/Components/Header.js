import React from "react";
import Navigation from "./Navigation";

function Header(){
    return(
        <header style={{ margin:"0rem 0rem 0rem -.36rem" }} className="mb-3 ml-0 border-b bg-white rounded-lg shadow w-full p-3 flex justify-between items-center">
            <span className="pb-3 pt-3 text-gray-900 font-mono font-medium text-3xl px-3">
            BookSafari
            </span>
           <Navigation />
        </header>
    )
}
 export default Header;

 //Api key : AIzaSyCX-qfJpm_QQZLTJWDWOYD_dTyVMVmO0Ao
