import ServicesData from "../../assets/jsonData/services/ServicesData.json";
import { useState } from "react";
import ReactWOW from "react-wow";

interface DataType {
    sectionClass?: string;
    hasTitle?: React.ReactNode;
}

const ServicesV1 = ({ sectionClass, hasTitle }: DataType) => {
    const [activeIndex, setActiveIndex] = useState(1);

    const handleMouseEnter = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <>
            <div
                id="services"
                className={`services-style-one-area bottom-less ${
                    sectionClass ? sectionClass : ""
                }`}
            >
                {hasTitle && (
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="site-heading text-center">
                                    <h4 className="sub-title">Services</h4>
                                    <h2 className="title">
                                        My Quality Services
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="container">
                    <div className="row">
                        {ServicesData.map((service, index) => (
                            <div
                                className={`col-xl-3 col-md-6 mb-30`}
                                key={service.id}
                            >
                                <ReactWOW animation="fadeInUp">
                                    <div
                                        className={`service-style-one-item ${
                                            activeIndex === index
                                                ? "active"
                                                : ""
                                        }`}
                                        onMouseEnter={() =>
                                            handleMouseEnter(index)
                                        }
                                    >
                                        <img
                                            src={`/assets/img/icon/${service.icon}`}
                                            alt="Image Not Found"
                                        />
                                        <h4>{service.title}</h4>
                                        <p>{service.text}</p>
                                    </div>
                                </ReactWOW>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesV1;
