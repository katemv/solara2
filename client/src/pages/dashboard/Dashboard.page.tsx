import Banner from "../../components/Organisms/Banner/Banner.component";
import Button from "../../components/Atoms/Button/Button.component";
import PageContainer from "../../components/Molecules/PageContainer/PageContainer.component";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../providers/navigation/routes";

const DashboardPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <Banner headingIntlKey="Dashboard" subheadingIntlKey="sub" />
            <PageContainer>
                <Button
                    label="pages.admin.add_product"
                    onClick={() => navigate(ROUTES.ADD_PRODUCT)}
                />
            </PageContainer>
        </>
    );
};

export default DashboardPage;
