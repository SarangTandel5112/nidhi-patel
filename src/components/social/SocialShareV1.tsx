import { Link } from "react-router-dom";

const SocialShareV1 = () => {
    return (
        <>
            <li>
                <Link
                    to="https://www.linkedin.com/in/nidhi-patel-marketing"
                    target="_blank"
                >
                    <i className="fab fa-linkedin-in" />
                </Link>
            </li>
            <li>
                <Link to="mailto:patelnidhi7600@gmail.com" target="_blank">
                    <i className="fas fa-envelope" />
                </Link>
            </li>
            <li>
                <Link to="tel:+12896232785" target="_blank">
                    <i className="fas fa-phone" />
                </Link>
            </li>
        </>
    );
};

export default SocialShareV1;
