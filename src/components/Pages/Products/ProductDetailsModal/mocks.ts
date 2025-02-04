import { productMock } from "../../../../utils/mocks";
import { GET_PRODUCT } from "./queries";

export const defaultMock = [
    {
        request: {
            query: GET_PRODUCT,
            variables: {
                id: "1"
            }
        },
        result: {
            data: {
                product: productMock
            }
        }
    }
];
