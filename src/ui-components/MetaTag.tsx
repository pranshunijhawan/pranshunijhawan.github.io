import MetaTags from 'react-meta-tags';

interface MetaDetail {
    metaName: string;
    metaContent: string;
}

export interface MetaTagProps {
    metaDetails: MetaDetail[]
}

const MetaTag = ({ metaDetails }: MetaTagProps) => {
    return (
        <MetaTags>
            {metaDetails && metaDetails.map((item) => (
                <meta name={item.metaName} content={item.metaContent} />
            ))}
        </MetaTags>
    )
}

export default MetaTag;