import styled from "styled-components";
import { CenterScreen } from "../../types/common-css";
import { FaQuoteLeft } from "react-icons/fa";

export const QuoteContainer = styled.div`
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
    color: var(--title-color);
    display: inline-block;
    font-size: var(--normal-font-size);
    max-width: 470px;
    min-width: 250px;
    position: relative;
    width: 100%;
    background-color: var(--body-color);
    border-radius: 5px;
    border-top: 5px solid var(--first-color);
    margin-top: var(--mb-2);

    &*,
    &*:before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: all 0.1s ease-out;
    transition: all 0.1s ease-out;
    }
`

export const CaptionContainer = styled.div`
    padding: 7% 4% 7%;

    &::before {
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        background-color: var(--container-color);
        border-radius: 50%;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
        color: var(--first-color);
        font-size: 32px;
        font-style: normal;
        left: 50%;
        line-height: 60px;
        position: absolute;
        top: -30px;
        width: 60px;
        text-align: center;
    }
`

export const QuoteText = styled.p`
    font-style: italic;
    font-weight: 300;
    margin: 0 0 20px;
`

export const GivenBy = styled.h3`
    color: white;
    font-size: var(--h3-font-size);
    font-weight: 300;
    line-height: 24px;
    margin: 10px 0 5px;
`

export const GivenBySubTitle = styled.h4`
    font-weight: 400;
    margin: 0;
    opacity: 0.5;
`
export const Source = styled.span`
    font-size: var(--smaller-font-size);
    color: var(--text-color-light);
    word-break: break-all;
    float: right;
    color: var(--first-color);
`

export const QuoteIcon = styled(FaQuoteLeft)`
    font-size: 2rem;
    color: var(--first-color);
    margin-top: var(--mb-2);
`

export const QuoteIconContainer = styled.div`
    ${CenterScreen}
`