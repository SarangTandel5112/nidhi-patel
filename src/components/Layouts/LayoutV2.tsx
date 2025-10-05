import FooterV1 from "../footer/FooterV1";
// @ts-ignore
import HeaderV2 from "../header/HeaderV2";
import BreadCrumb from "../breadCrumb/BreadCrumb";
import HeaderV1 from "../header/HeaderV1";

interface LayoutProps {
    children?: React.ReactNode;
    breadCrumb?: string;
    title?: string;
}

const LayoutV2 = ({ children, breadCrumb, title }: LayoutProps) => {
    return (
        <>
            <HeaderV1 />
            {breadCrumb && <BreadCrumb breadCrumb={breadCrumb} title={title} />}
            {children}
            <FooterV1 />
        </>
    );
};

export default LayoutV2;
