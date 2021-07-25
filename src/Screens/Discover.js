import React from 'react';
import styled from 'styled-components';
import discoverImg from '../assets/discover.png';
import mainright from '../assets/mainright.png';
import leftuser from '../assets/leftuser.png';
import rightuser from '../assets/rightuser.png';
import sub1 from '../assets/1.png';

const Main = styled.main`
    margin: 148px 0 0 102px;
`;

const MainTitle = styled.h1`
    font-size:40px;
`;

const Mainthema = styled.section`
    width: 1098px;
    height: 366px;
    display: flex;
    margin: 28px 0 61px 0;
`;

const Mainleft = styled.div`
    width: 715px;
    height: 100%;
    border-radius: 10px;
    background-image: url(${discoverImg});
    background-size: cover;
    position: relative;
`;

const LeftTitle = styled.h3`
    width: 231px;
    height: 153px;
    font-size: 30px;
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: 0.3px;
    margin: 31px 454px 30px 40px;
`;

const LeftUser = styled.div`
    width: 234px;
    height: 60px;
    margin: 30px 456px 92px 35px;
    background-image: url(${leftuser});
`;

const Time = styled.div`
    width: 46px;
    height: 20px;
    padding: 6px 8px;
    opacity: 0.5;
    font-size: 10px;
    border-radius: 10px;
    text-align: center;
    background-color: #242730;
    position: absolute;
    right: 2%;
    bottom: 3%;
`;

const Mainright = styled.div`
    width: 342px;
    height: 100%;
    border-radius: 10px;
    background-image: url(${mainright});
    background-size: cover;
    margin-left: 21px;
    position: relative;
`;

const RightTitle = styled.h3`
    width: 230px;
    height: 108px;
    margin: 40px 82px 0 40px;
    font-size: 30px;
    font-weight: 600;
    display: inline-block;
`;

const RightName = styled.h4`
    width: 104px;
    height: 15px;
    margin: 20px 137px 10px 40px;
    font-size: 15px;
    font-weight: 500;
`;

const RightView = styled.span`
    width: 163px;
    height: 12px;
    margin: 10px 78px 20px 40px;
    opacity: 0.8;
    font-size: 12px;
`;

const RightUser = styled.div`
    width: 60px;
    height: 60px;
    margin: 20px 181px 41px 40px;
    background-image: url(${rightuser});
    background-size: cover;
`;

const Subthema = styled.section`
    width: 1098px;
    height: 315px;
    display:flex;
    justify-content: space-evenly;
    align-items;
`;

const SubTitle = styled.h3`
    font-size: 28px;
`;

const SubContent = styled.div`
    width: 259px;
    height: 313px;
    margin: 28px 21px 0 0;
    background-image: url(${sub1});
    background-size: cover;
`;

const Discover = () => {
    return (
        <>
            <Main>
                <MainTitle>Discover</MainTitle>
                <Mainthema>
                    <Mainleft>
                        <LeftTitle>How to do Basic Jumping and how to landing safely</LeftTitle>
                        <LeftUser />
                        <Time> 7 min </Time>
                    </Mainleft>
                    <Mainright>
                        <RightTitle>Skateboard Tips You need to know</RightTitle>
                        <RightName>Tony Andrew</RightName>
                        <RightView>53K views  •  2 weeks ago</RightView>
                        <RightUser />
                        <Time> 10 min </Time>
                    </Mainright>
                </Mainthema>
                <SubTitle>Most Watched</SubTitle>
                <Subthema>
                    <SubContent />
                    <SubContent />
                    <SubContent />
                    <SubContent />
                </Subthema>
            </Main>
        </>
    ) 
};

export default Discover;