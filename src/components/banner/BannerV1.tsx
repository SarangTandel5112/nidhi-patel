// eslint-disable-next-line @typescript-eslint/no-unused-vars
import SocialShareV1 from "../social/SocialShareV1";
import illustration1 from "/assets/img/illustration/1.jpeg";
import shape1 from "/assets/img/shape/1.png";
import shape3 from "/assets/img/shape/3.png";
import { ReactTyped } from "react-typed";

const BannerV1 = () => {
    const textLines = [
        '<b className="">E-commerce Strategist</b>',
        '<b className="">Digital Marketing Strategist</b>',
    ];

    return (
        <>
            <div className="banner-style-one-area bg-gray">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="banner-style-one-items">
                                <div className="info">
                                    <h1>I👋 am Nidhi Patel </h1>
                                    <h2>
                                        <span
                                            className="header-caption"
                                            id="page-top"
                                        >
                                            <span className="cd-headline clip is-full-width">
                                                <span className="cd-words-wrapper ">
                                                    <ReactTyped
                                                        strings={textLines}
                                                        typeSpeed={35}
                                                        backSpeed={35}
                                                        backDelay={2000}
                                                        loop
                                                        style={{
                                                            fontSize: "2.7rem",
                                                        }}
                                                    ></ReactTyped>
                                                </span>
                                            </span>
                                        </span>
                                    </h2>
                                    <p>
                                        Hi, my name is Nidhi Patel and I started
                                        my career by working for a startup that
                                        used to sell exotic plants but soon my
                                        "first job" turned into a Passion
                                        Project!! Well there has been no turning
                                        back since! Digging into "Why not?" has
                                        been the dearest task to me. I always
                                        have a zillion questions about the
                                        product, for the stakeholders and
                                        myself! The courage to question
                                        everything has helped me deliver the
                                        most impactful work. I always look
                                        forward to working with growing
                                        companies, it makes me feel that I am
                                        part of something that is on its way of
                                        becoming something great!!!
                                    </p>
                                    <div className="flex-social mt-40">
                                        {/* <div className="button">
                                            <Link
                                                className="btn-style-regular"
                                                to="/contact"
                                            >
                                                <span>Hire Me Now</span>{" "}
                                                <i className="fas fa-arrow-right" />
                                            </Link>
                                        </div> */}
                                        <ul className="social-info">
                                            <SocialShareV1 />
                                        </ul>
                                    </div>
                                </div>
                                <div className="thumb">
                                    <img
                                        src={illustration1}
                                        alt="Image Not Found"
                                    />
                                    <img src={shape1} alt="Image Not Found" />
                                    <img src={shape3} alt="Image Not Found" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerV1;
