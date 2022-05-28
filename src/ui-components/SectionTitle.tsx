import styled from 'styled-components'
import { sectionTitle } from '../types/common-css'
import Focus from './animated/Focus'
import Slide from './animated/Slide'

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
        <Slide><Title>{content}</Title></Slide>
    )
}

export default SectionTitle;