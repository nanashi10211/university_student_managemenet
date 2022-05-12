import styled from "styled-components";
import {Link} from "react-router-dom";

const HeaderContainer = styled.div`
    display: flex;
    padding: 10px 0px;
    align-items: center;
    margin: 0px 15px;
    justify-content: space-between;
`;
const HeaderFull = styled.div`
    display: block;
    width: 100%;
    box-shadow: 0px 0px 10px -7px #484848;
`;

export const HeadersContainer = ({children}) => {
     return (<HeaderFull><HeaderContainer>{children}</HeaderContainer></HeaderFull>);
}

export const HeaderLogoConatiner = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
`;

export const LogoContainer = styled(Link)`
    width: 50px;
    height: auto;
`;
export const Title = styled.span`
    color: #333;
`;
