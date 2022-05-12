import styled, {css} from "styled-components";
import { Link } from "react-router-dom";

const loginLinkStyle = css`
    background-color: #eaeaea;
    border-radius: 5px;
    padding: 10px 15px;
    &:hover {
        background-color: #282639;
        color: #fff;
    }
`;

const activeStyle = css`
    color: #fff;
    background: #d21f1f;
  
`;

const pageLinkStyle = css`
    border-radius: 15px;
    padding: 5px 10px;
    margin-right: 15px;
    &:hover {
       ${activeStyle}
    }
`;

const getButtonStyles = props => {
    return props.login ? loginLinkStyle : pageLinkStyle;
};

const getActiveStyles = props => {
    return props.active ? activeStyle : "";
}


export const Option = styled(Link)`
    display: inline-block;
    color: #333;
    font-size: 16px;
    text-transform: capitalize;
    transition: all linear 0.1s;
    ${getButtonStyles}
    ${getActiveStyles}
`;


export const HomePageMenuContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const OptionsContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    &:last-child {
        margin-right: 0px;
    }
`;


