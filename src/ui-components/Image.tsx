export interface ImageProps {
    height: number;
    width: number;
    source: string;
    href?: string;
    onClick?: any;
}

const Image = ({ height, width, source, href, onClick }: ImageProps) => {

    const imageComponent = <img src={source} height={height} width={width} onClick={onClick} alt='Portfolio, Pranshu Nijhawan' />

    const anchorComponent = href ? <a href={href}>{imageComponent}</a> : imageComponent;

    return(
        anchorComponent
    )
}

export default Image;