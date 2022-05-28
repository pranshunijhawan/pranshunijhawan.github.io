import styled from "styled-components";
import { useState } from "react";
import { blockRevealFromBottomEnter, blockRevealToTopExit, slideIn } from "../../types/common-css";

interface BlockRevealBottomTopProps {
    children: React.ReactNode;
}

const BlockRevealBottomTopContainer = styled.div<{
    enter: boolean
}>`
    ${({ enter }) => enter ? blockRevealFromBottomEnter : blockRevealToTopExit }
    transform: scaleY(0);
    transform-origin: 0% 100%;
    opacity: 1;
`

const BlockRevealBottomTop = ({ children }: BlockRevealBottomTopProps) => {
    const [enter, setEnter] = useState(true);

    setTimeout(() => {
        setEnter(false)
    }, 600);

    return (
        <BlockRevealBottomTopContainer enter={enter}>{children}</BlockRevealBottomTopContainer>
    )
}

export default BlockRevealBottomTop;