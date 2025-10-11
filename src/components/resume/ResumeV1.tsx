import ReactWOW from "react-wow";

interface DataType {
    sectionClass?: string;
}

const ResumeV1 = ({ sectionClass }: DataType) => {
    return (
        <>
            <div
                id="resume"
                className={`timeline-area ${sectionClass ? sectionClass : ""}`}
            >
                <div className="container">
                    <div className="time-line-style-one-box">
                        <div className="row guttex-xl">
                            <div className="col-lg-6">
                                <h2>Work Experience</h2>
                                <div className="time-style-one-items">
                                    {/* Single Item */}
                                    <ReactWOW animation="fadeInUp">
                                        <div className="timeline-style-one-item">
                                            <div className="timeline-header">
                                                <div className="left">
                                                    <h4>
                                                        Marketing Ambassador
                                                    </h4>
                                                    <p>Ratesdotca, Canada</p>
                                                </div>
                                                <div className="right">
                                                    <span>
                                                        Aug 2025 - Present
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="timeline-body">
                                                <p>
                                                    Promoting Ratesdotca's
                                                    insurance quoting platform
                                                    by engaging with potential
                                                    users and building awareness
                                                    of its benefits. Supporting
                                                    marketing initiatives
                                                    through outreach activities
                                                    and sharing promotional
                                                    content across different
                                                    channels.
                                                </p>
                                            </div>
                                        </div>
                                    </ReactWOW>

                                    {/* Single Item */}
                                    <ReactWOW animation="fadeInUp">
                                        <div className="timeline-style-one-item">
                                            <div className="timeline-header">
                                                <div className="left">
                                                    <h4>
                                                        Marketing Coordinator
                                                        (Internship)
                                                    </h4>
                                                    <p>
                                                        Alba IT Solutions,
                                                        Canada
                                                    </p>
                                                </div>
                                                <div className="right">
                                                    <span>
                                                        Feb 2025 - Jun 2025
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="timeline-body">
                                                <p>
                                                    Supported client marketing
                                                    campaigns by assisting with
                                                    Google Ads, Meta Ads, and
                                                    SEO initiatives. Coordinated
                                                    between clients and internal
                                                    teams to manage
                                                    deliverables, timelines, and
                                                    campaign performance using
                                                    Trello and Monday.com.
                                                </p>
                                            </div>
                                        </div>
                                    </ReactWOW>

                                    {/* Single Item */}
                                    <ReactWOW animation="fadeInUp">
                                        <div className="timeline-style-one-item">
                                            <div className="timeline-header">
                                                <div className="left">
                                                    <h4>
                                                        Digital Marketing Team
                                                        Lead
                                                    </h4>
                                                    <p>
                                                        Skyblue Stationery Mart,
                                                        India
                                                    </p>
                                                </div>
                                                <div className="right">
                                                    <span>
                                                        Mar 2021 - Jun 2022
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="timeline-body">
                                                <p>
                                                    Led 18-member team,
                                                    generated ₹20L+ in ad
                                                    revenue with 14.78x ROAS.
                                                    Built and optimized Shopify
                                                    e-commerce platform, scaled
                                                    Instagram from 7K to 70K+
                                                    followers, and delivered
                                                    11M+ ad impressions with
                                                    7.16% CTR.
                                                </p>
                                            </div>
                                        </div>
                                    </ReactWOW>

                                    {/* Single Item */}
                                    <ReactWOW animation="fadeInUp">
                                        <div className="timeline-style-one-item">
                                            <div className="timeline-header">
                                                <div className="left">
                                                    <h4>
                                                        E-Commerce & Social
                                                        Media Marketing
                                                    </h4>
                                                    <p>myBageecha, India</p>
                                                </div>
                                                <div className="right">
                                                    <span>
                                                        Jan 2018 - Mar 2021
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="timeline-body">
                                                <p>
                                                    Scaled Instagram following
                                                    from 800 to 100K+ in three
                                                    years through consistent
                                                    niche content. Managed Meta
                                                    and Google Ads campaigns
                                                    delivering 6.2M+ impressions
                                                    with 6.8% CTR and 9.4x ROAS.
                                                    Generated ₹12L+ revenue
                                                    through digital advertising
                                                    and boosted repeat purchases
                                                    by 30% through automated
                                                    email marketing workflows.
                                                </p>
                                            </div>
                                        </div>
                                    </ReactWOW>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <h2>Education Background</h2>
                                <div className="time-style-one-items">
                                    {/* Single Item */}
                                    <ReactWOW animation="fadeInUp">
                                        <div className="timeline-style-one-item">
                                            <div className="timeline-header">
                                                <div className="left">
                                                    <h4>
                                                        Post Graduation in
                                                        Strategic Marketing
                                                        Communications
                                                    </h4>
                                                    <p>
                                                        Conestoga College,
                                                        Canada
                                                    </p>
                                                </div>
                                                <div className="right">
                                                    <span>2023 - 2025</span>
                                                </div>
                                            </div>
                                            <div className="timeline-body">
                                                <p>
                                                    Advanced studies in
                                                    strategic marketing
                                                    communications with focus on
                                                    digital marketing, brand
                                                    management, and performance
                                                    marketing strategies.
                                                </p>
                                            </div>
                                        </div>
                                    </ReactWOW>

                                    {/* Single Item */}
                                    <ReactWOW animation="fadeInUp">
                                        <div className="timeline-style-one-item">
                                            <div className="timeline-header">
                                                <div className="left">
                                                    <h4>Master of Commerce</h4>
                                                    <p>
                                                        Gujarat University,
                                                        India
                                                    </p>
                                                </div>
                                                <div className="right">
                                                    <span>2016 - 2018</span>
                                                </div>
                                            </div>
                                            <div className="timeline-body">
                                                <p>
                                                    Comprehensive study of
                                                    commerce and business
                                                    management with focus on
                                                    marketing, economics, and
                                                    business strategy.
                                                </p>
                                            </div>
                                        </div>
                                    </ReactWOW>

                                    {/* Single Item */}
                                    <ReactWOW animation="fadeInUp">
                                        <div className="timeline-style-one-item">
                                            <div className="timeline-header">
                                                <div className="left">
                                                    <h4>
                                                        Bachelor of Commerce
                                                    </h4>
                                                    <p>
                                                        Gujarat University,
                                                        India
                                                    </p>
                                                </div>
                                                <div className="right">
                                                    <span>2013 - 2016</span>
                                                </div>
                                            </div>
                                            <div className="timeline-body">
                                                <p>
                                                    Foundation in commerce and
                                                    business studies with
                                                    emphasis on marketing
                                                    principles, accounting, and
                                                    business management.
                                                </p>
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

export default ResumeV1;
