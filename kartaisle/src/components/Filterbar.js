import React from 'react'
import Arrowdown from "../resources/down-arrow-svgrepo-com.svg";
import Searchicon from "../resources/search-svgrepo-com.svg";
import Scrollicon from "../resources/scroll-svgrepo-com.svg";

import "../styles/filterbar.css";

export default function Filterbar() {
  return (
    <div id="filter-bar">

        <div id="filter-by-status">
            <div>Status</div>
            <div><img class=" arrowdownsvg"  src = {Arrowdown}></img></div>
            
        </div>
        <div id="filter-by-category">
            
            <div>Category Tag</div>
            <div><img class=" arrowdownsvg"  src = {Arrowdown}></img></div>
            
        </div>
        <div id="filter-by-date">
            
            <div>Event Date</div>
            <div><img class=" arrowdownsvg"  src = {Arrowdown}></img></div>
        </div>

        <div id="search-icon">
            <img id="searchiconsvg" src={Searchicon}/>
        </div>
        <div id="sort-by">
            <img id="sorticonsvg" src={Scrollicon}/>
        </div>

    </div>
  )
}
