import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY } from '../pages/api/schema';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

const TableStyle = styled.table`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TbodyStyles = styled.tbody`
    display: flex;
    flex-direction: column;
    background-color: lightgray;
    border: 1px solid darkgray;
    border-radius: 20px;
    padding: 20px;
    width: 26%;
`;

const TrStyles = styled.tr`
    display: flex;
    justify-content: space-between;
    font-size: 22px;
    margin-bottom: 9px;
    color: darkblue;
`;

const TdStyles = styled.td`
    width: 83%;
    font-size: 18px;
    font-style: oblique;
`;

const Start = styled.td`
    color: gold;
`;

function Table() {
    const { loading, error, data } = useQuery(QUERY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

            return (
                <TableStyle>
                    <TbodyStyles>
                        <TrStyles>
                            <th>Name</th>
                            <th>Starts</th>
                        </TrStyles>
                        <tr key={data.topic.id}>
                            <TdStyles>{data.topic.name}</TdStyles>
                            <TdStyles>{data.topic.stargazerCount}</TdStyles>
                            <Start><FaStar css={`color: golden;`}/></Start>
                            {data.topic.relatedTopics?.map((item) => (
                                <tr key={item.id}>
                                    <TdStyles>{item.name}</TdStyles>
                                    <TdStyles>{item.stargazerCount}</TdStyles>
                                    <Start><FaStar css={`color: golden;`}/></Start>
                                </tr>
                            ))}
                        </tr>
                    </TbodyStyles>
                </TableStyle>
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