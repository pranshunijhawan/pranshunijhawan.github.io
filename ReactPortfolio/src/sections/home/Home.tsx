import Button, { ButtonProps } from "../../ui-components/Button";
import Image, { ImageProps } from "../../ui-components/Image";
import Opacity from "../../ui-components/Opacity";
import { Section } from "../../ui-components/Section";
import { HomeContainer, HomeContent, Name, Designation, HomeIcon, Headline, LogoContainer, ChevronContainer } from "./styles";

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
                        <Name>Hi, I'm {name}</Name>
                        <Designation>{designation}</Designation>
                        <Opacity show={visibility}>
                            <Headline>{headline}</Headline>
                            <Button link={buttonProps.link}
                                name={buttonProps.name} 
                                icon={contactIcon}
                                target={buttonProps.target} />
                        </Opacity>
                    </HomeContent>
                </HomeContainer>
                <Opacity show={visibility}>
                    <LogoContainer>
                        <Image source={imageProps.source}
                            height={imageProps.height}
                            width={imageProps.width} />
                    </LogoContainer>
                </Opacity>
        </Section>
    )
  }
  
  export default HomeSection