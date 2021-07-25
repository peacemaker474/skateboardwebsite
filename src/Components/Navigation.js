import React, {useState} from 'react';
import styled from 'styled-components';
import {Link, withRouter} from 'react-router-dom';
import HomeImg from '../assets/Home.png';
import nightmode from '../assets/night.png';

const NavBar = styled.nav`
    width: 134px;
    height: 932px;
    margin: 108px 0 0 32px;
`;
const Title = styled.h4`
    color: #808191;
    font-size: 11px;
    font-weight: 600;
`;
const Menu = styled.ul`
    width: 100%;
    height: 323px;
    margin-bottom: 52px;
    border-bottom: 1px solid #808191;
`;

const List = styled.li`
    display: flex;
    align-items: center;
    margin-top: 27px;
    color: blue;
`;

const IconBox = styled.div`
    width: 32px;
    height: 32px;
    background-color: ${props => props.current ? "#ff7551" : "#808191"};
    border-radius: 12px;
    margin-right: 16px;
`;
const Icon = styled.img`
    width: 20px;
    height: 20px;
    margin: 6px 6px;
`;
const NavLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 14px;
`;

const Category = styled.ul`
    width: 100%;
    height: 259px;
    margin-bottom: 52px;
    border-bottom: 1px solid #808191;
`;

const NightMode = styled.div`
    width: 156px;
    height: 31px;
    background-image: url(${nightmode});
    background-size: cover;
    margin-top: 48px;
`;

const Navigation = withRouter(({location: {pathname}}) => {
    const [menu, setMenu] = useState(["Discover", "Trending", "Streaming", "Playlist", "Bookmark"]);
    const [category, setCategory] = useState(["LiveStream", "Tutorial", "Competition", "Community"]);
    return (
        <NavBar>
            <Title>MENU</Title>
            <Menu>
                {menu.map((item,i) => 
                    <List key={i}>
                    <IconBox current={pathname === `/${item}`}>
                        <Icon src={HomeImg} />
                    </IconBox>
                    <NavLink to={`/${item}`}>{item}</NavLink>
                </List>
                )}
            </Menu>
            <Title>CATEGORY</Title>
            <Category>
                {category.map((item, i) => 
                    <List key={i}>
                    <IconBox current={pathname === `/${item}`}>
                        <Icon src={HomeImg} />
                    </IconBox>
                    <NavLink to={`/${item}`}>{item}</NavLink>
                </List>
                )}
            </Category>
            <NightMode />
        </NavBar>
    )
})

export default Navigation;