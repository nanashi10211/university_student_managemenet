import {HomePageMenuContainer, OptionsContainer, Option} from "./home-page-menu.styles";



const HomeHeader = () => (
    <HomePageMenuContainer>
        <OptionsContainer>
            <Option to="/" active="true">home</Option>
            <Option to="/about">about</Option>
            <Option to="/result">result</Option>
            <Option to="/login" login="true">Student login</Option>
        </OptionsContainer>
    </HomePageMenuContainer>
);


export default HomeHeader;


