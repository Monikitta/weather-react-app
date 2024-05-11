import React from "react";
import "./SearchBar.scss";
import search from "../../../assets/fa_search.svg"

export default function name(params) {
    return (
        <div className="search">
            <input placeholder="Search Location..." type="text"/>
            <img src={search} alt="search" />
        </div>
    )
} 