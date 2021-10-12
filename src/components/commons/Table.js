import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY } from '../../config/schema';
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