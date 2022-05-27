import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { scaleInElement, scaleOutElement } from "../../types/common-css";

interface ScaleProps {
    children: React.ReactNode;
    delay?: number
}

const FocusContainer = styled.div<{
    scaleIn: boolean
    delay?: number
}>`
    ${({ scaleIn }) => scaleIn ? scaleInElement : '' }
    animation-delay: ${({ delay }) => delay ? delay : 0 }s
`

const Scale = ({ children, delay }: ScaleProps) => {
    const [ref, inView] = useInView();
    const [scaleIn, setScaleIn] = useState(false);

    useEffect(() => {
        if (inView) {
            setScaleIn(true);
        } else {
            setScaleIn(false);
        }
    }, [inView])

    return (
        <FocusContainer scaleIn={scaleIn} delay={delay} ref={ref}>{children}</FocusContainer>
    )
}

export default Scale;