import { useState } from "react";
import PageContainer from "../../components/PageContainer/PageContainer.component";
import Product from "../../components/Products/Product/Product.component";
import Banner from "../../components/Banner/Banner.component";
import { Flex } from "../../components/Flex/Flex.component";
import Text from "../../components/Text/Text.component";
import Tab from "../../components/Tab/Tab.component";
import { Categories, IProduct } from "../../types";
import { CATEGORIES } from "../../utils/constants";
import { Grid } from "./styles";

const mock: IProduct = {
    id: "1",
    name: "Test Product",
    brand: "Luna",
    price: 8000,
};

const ShopPage = () => {
    const [currentCategory, setCurrentCategory] = useState<Categories>(Categories.ALL_PRODUCTS);
    return (
        <>
            <Banner heading="pages.shop.banner" subheading="pages.shop.banner_description" />
            <PageContainer>
                <Grid>
                    <Text
                        as="h2"
                        intlKey="pages.shop.popular_products"
                        appearance="headline3"
                        textAlign="left"
                        customStyles={{ gridColumn: "1 / -1" }}
                    />
                    {new Array(3).fill(0).map((product, index) => (
                        <Product key={index} product={mock} horizontal />
                    ))}
                    <Text
                        as="h2"
                        intlKey="pages.shop.categories"
                        appearance="headline3"
                        textAlign="left"
                        customStyles={{ gridColumn: "1 / -1" }}
                    />
                    <Flex gap="spacing2" marginBottom="spacing4" wrap data-full-width>
                        <Tab
                            isActive={currentCategory === Categories.ALL_PRODUCTS}
                            onClick={() => setCurrentCategory(Categories.ALL_PRODUCTS)}
                            label={Categories.ALL_PRODUCTS}
                        />
                        {CATEGORIES.map((category) => (
                            <Tab
                                key={category}
                                isActive={currentCategory === category}
                                onClick={() => setCurrentCategory(category)}
                                label={category}
                            />
                        ))}
                    </Flex>
                    {new Array(10).fill(0).map((_, index) => (
                        <Product key={index} product={mock} />
                    ))}
                </Grid>
            </PageContainer>
        </>
    );
};

export default ShopPage;
