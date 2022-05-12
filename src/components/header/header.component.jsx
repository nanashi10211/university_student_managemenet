import {ReactComponent as Logo } from "../../assets/logo.svg"

import HomeHeader from "./home-page-menu/home-page-menu.component";

import {HeadersContainer, HeaderLogoConatiner, LogoContainer, Title} from "./header.styles";

const Header = () => (
    <HeadersContainer>
        <HeaderLogoConatiner>
            <LogoContainer to="/">
                <Logo />
            </LogoContainer>
            <Title>Presidency University</Title>
        </HeaderLogoConatiner>
       <HomeHeader />
    </HeadersContainer>
);


export default Header;