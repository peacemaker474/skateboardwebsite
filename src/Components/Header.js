import React from 'react';
import styled from 'styled-components';
import human from '../assets/human.png';
import arrow from '../assets/arrow.png';
import NotiImg from '../assets/notification.png';

const MainHeader = styled.header`
    width: 1440px;
    height: 108px;
    display:flex;
    justify-content: space-around;
    align-items: center;
`;

const Title = styled.h1`
    font-size: 20px;
    font-weight: 600;
    padding-right: 70px;
`;

const Form = styled.form`
    width: 625px;
    height: 40px;
    background-color: #191919;
    display: flex;
    justify-content: space-between;
`;
const Input = styled.input`
    all: unset;
    width: 100%;
    height: 100%;
    padding-left: 15px;
    background-color: #191919;
`;
const Label = styled.img`
`;
const UserBox = styled.div`
    display:flex;
    align-items: center;
    width: 190px;
    height: 32px;
    margin: 0 30px 0 221px;
`;

const UserImg = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-image: url(${human});
    background-size: cover;
`;

const UserName = styled.span`
    padding-left: 16px;
`;

const Arrow = styled.img`
    width: 15px;
    height: 10px;
    margin-left: 10px;
`;
const Notif = styled.div`
    width: 19.2px;
    height: 21.5px;
    background-image: url(${NotiImg});
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    margin-left: 27px;
`;

const RedP = styled.div`
    width: 8px;
    height: 8px;
    background-color: red;
    border-radius: 100%;
    position:absolute;
    top: 2%;
    right: -3%;
`;

const Header = () => {
    return (
        <MainHeader>
            <Title>skateboard</Title>
            <Form>
                <Input placeholder="Search" />
                <Label />
            </Form>
            <UserBox>
                <UserImg />
                <UserName>Thomas</UserName>
                <Arrow src={arrow}/>
                <Notif>
                    <RedP />
                </Notif>
            </UserBox>
        </MainHeader>
    )
};

export default Header;