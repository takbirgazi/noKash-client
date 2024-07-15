import { NavLink } from "react-router-dom";


const Footer = () => {
    return (
        <div className="bg-green-200">
            <div className="flex justify-between items-center py-5 w-11/12 mx-auto">
                <div>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by noKash</p>
                </div>
                <div>
                    <ul className="flex gap-5">
                        <li><NavLink>About</NavLink></li>
                        <li><NavLink>Terms And Condition</NavLink></li>
                        <li><NavLink>Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;