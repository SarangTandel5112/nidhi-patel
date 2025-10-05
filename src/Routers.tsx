import { Route, Routes } from "react-router-dom";
import Home from "./pages/homePages/Home";
// @ts-ignore
import ContactPage from "./pages/innerPages/ContactPage";
// @ts-ignore
import PricingPage from "./pages/innerPages/PricingPage";
// @ts-ignore
import HomeDark from "./pages/homePages/HomeDark";
import ProjectDetailsPage from "./pages/innerPages/ProjectDetailsPage";
// @ts-ignore
import BlogWithSidebarPage from "./pages/blogPages/BlogWithSidebarPage";
// @ts-ignore
import ResumePage from "./pages/innerPages/ResumePage";
// @ts-ignore
import ServicePage from "./pages/innerPages/ServicePage";
// @ts-ignore
import ServicesDetailsPage from "./pages/innerPages/ServicesDetailsPage";
// @ts-ignore
import BlogSingleWithSidebarPage from "./pages/blogPages/BlogSingleWithSidebarPage";
import NotFoundPage from "./pages/innerPages/NotFoundPage";
// @ts-ignore
import ProjectsPage from "./pages/innerPages/ProjectsPage";

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                {/* <Route path="/home-dark" element={<HomeDark />} ></Route> */}
                {/* <Route path="/contact" element={<ContactPage />} ></Route> */}
                {/* <Route path="/pricing" element={<PricingPage />} ></Route> */}
                {/* <Route path="/blog-with-sidebar" element={<BlogWithSidebarPage />} ></Route> */}
                {/* <Route path="/blog-single-with-sidebar/:id" element={<BlogSingleWithSidebarPage />} ></Route> */}
                {/* <Route path="/projects" element={<ProjectsPage />}></Route> */}
                <Route
                    path="/project-details/:id"
                    element={<ProjectDetailsPage />}
                ></Route>
                {/* <Route path="/resume" element={<ResumePage />}></Route> */}
                {/* <Route path="/service" element={<ServicePage />} ></Route> */}
                {/* <Route
                    path="/services-details"
                    element={<ServicesDetailsPage />}
                ></Route> */}
                <Route path="*" element={<NotFoundPage />}></Route>
            </Routes>
        </>
    );
};

export default Routers;
