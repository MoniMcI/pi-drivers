import React from "react"
import { Link } from 'react-router-dom';
import SearchBar from "../searchbar/SearchBar";
import style from './Nav.module.css';
import Navlink from "../navlink/NavLink";
//import logoimg from "../../assets/logo4.png"


class Nav extends React.Component{
    constructor(props){
        super()
    }

    render(){
        return <nav className={style.nav}>
{/*             <div className={style.logoContainer}>
                <img src={logoimg} alt="Logo" className={style.logo} />
            </div> */}
            <div className={style.navLinks}>
                <Navlink to={'/home'}>
                    <span className={style.navLinkText}>Home</span>
                </Navlink>
                        
                <SearchBar onSearch={this.props.onSearch}/>
            </div>
        </nav>
    }

}

export default Nav;