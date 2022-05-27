import styled from 'styled-components'
import { sectionTitle } from '../types/common-css'
import Focus from './animated/Focus'

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
        <Focus><Title>{content}</Title></Focus>
    )
}

export default SectionTitle;