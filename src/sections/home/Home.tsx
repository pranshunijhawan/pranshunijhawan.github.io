import Button, { ButtonProps } from "../../ui-components/Button";
import { ImageProps } from "../../ui-components/Image";
import { Section } from "../../ui-components/Section";
import { HomeContainer, HomeContent, Name, Designation, Headline } from "./styles";
import Slide from "../../ui-components/animated/Slide";
import IconType from "../../types/enums/IconTypes";

export interface HomeSectionProps {
    name: string;
    designation: string;
    headline: string;
    buttonProps: ButtonProps;
    imageProps: ImageProps;
}

const HomeSection = ({
    name,
    designation,
    headline,
    buttonProps,
    imageProps,
  }: HomeSectionProps) => {

    const scrollToBottom = () => {
        window.scrollTo(0, document.body.scrollHeight);
    }
    
    return (
        <Section id="home">
                <HomeContainer>
                    <HomeContent>
                        <Slide>
                            <Name>Hi, I'm {name}</Name>
                            <Designation>{designation}</Designation>
                        </Slide>
                    </HomeContent>
                    <HomeContent>
                        <Slide>
                            <Headline>{headline}</Headline>
                            <Button clickHandler={scrollToBottom}
                                    name={buttonProps.name} 
                                    icon={IconType.Contact}
                                    target={buttonProps.target} />
                        </Slide>
                    </HomeContent>
                </HomeContainer>
        </Section>
    )
  }
  
  export default HomeSection