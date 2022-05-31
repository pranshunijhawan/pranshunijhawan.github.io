import { AiOutlineArrowRight, AiOutlineCalendar, AiTwotoneMail } from "react-icons/ai"
import { BsDownload, BsFillCloudFill, BsFillTelephoneForwardFill, BsLinkedin } from "react-icons/bs"
import { FaDatabase } from "react-icons/fa"
import { ImLocation } from "react-icons/im"
import { MdContactPhone } from "react-icons/md"
import { SiDatabricks, SiGraphql, SiJavascript } from "react-icons/si"
import styled, { css } from "styled-components"
import { buttonIcon } from "../../types/common-css"

export const SkillHeaderIconBaseCSS = css`
    font-size: 2rem;
    color: var(--first-color);
    margin-right: var(--mb-0-75);
`

export const FrontEndIcon = styled(SiJavascript)`
    ${SkillHeaderIconBaseCSS}
`

export const BackEndIcon = styled(SiGraphql)`
    ${SkillHeaderIconBaseCSS}
`

export const DatabaseIcon = styled(FaDatabase)`
    ${SkillHeaderIconBaseCSS}
`

export const CloudIcon = styled(BsFillCloudFill)`
    ${SkillHeaderIconBaseCSS}
`

export const DataEngineeringIcon = styled(SiDatabricks)`
    ${SkillHeaderIconBaseCSS}
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

export const LocationIcon = styled(ImLocation)`
    ${IconCSS}
`

export const LinkedInIcon = styled(BsLinkedin)`
    ${IconCSS}
`

export const ContactIcon = styled(MdContactPhone)`
    margin-left: var(--mb-0-5);
`

export const CertificateRightIcon = styled(AiOutlineArrowRight)`
    font-size: 1.25rem;
    margin-left: var(--mb-0-5);
    transition: 0.3s;
`

export const DownloadIcon = styled(BsDownload)`
    ${buttonIcon}
`

export const CalendarIcon = styled(AiOutlineCalendar)`
    margin-top: 0.1rem;
    font-size: var(--smaller-font-size);
    color: var(--text-color-light);
    margin-bottom: var(--mb-0-5);
`