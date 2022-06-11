import styled from "styled-components";
import { focusIn } from "../../types/common-css";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

interface FocusProps {
    children: React.ReactNode;
    delay?: number
}

const FocusContainer = styled.div<{
    focus: boolean
    delay?: number
}>`
    ${({ focus }) => focus ? focusIn : '' }
    animation-delay: ${({ delay }) => delay ? delay : 0 }s;
    opacity: 0;
`

const Focus = ({ children, delay }: FocusProps) => {
    const [ref, inView] = useInView();
    const [inFocus, setInFocus] = useState(false);

    useEffect(() => {
        if (inView) {
            setInFocus(true);
        } else {
            setInFocus(false);
        }
    }, [inView])

    return (
        <FocusContainer focus={inFocus} delay={delay} ref={ref}>{children}</FocusContainer>
    )
}

export default Focus;