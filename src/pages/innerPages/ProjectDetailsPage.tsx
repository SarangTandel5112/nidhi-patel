import LayoutV2 from "../../components/Layouts/LayoutV2";
import ProjectDetailsContent from "../../components/project/ProjectDetailsContent";
// @ts-ignore
import PromoV1 from "../../components/promo/PromoV1";
import PortfolioDetailData from "../../assets/jsonData/portfolio/portfolioDetail.json";
import { useParams } from "react-router-dom";

const ProjectDetailsPage = () => {
    const { id } = useParams();
    const data = PortfolioDetailData.find(
        (portfolio) => portfolio.id === parseInt(id || "0")
    );

    return (
        <>
            <LayoutV2
                breadCrumb="project-details"
                title={data?.title || "Project Details"}
            >
                {data && <ProjectDetailsContent projectData={data} />}
                {/* <PromoV1 /> */}
            </LayoutV2>
        </>
    );
};

export default ProjectDetailsPage;
