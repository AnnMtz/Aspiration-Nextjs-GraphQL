// export const query = `
// { 
//     topic(name:"react") {
//         id
//         name
//         relatedTopics(first: 10) {
//             id
//             name
//             stargazerCount
//             viewerHasStarred
//             relatedTopics(first: 10) {
//                 id
//                 name
//                 stargazerCount
//                 viewerHasStarred
//             }
//         }
//     }
// }`;
import { gql } from '@apollo/client';

export const QUERY = gql `
    query { 
        topic(name:"react") {
            id
            name
            stargazerCount
            relatedTopics(first: 10) {
                id
                name
                stargazerCount
                viewerHasStarred
                relatedTopics(first: 10) {
                    id
                    name
                    stargazerCount
                    viewerHasStarred
                }
            }
        }
    }
`;