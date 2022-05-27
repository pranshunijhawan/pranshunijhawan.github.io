import styled from 'styled-components'
import { sectionTitle } from '../types/common-css'
import TitleTrackingInOut from './animated/TitleTrackingInOut'

const Title = styled.h2`
    ${sectionTitle}
`

interface SectionTitleProps {
    content: string
}

const SectionTitle = ({
    content
    }: SectionTitleProps) => {
    
    return (
        <TitleTrackingInOut><Title>{content}</Title></TitleTrackingInOut>
    )
}

export default SectionTitle;