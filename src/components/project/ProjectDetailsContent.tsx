import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import projects9 from "/assets/img/projects/9.jpg";
import projects4 from "/assets/img/projects/4.jpg";
import banner2 from "/assets/img/banner/2.jpg";

interface ProjectData {
    id: number;
    title: string;
    thumb?: string;
    thumbFull?: string;
    tags?: string[];
    Service?: string;
    Address?: string;
    Description?: string;
    Background?: string;
    "The Challenges"?: string;
    "The Solution"?: string;
}

const ProjectDetailsContent = ({ projectData }: { projectData: ProjectData }) => {
    // Destructure fields safely (with optional chaining)
    const {
        title,
        Service,
        Address,
        Description,
        Background,
        ["The Challenges"]: Challenges,
        ["The Solution"]: Solution,
        thumbFull,
    } = projectData;

    // Scroll-based image zoom effect
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScroll(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* ================= Hero / Banner Section ================= */}
            <div className="banner-animation-zoom overflow-hidden">
                <div className="container">
                    <div className="image-move-bg">
                        <div
                            className="animation-zoom-banner"
                            id="js-hero"
                            style={{ width: `${100 + scroll / 18}%` }}
                        >
                            <img
                                src={thumbFull ? `/assets/img/projects/${thumbFull}` : projects9}
                                alt={title || "Project image"}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= Project Top Info ================= */}
            <div className="project-details-items default-padding">
                <div className="container">
                    <div className="top-info">
                        <div className="row">
                            <div className="col-xl-4 col-lg-5 left-info mb-xs-40 mb-md-50">
                                <div className="project-single-info">
                                    <ul>
                                        <li>
                                            <strong>Client</strong> <span>{title || "N/A"}</span>
                                        </li>
                                        {Service && (
                                            <li>
                                                <strong>Service</strong> <span>{Service}</span>
                                            </li>
                                        )}
                                        {Address && Address !== "ABC" && (
                                            <li>
                                                <strong>Address</strong> <span>{Address}</span>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>

                            <div className="right-info col-xl-8 col-lg-7 pl-50 pl-md-15 pl-xs-15 mt-md-10">
                                <h2>Description</h2>
                                <p>{Description || "Description not available."}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= Project Images ================= */}
            <div className="project-details-items default-padding-bottom">
                <div className="container">
                    <div className="project-thumb mt-md--25 mt-xs--25">
                        <div className="row">
                            <div className="col-md-7">
                                <img src={projects9} alt="Preview 1" />
                            </div>
                            <div className="col-md-5">
                                <img src={projects4} alt="Preview 2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= Background / Challenges / Solution ================= */}
            <div className="project-details-items default-padding bg-gray">
                <div className="container">
                    <div className="item-grid-container">

                        {/* Background */}
                        <div className="single-grid">
                            <div className="item-grid-colum">
                                <div className="left-info">
                                    <h2>Background</h2>
                                </div>
                                <div className="right-info">
                                    <p>{Background || "Background information not available."}</p>
                                </div>
                            </div>
                        </div>

                        {/* The Challenges */}
                        <div className="single-grid">
                            <div className="item-grid-colum">
                                <div className="left-info">
                                    <h2>The Challenges</h2>
                                </div>
                                <div className="right-info">
                                    <p>{Challenges || "Challenge details not available."}</p>
                                    <img
                                        src={banner2}
                                        alt="Challenges illustration"
                                        className="mt-3"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* The Solution */}
                        <div className="single-grid">
                            <div className="item-grid-colum">
                                <div className="left-info">
                                    <h2>The Solution</h2>
                                </div>
                                <div className="right-info">
                                    <p>{Solution || "Solution details not available."}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* ================= Project Pagination ================= */}
            <div className="project-pagination default-padding-bottom bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="project-paginvation-items mt-xs--25 mt-md--25">
                                <div className="project-previous">
                                    <Link to="#">
                                        <div className="icon">
                                            <i className="fas fa-angle-double-left" />
                                        </div>
                                        <div className="nav-title">
                                            Previous Project
                                            <h5>Previous Work</h5>
                                        </div>
                                    </Link>
                                </div>

                                <div className="project-all">
                                    <Link to="#"><i className="fas fa-th-large" /></Link>
                                </div>

                                <div className="project-next">
                                    <Link to="#">
                                        <div className="nav-title">
                                            Next Project
                                            <h5>Next Work</h5>
                                        </div>
                                        <div className="icon">
                                            <i className="fas fa-angle-double-right" />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectDetailsContent;
