import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { slideIn } from "../../types/common-css";

interface SlideProps {
    children: React.ReactNode;
    delay?: number
}

const SlideContainer = styled.div<{
    slideInView: boolean
    delay?: number
}>`
    ${({ slideInView }) => slideInView ? slideIn : '' }
    animation-delay: ${({ delay }) => delay ? delay : 0 }s;
    transform: translateY(50px);
    opacity: 0;
`

const Slide = ({ children, delay }: SlideProps) => {
    const [ref, inView] = useInView();
    const [slideInView, setSlideInView] = useState(false);

    useEffect(() => {
        if (inView) {
            setSlideInView(true);
        } else {
            setSlideInView(false);
        }
    }, [inView])

    return (
        <SlideContainer slideInView={slideInView} delay={delay} ref={ref}>{children}</SlideContainer>
    )
}

export default Slide;