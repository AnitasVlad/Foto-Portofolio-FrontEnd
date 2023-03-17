import Home from "./Home";
import Contact from "./Contact";
import Styles from "./Navbar.module.css"

const Navbar = () => {
    return (
        <div className={Styles.navbar}>
            <div className={Styles.navItems}>
                <Home/>
                <Contact/>
            </div>
        </div>
    )
}

export default Navbar;