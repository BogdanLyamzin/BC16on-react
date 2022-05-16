import Button from "../Button";

import "./navbar.css";

const Navbar = () => {
    return (
        <nav>
            <div className='container'>
                <div className='navbar-row'>
                    <a href="#">Logo</a>
                    <ul className="navbar-nav">
                        <li className='navbar-nav-item'>Главная</li>
                        <li className='navbar-nav-item'>Контакты</li>
                    </ul>
                    <Button text="Login" />
                    {/* const props = {
                        text: "Login"
                    }
                    Button(props) */}
                </div>
            </div>
        </nav>
    )
};

export default Navbar;