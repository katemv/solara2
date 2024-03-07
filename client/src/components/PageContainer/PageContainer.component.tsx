import { FC, ReactNode } from "react";
import { Container, ContainerWrap } from "./styles";

interface PageContainerProps {
    children: ReactNode;
}
const PageContainer: FC<PageContainerProps> = ({ children }) => {
    return (
        <ContainerWrap>
            <Container>{children}</Container>
        </ContainerWrap>
    );
};

export default PageContainer;
