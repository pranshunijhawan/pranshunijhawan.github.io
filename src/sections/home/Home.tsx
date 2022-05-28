import Button, { ButtonProps } from "../../ui-components/Button";
import Focus from "../../ui-components/animated/Focus";
import { ImageProps } from "../../ui-components/Image";
import { Section } from "../../ui-components/Section";
import { HomeContainer, HomeContent, Name, Designation, HomeIcon, Headline, LogoContainer } from "./styles";
import Slide from "../../ui-components/animated/Slide";

export interface HomeSectionProps {
    name: string;
    designation: string;
    headline: string;
    buttonProps: ButtonProps;
    imageProps: ImageProps;
}

const contactIcon = <HomeIcon />

const HomeSection = ({
    name,
    designation,
    headline,
    buttonProps,
    imageProps,
  }: HomeSectionProps) => {
    
    return (
        <Section id="home">
                <HomeContainer>
                    <HomeContent>
                        <Slide><Name>Hi, I'm {name}</Name></Slide>
                        <Slide><Designation>{designation}</Designation></Slide>
                    </HomeContent>
                    <HomeContent>
                        <Slide>
                            <Headline>{headline}</Headline>
                            <Button link={buttonProps.link}
                                    name={buttonProps.name} 
                                    icon={contactIcon}
                                    target={buttonProps.target} />
                        </Slide>
                    </HomeContent>
                </HomeContainer>
        </Section>
    )
  }
  
  export default HomeSection