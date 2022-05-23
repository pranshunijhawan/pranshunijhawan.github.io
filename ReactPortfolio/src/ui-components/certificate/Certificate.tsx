import Button, { ButtonProps } from "../Button";
import Image, { ImageProps } from "../../ui-components/Image";
import { CertificateContainer, CertificateDetailsContainer, CertificateTitle, LogoImageContainer, RightIcon } from "./styles";

interface CertificateMetaData {
    imageProps: ImageProps,
    buttonProps: ButtonProps,
    title: string
}

export interface CertificateProps {
    certificateMetaData: CertificateMetaData[]
}

const Certificate = ({ certificateMetaData }: CertificateProps) => {

    return (
        <>
            {certificateMetaData && certificateMetaData.map((item, index) => (
                <CertificateContainer key={index}>
                    <LogoImageContainer>
                        <Image source={item.imageProps.source}
                                        height={item.imageProps.height}
                                        width={item.imageProps.width} />
                    </LogoImageContainer>
                    <CertificateDetailsContainer>
                        <CertificateTitle>{item.title}</CertificateTitle>
                        <Button link={item.buttonProps.link} name={item.buttonProps.name} icon={<RightIcon />} />
                    </CertificateDetailsContainer>
                </CertificateContainer>
            ))}
        </>
    )
}

export default Certificate;