import { FC } from "react";
import { BASE_URL } from "../../../utils";

interface IImageProps {
    src: string;
    height: string;
    alt: string;
}

const CustomImage: FC<IImageProps> = ({ src, height, alt }) => {
    return (
        <div className={`overflow-hidden ${height}`}>
            <img className="w-full h-full object-cover object-center" src={`${BASE_URL + src}`} alt={alt} />
        </div>
    );
};

export default CustomImage;
