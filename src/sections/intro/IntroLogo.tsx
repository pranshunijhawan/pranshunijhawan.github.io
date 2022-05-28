import { useState } from "react";
import BlockRevealBottomTop from "../../ui-components/animated/BlockRevealBottomTop";
import FullScreen from "../../ui-components/FullScreen";
import Image, { ImageProps } from "../../ui-components/Image";
import { IntroContainer } from "./styles";

export interface IntroProps {
    imageProps: ImageProps;
    isEnter: boolean;
}

const Intro = ({ imageProps, isEnter }: IntroProps) => {

    const [showBlockReveal, setShowBlockReveal] = useState(false);
    
    setTimeout(() => {
        setShowBlockReveal(true);
    }, 3000);
    
    return (
        <FullScreen>
            <IntroContainer enter={isEnter}>
                <Image source={imageProps.source}
                    height={imageProps.height}
                    width={imageProps.width} />
                </IntroContainer>
        </FullScreen>
    )
}

export default Intro;