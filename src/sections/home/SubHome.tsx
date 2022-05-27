import Button, { ButtonProps } from "../../ui-components/Button";
import Focus from "../../ui-components/animated/Focus";
import Image, { ImageProps } from "../../ui-components/Image";
import Slide from "../../ui-components/animated/Slide";
import { HomeContainer, HomeContent, Name, Designation, HomeIcon, Headline, LogoContainer, SubHomeContainer } from "./styles";

export interface HomeSectionProps {
    name: string;
    designation: string;
    headline: string;
    buttonProps: ButtonProps;
    imageProps: ImageProps;
}

const contactIcon = <HomeIcon />

const SubHomeSection = ({
    headline,
    buttonProps,
    imageProps,
  }: HomeSectionProps) => {
    
    return (
        <>
                <SubHomeContainer>
                    <HomeContent>
                        <Slide>
                            <Headline>{headline}</Headline>
                            <Button link={buttonProps.link}
                                    name={buttonProps.name} 
                                    icon={contactIcon}
                                    target={buttonProps.target} />
                        </Slide>
                        </HomeContent>
                </SubHomeContainer>
        </>
    )
  }
  
  export default SubHomeSection