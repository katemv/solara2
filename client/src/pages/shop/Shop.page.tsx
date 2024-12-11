import { useState } from "react";
import PageContainer from "../../components/Molecules/PageContainer/PageContainer.component";
import Product from "../../components/Organisms/Products/ProductItem/ProductItem.component";
import Banner from "../../components/Organisms/Banner/Banner.component";
import Flex from "../../components/Atoms/Flex/Flex.component";
import Text from "../../components/Atoms/Text/Text.component";
import Tab from "../../components/Molecules/Tab/Tab.component";
import { Categories, IProduct, Nullable } from "../../types";
import { CATEGORIES } from "../../utils/constants";
import { fullWidth, Grid } from "./styles";
import ProductDetailsModal from "../../components/Organisms/Products/ProductDetailsModal/ProductDetailsModal.component";

const mock: IProduct = {
    id: "1",
    name: "Test Product",
    brand: "Luna",
    price: 8000,
};

const ShopPage = () => {
    const [currentCategory, setCurrentCategory] = useState<Categories>(Categories.ALL_PRODUCTS);
    const [currentProduct, setCurrentProduct] = useState<Nullable<IProduct>>(null);

    return (
        <>
            <Banner headingIntlKey="pages.shop.banner" subheadingIntlKey="pages.shop.banner_description" />
            <PageContainer>
                <Grid>
                    <Text
                        as="h2"
                        intlKey="pages.shop.popular_products"
                        appearance="headline3"
                        textAlign="left"
                        customStyles={fullWidth}
                    />
                    {new Array(3).fill(0).map((_, index) => (
                        <Product
                            key={index}
                            product={mock}
                            horizontal
                            onClick={() => setCurrentProduct(mock)}
                        />
                    ))}
                    <Text
                        as="h2"
                        intlKey="pages.shop.categories"
                        appearance="headline3"
                        textAlign="left"
                        customStyles={fullWidth}
                    />
                    <Flex gap="spacing2" marginBottom="spacing4" $wrap data-full-width>
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
                    <Text
                        as="h2"
                        intlKey={currentCategory}
                        appearance="headline2"
                        textAlign="left"
                        customStyles={fullWidth}
                    />
                    <Text
                        as="p"
                        intlKey={`${currentCategory}_description`}
                        appearance="paragraph"
                        textAlign="left"
                        fontWeight={300}
                        color="dark20"
                        customStyles={{ ...fullWidth, width: "80%" }}
                        marginBottom="spacing4"
                    />
                    {new Array(10).fill(0).map((_, index) => (
                        <Product
                            key={index}
                            product={mock}
                            onClick={() => setCurrentProduct(mock)}
                        />
                    ))}
                </Grid>
            </PageContainer>

            <ProductDetailsModal
                visible={!!currentProduct}
                product={currentProduct}
                onClose={() => {
                    setCurrentProduct(null);
                }}
            />
        </>
    );
};

export default ShopPage;
