import logo from "/assets/img/logo.png";
import { Link } from "react-scroll";

const FooterV1 = () => {
    return (
        <>
            <footer
                className="default-padding bg-cover"
                style={{ backgroundImage: "url(assets/img/shape/1.jpg)" }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="footer-items text-center">
                                <Link to="/" className="footer-logot">
                                    <img src={logo} alt="Image Not Found" />
                                </Link>
                                <ul className="foter-menu">
                                    {/* <li><Link to="/">Home</Link></li> */}
                                    <li>
                                        <Link
                                            className="smooth-menu"
                                            to="services"
                                            offset={-50}
                                            // onClick={closeMenu}
                                        >
                                            Services
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="smooth-menu"
                                            to="portfolio"
                                            offset={-50}
                                            // onClick={closeMenu}
                                        >
                                            Portfolio
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <Link to="/blog-with-sidebar">
                                            Blog
                                        </Link>
                                    </li> */}
                                    <li>
                                        <Link
                                            className="smooth-menu"
                                            to="resume"
                                            offset={-50}
                                            // onClick={closeMenu}
                                        >
                                            Resume
                                        </Link>
                                    </li>
                                </ul>
                                <p>
                                    Copyright &copy; {new Date().getFullYear()}{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterV1;
