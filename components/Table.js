import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY } from '../pages/api/schema';
import { client } from '../pages/api/getInfo';
// import { query } from '../pages/api/schema';
// import { FaStart } from 'react-icon'

function Table() {
    const { loading, error, data } = useQuery(QUERY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

            return (
                <table>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Starts</th>
                        </tr>
                        <tr key={data.topic.id}>
                            <td>{data.topic.name}</td>
                            <td>{data.topic.stargazerCount}</td>
                            {data.topic.relatedTopics?.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.stargazerCount}</td>
                                </tr>
                            ))}
                            {/* <td><FaStar css={`color: golden;`}/></td> */}
                        </tr>
                    </tbody>
                </table>
            )
    
}
 
export default Table;

    // return ( 
    //     <Query
    //         query={gql `
    //         { 
    //             topic(name:"react") {
    //                 id
    //                 name
    //                 relatedTopics(first: 10) {
    //                     id
    //                     name
    //                     stargazerCount
    //                     viewerHasStarred
    //                     relatedTopics(first: 10) {
    //                         id
    //                         name
    //                         stargazerCount
    //                         viewerHasStarred
    //                     }
    //                 }
    //             }
    //         }
    //         `}
    //     >
    //         {({loading, error, data}) => {
    //             if (loading) return <p>Loading...</p>;
    //             if (error) return <p>Error!(</p>;

    //                 return data.map(topic => {
    //                     return (
    //                         <table>
    //                             <tbody>
    //                                 <tr>
    //                                     <th>Name</th>
    //                                     <th>Starts</th>
    //                                 </tr>
    //                                 <tr key={topic.id}>
    //                                     <td>{topic.name}</td>
    //                                     <td>{topic.stargazerCount}</td>
    //                                     {/* <td><FaStar css={`color: golden;`}/></td> */}
    //                                 </tr>
    //                             </tbody>
    //                         </table>
    //                     )
    //                 })
    //         }}
    //     </Query>
        // <div>
        //     <h1>Topics</h1>
        //     <table>
        //         <tbody>
        //             <tr>
        //                 <th>Name</th>
        //                 <th>Starts</th>
        //             </tr>
        //             <tr>
        //                 <td></td>
        //                 <td></td>
        //                 <td></td>
        //             </tr>
        //         </tbody>
        //     </table>
        // </div>
    //  );

 
// export default Table;