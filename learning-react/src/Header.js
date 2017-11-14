import React from 'react';
import Nav, {Nav1} from "./Nav";

class Header extends React.Component{
    render(){
        return (
            <header>
                <h1>Super Chocolate Store</h1>
                <Nav/>
            </header>
        )
    }
}

export default Header;