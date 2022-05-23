import styled from 'styled-components'
import { sectionTitle } from '../types/common-css'

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
        <Title>{content}</Title>
    )
}

export default SectionTitle;