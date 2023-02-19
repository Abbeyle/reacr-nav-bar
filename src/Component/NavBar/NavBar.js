import React,{Component} from "react";
import { MenuItems } from "./MenuItems";
import { Button } from "../button";
import './NavBar.css'; 

class Navbar extends Component {
    state = {clicked:false}
       handleClick =() =>{
        this.setState({clicked: !this.state.clicked})
       }

    render (){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">React<i className="uil uil-react"></i></h1>
            <div className="menu-icon" onClick={this.handleClick}>
                <i className={this.state.clicked ? 'uil uil-times':'uil uil-bars'}></i>
            
            </div>

            <ul className={this.state.clicked ? 'nav-menu active':'nav-menu'}>
                 {MenuItems.map((item, index) =>{
                    return(
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                 {item.title}
                            </a>
                       </li>
                   )
                })}
            </ul>
            <Button>sign up</Button>
            </nav>
        )
    }
}

export default Navbar;
