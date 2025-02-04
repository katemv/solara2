import { gql } from "@apollo/client";

export const GET_PRODUCT = gql`
    query GetProduct($id: ID!) {
        product(id: $id) {
            id
            title
            brand
            price
            description
            imageUrl
            reviews {
                totalCount
                rating
                scoreDistribution {
                    score
                    count
                }
            }
        }
    }
`;