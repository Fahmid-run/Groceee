
import FeautureCards from './FeautureCards';

function Features() {
  return (
    <div className="min-h-screen  px-10 md:px-40 flex items-center justify-center flex-col py-20">
      <div className="header__content text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold my-2">
          Why choose Groceee?
        </h1>
        <p className="font-light text-xs text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, hic
          nihil. Fugiat dolor itaque ipsam vero magni odit, recusandae optio.
        </p>
      </div>

      <div className="grid grid-cols-4  gap-5 lg:gap-10 mt-10 ">
        <FeautureCards></FeautureCards>
        <FeautureCards></FeautureCards>
        <FeautureCards></FeautureCards>
        <FeautureCards></FeautureCards>
      </div>
    </div>
  );
}

export default Features