import { urlFor } from "lib/sanity";

const ImagesContainer = ({ image }) => {
  return (
      <img src={urlFor(image)} className="w-full h-full object-cover"/>
  );
};

export default ImagesContainer;
