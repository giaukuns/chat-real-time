import React from 'react';
import { Row,Col } from 'antd';
import UserInfor from './UserInfor';
import RoomList from './RoomList';
import styled from 'styled-components';

const SibarStyled = styled.div`
    background: #3f0e40;
    color: white;
    height: 100vh;
`;

function Sibar(props) {
    return (
        <SibarStyled>
            <Row>
                <Col span={24}>
                    <UserInfor/>
                </Col>
                <Col span={24}>
                    <RoomList/>
                </Col>
            </Row>
        </SibarStyled>
    );
}

export default Sibar;