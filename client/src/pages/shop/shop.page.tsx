import PageContainer from "../../components/PageContainer/PageContainer.component";
import Product from "../../components/Products/Product/Product.component";
import Banner from "../../components/Banner/Banner.component";
import Text from "../../components/Text/Text.component";
import { IProduct } from "../../types";
import { Grid } from "./styles";

const mock: IProduct = {
    id: "1",
    name: "Test Product",
    brand: "Luna",
    price: 8000,
};

const ShopPage = () => {
    return (
        <>
            <Banner
                heading="pages.shop.banner"
                subheading="pages.shop.banner_description"
            />
            <PageContainer>
                <Grid>
                    <Text
                        as="h2"
                        intlKey="pages.shop.all_products"
                        appearance="headline3"
                        textAlign="left"
                        customStyles={{ gridColumn: "1 / -1" }}
                    />
                    {new Array(10).fill(0).map((product, index) => (
                        <Product key={index} product={mock} />
                    ))}
                </Grid>
            </PageContainer>
        </>
    );
};

export default ShopPage;
