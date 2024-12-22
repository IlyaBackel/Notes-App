import React from "react";
import "./Search.css"

export default class Search extends React.Component{
    render(){
        const { search } = this.props;

        return(
            <input className="search-input" type="text" placeholder="Search" value={search} onChange={this.props.setSearch} />
        )
    }

}