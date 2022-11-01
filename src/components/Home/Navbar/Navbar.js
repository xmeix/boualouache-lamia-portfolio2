import './Navbar.css';
import {
    Link
  } from "react-router-dom";

const Navbar = () => {

    const sideNavItems = [
        {
            id: 1,
            title: "Home",
            to:"/",
        },
        {
            id: 2,
            title: "Gallery",
            to:"/gallery",
        },
        {
            id: 3,
            title: "Me",
            to:"/me",
        },
        {
            id: 3,
            title: "Contact",
            to:"/contact",
        }, 
    ];


    return ( 
        <div className="navbar">
            <div className='logo'>
                <Link className="logoTitle" to="/" style={{ textDecoration: "none", color: "var(--violet)",fontWeight: "900"}}>me<span>i</span>x</Link>
            </div>
            <div className="links">
                {
                    sideNavItems.map((item) => <Link key={item.id} to={item.to} style={{ textDecoration: "none", color: "var(--white)",fontWeight: "600"}}>{item.title}</Link>)
                }
                </div>
        </div>
     );
}
 
export default Navbar;