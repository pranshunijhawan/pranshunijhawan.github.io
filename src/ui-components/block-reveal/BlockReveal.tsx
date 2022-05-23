import { BlockRevealContainer, BlockRevealSpan } from "./styles";

interface BlockRevealProps {
    duration: number;
    fadeAnimationDelay: number;
    color: string;
    children?: JSX.Element;
    blockAnimationDelay: number;
    fullScreen: boolean;
    leftToRight: boolean
}

const BlockReveal = ({ duration, fadeAnimationDelay, color, children, blockAnimationDelay, fullScreen, leftToRight }: BlockRevealProps) => {

    return (
        <BlockRevealContainer duration={duration} delay={blockAnimationDelay} color={color} fullScreen={fullScreen} leftToRight={leftToRight}>
            <BlockRevealSpan duration={duration} delay={fadeAnimationDelay}>
                {children}
            </BlockRevealSpan>
        </BlockRevealContainer>
    )
}

export default BlockReveal;