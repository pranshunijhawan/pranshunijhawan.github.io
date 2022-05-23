export interface ImageProps {
    height: number;
    width: number;
    source: string;
}

const Image = ({ height, width, source }: ImageProps) => {

    return(
        <img src={source} height={height} width={width} />
    )
}

export default Image;