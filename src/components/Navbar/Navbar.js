import React, {Component} from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css';
import { Link } from "react-router-dom";


class Navbar extends Component {
    state = { clicked: false}

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }
    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Green Buffet<i className="fas fa-utensils"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu acive' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                    <div className="navbar-logo">
                        <Link to="Cart" className="nav-links">
                            Cart
                            <i className="fas fa-shopping-cart"></i>
                        </Link>
                    </div>
                </ul>
            </nav>
        )
    }
}

export default Navbar