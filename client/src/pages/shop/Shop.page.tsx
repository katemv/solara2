import { useState } from "react";
import PageContainer from "../../components/Molecules/PageContainer/PageContainer.component";
import Product from "../../components/Pages/Products/ProductItem/ProductItem.component";
import Banner from "../../components/Organisms/Banner/Banner.component";
import Flex from "../../components/Atoms/Flex/Flex.component";
import Text from "../../components/Atoms/Text/Text.component";
import Tab from "../../components/Molecules/Tabs/Tab.component";
import { Categories, IProduct, Nullable } from "../../types";
import { CATEGORIES } from "../../utils/constants";
import { fullWidth, Grid } from "./styles";
import ProductDetailsModal from "../../components/Pages/Products/ProductDetailsModal/ProductDetailsModal.component";

import image1 from "../../assets/images/astro.png";
import image2 from "../../assets/images/bar.png";
import image3 from "../../assets/images/abstr_asto.png";
import image4 from "../../assets/images/flower_asto_2.png";
import image5 from "../../assets/images/planet.png";

const mock: IProduct = {
    id: "1",
    name: "Test Product",
    brand: "Luna",
    price: 8000,
    image: ""
};

const list: IProduct[] = [
    // @ts-expect-error: temporary mock
    { id: "1", ...mock, image: image1 },
    // @ts-expect-error: temporary mock
    { id: "2", ...mock, image: image2 },
    // @ts-expect-error: temporary mock
    { id: "3", ...mock, image: image3 },
    // @ts-expect-error: temporary mock
    { id: "4", ...mock, image: image4 },
    // @ts-expect-error: temporary mock
    { id: "5", ...mock, image: image5 },
    // @ts-expect-error: temporary mock
    { id: "6", ...mock, image: image1 }
];

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
                    {list.map((product) => (
                        <Product
                            key={product.id}
                            product={product}
                            horizontal
                            onClick={() => setCurrentProduct(product)}
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
                    {list.map((product) => (
                        <Product
                            key={product.id}
                            product={product}
                            onClick={() => setCurrentProduct(product)}
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
