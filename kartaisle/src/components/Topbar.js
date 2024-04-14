import React from 'react';
import "../styles/topbar.css";

export default function Topbar() {
  return (
    <div id="second-topbar">
        <div id="collections-heading-topbar">Collections</div>
        <div id="new-collection-button-container">
            <a href="https://www.youtube.com">
                <button id="new-collection-button">+ New Collection</button>
            </a>
        </div>
    </div>
  )
}
