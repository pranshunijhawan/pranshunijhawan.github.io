import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { hideTitle, showTitle } from "../../types/common-css";

interface TitleTrackingInOutProps {
    children: React.ReactNode;
    delay?: number
}

const SlideContainer = styled.div<{
    trackIn: boolean
    delay?: number
}>`
    ${({ trackIn }) => trackIn ? showTitle : hideTitle }
    animation-delay: ${({ delay }) => delay ? delay : 0 }s
`

const TitleTrackingInOut = ({ children, delay }: TitleTrackingInOutProps) => {
    const [ref, inView] = useInView();
    const [trackInView, setTrackInView] = useState(false);

    useEffect(() => {
        if (inView) {
            setTrackInView(true);
        } else {
            setTrackInView(false);
        }
    }, [inView])

    return (
        <SlideContainer trackIn={trackInView} delay={delay} ref={ref}>{children}</SlideContainer>
    )
}

export default TitleTrackingInOut;