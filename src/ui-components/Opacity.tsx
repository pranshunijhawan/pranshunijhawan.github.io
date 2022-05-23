import React from "react";
import styled from "styled-components";

const OpacityComponent = styled.div<{
    show: boolean;
}>
`
    opacity: ${({ show }) => show ? '1': '0' };
    transition: opacity 1s, visibility 1s;
`

interface OpacityProps {
    show: boolean
    children: React.ReactNode
}

const Opacity = ({ show, children }: OpacityProps) => {

    return (
        <OpacityComponent show={show}>{children}</OpacityComponent>
    )
}

export default Opacity;