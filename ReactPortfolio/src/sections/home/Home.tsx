import Button, { ButtonProps } from "../../ui-components/Button";
import Focus from "../../ui-components/Focus";
import Image, { ImageProps } from "../../ui-components/Image";
import { Section } from "../../ui-components/Section";
import Slide from "../../ui-components/Slide";
import { HomeContainer, HomeContent, Name, Designation, HomeIcon, Headline, LogoContainer } from "./styles";

export interface HomeSectionProps {
    name: string;
    designation: string;
    headline: string;
    buttonProps: ButtonProps;
    imageProps: ImageProps;
    visibility: boolean;
}

const contactIcon = <HomeIcon />

const HomeSection = ({
    name,
    designation,
    headline,
    buttonProps,
    imageProps,
    visibility
  }: HomeSectionProps) => {
    
    return (
        <Section id="home">
                <HomeContainer>
                    <HomeContent>
                        <Focus><Name>Hi, I'm {name}</Name></Focus>
                        <Focus><Designation>{designation}</Designation></Focus>
                        <Slide>
                            <Headline>{headline}</Headline>
                            <Button link={buttonProps.link}
                                    name={buttonProps.name} 
                                    icon={contactIcon}
                                    target={buttonProps.target} />
                        </Slide>
                        </HomeContent>
                </HomeContainer>
                <Slide>
                <LogoContainer>
                        <Image source={imageProps.source}
                            height={imageProps.height}
                            width={imageProps.width} />
                </LogoContainer>
                </Slide>
        </Section>
    )
  }
  
  export default HomeSection