import { AiTwotoneMail } from "react-icons/ai";
import { BsFillTelephoneForwardFill, BsHeartFill, BsLinkedin } from "react-icons/bs";
import styled, { css } from "styled-components";
import { container, grid } from "../../types/common-css";
import { FaLocationArrow } from "react-icons/fa";


export const ContactMeContainer = styled.div`
    ${container}
    ${grid}

    @media screen and (min-width: 568px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: 1024px) {
        margin-left: auto;
        margin-right: auto;

        grid-template-columns: repeat(4, 1fr);
    }
`

export const IconCSS = css`
    font-size: 1.5rem;
    color: var(--first-color);
    margin-right: var(--mb-0-75);
`

export const PhoneIcon = styled(BsFillTelephoneForwardFill)`
    ${IconCSS}
`

export const EmailIcon = styled(AiTwotoneMail)`
    ${IconCSS}
`

export const LocationIcon = styled(FaLocationArrow)`
    ${IconCSS}
`

export const LinkedInIcon = styled(BsLinkedin)`
    ${IconCSS}
`

export const CopyRightContainer = styled.div`
    margin-top: 5rem;
    align-items: center;
`

export const CopyRightMessage = styled.p`
    text-align: center;
    font-size: var(--smaller-font-size);
    margin-bottom: 0;
`

export const HeartIcon = styled(BsHeartFill)`
   font-size: 0.7rem;
   color: var(--first-color);
   margin-top: 0.1rem;
`