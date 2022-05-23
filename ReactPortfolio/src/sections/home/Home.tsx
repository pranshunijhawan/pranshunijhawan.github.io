import { useEffect, useState } from "react";
import BlockReveal from "../../ui-components/block-reveal/BlockReveal";
import Button, { ButtonProps } from "../../ui-components/Button";
import Chevron from "../../ui-components/Chevron";
import Image, { ImageProps } from "../../ui-components/Image";
import Motion from "../../ui-components/Motion";
import Opacity from "../../ui-components/Opacity";
import { Section } from "../../ui-components/Section";
import { HomeContainer, HomeContent, Name, Designation, HomeIcon, Headline, LogoContainer, ChevronContainer } from "./styles";

export interface HomeSectionProps {
    name: string;
    designation: string;
    headline: string;
    buttonProps: ButtonProps;
    imageProps: ImageProps
}

const contactIcon = <HomeIcon />

const HomeSection = ({
    name,
    designation,
    headline,
    buttonProps,
    imageProps
  }: HomeSectionProps) => {

    const [visibility, setVisibility] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setVisibility(true);
        }, 4200);
    });
    
    return (
        <Motion>
            <Section id="home">
                <HomeContainer>
                    <HomeContent>
                        <BlockReveal color='var(--first-color)' children={<Name>Hi, I'm {name}</Name>} duration={2} fadeAnimationDelay={1.3} blockAnimationDelay={1} fullScreen={false} leftToRight={true} />
                        <BlockReveal color='var(--text-color)' children={<Designation>{designation}</Designation>} duration={2} fadeAnimationDelay={3}
                        blockAnimationDelay={2} fullScreen={false} leftToRight={true} />
                        <Opacity show={visibility}>
                            <Headline>{headline}</Headline>
                            <Button link={buttonProps.link}
                                name={buttonProps.name} 
                                icon={contactIcon} />
                        </Opacity>
                    </HomeContent>
                </HomeContainer>
                <Opacity show={visibility}>
                    <LogoContainer>
                        <Image source={imageProps.source}
                            height={imageProps.height}
                            width={imageProps.width} />
                    </LogoContainer>
                    <ChevronContainer>
                        <Chevron />
                        <Chevron />
                        <Chevron />
                    </ChevronContainer>
                </Opacity>
            </Section>
        </Motion>
    )
  }
  
  export default HomeSection