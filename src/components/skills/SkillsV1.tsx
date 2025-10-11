import ReactWOW from "react-wow";
import { useState } from "react";

interface DataType {
    sectionClass?: string;
}

const SkillsV1 = ({ sectionClass }: DataType) => {
    const [activeCategory, setActiveCategory] = useState(0);

    const skillCategories = [
        {
            title: "Sales & Outreach",
            skills: ["LinkedIn Sales Navigator", "Apollo.io"],
        },
        {
            title: "CRM & Lead Management",
            skills: ["HubSpot"],
        },
        {
            title: "E-commerce & Marketplace Operations",
            skills: ["Amazon Seller Central", "Flipkart Seller Hub", "Shopify"],
        },
        {
            title: "Vendor & Partner Coordination",
            skills: ["Google Sheets", "WhatsApp Business", "Calendly"],
        },
        {
            title: "Campaign Management & Execution",
            skills: ["Google Ads", "Meta Ads Manager", "Mailchimp"],
        },
        {
            title: "Content & Sales Collateral",
            skills: ["Canva", "Google Slides"],
        },
        {
            title: "Project Management & Team Collaboration",
            skills: ["Trello", "Monday.com", "Notion"],
        },
        {
            title: "Performance Tracking & Reporting",
            skills: ["Google Analytics", "Meta Insights", "SEMrush"],
        },
        {
            title: "AI-Powered Marketing Tools",
            skills: ["Copy.ai", "Pictory", "Looka"],
        },
    ];

    return (
        <>
            <div
                id="skills"
                className={`skills-area default-padding ${
                    sectionClass ? sectionClass : ""
                }`}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">
                                    Professional Skills
                                </h4>
                                <h2 className="title">
                                    Marketing & E-commerce Expertise
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="skills-categories">
                                <div className="category-tabs">
                                    {skillCategories.map((category, index) => (
                                        <button
                                            key={index}
                                            className={`category-tab ${
                                                activeCategory === index
                                                    ? "active"
                                                    : ""
                                            }`}
                                            onClick={() =>
                                                setActiveCategory(index)
                                            }
                                        >
                                            {category.title}
                                        </button>
                                    ))}
                                </div>

                                <div className="skills-content">
                                    <ReactWOW animation="fadeInUp">
                                        <div className="active-category">
                                            <h3>
                                                {
                                                    skillCategories[
                                                        activeCategory
                                                    ].title
                                                }
                                            </h3>
                                            <div className="skills-grid">
                                                {skillCategories[
                                                    activeCategory
                                                ].skills.map((skill, index) => (
                                                    <div
                                                        key={index}
                                                        className="skill-item"
                                                    >
                                                        <span className="skill-name">
                                                            {skill}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </ReactWOW>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SkillsV1;
