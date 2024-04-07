import { Link } from "react-router-dom";
import React from "react";

const Header =() =>{
    return(
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>home</Link>
                    </li>
                    <li>
                        <Link to='/info'>info</Link>
                    </li>
             
                    <li>
                        <Link to='/map'>map</Link>
                    </li>
                    <li>
                        <Link to='/users'>users</Link>
                    </li>
                  
                </ul>
            </nav>

        </header>

    );
}
export default Header;

