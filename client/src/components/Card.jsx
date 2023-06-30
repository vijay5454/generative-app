import { download } from "../assets";
import { downloadImage } from "../utils";

const Card = ({ _id, name, prompt, photo }) => {
  return (
    <div className="relative rounded-md group shadow-card hover:shadow-cardhover card">
      <img
        src={photo}
        alt={prompt}
        className="w-full h-auto object-cover rounded-md"
      />
      <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
        <p className="text-white text-base overflow-y-auto capitalize">
          {prompt}
        </p>
        <div className="flex justify-between items-center gap-2 mt-5">
          <div className="flex justify-center items-center gap-3">
            <div className="text-white bg-green-600 rounded-full w-7 h-7 flex justify-center items-center">
              {name[0]}
            </div>
            <p className="text-sm text-white">{name}</p>
          </div>
          <button
            className=""
            type="button"
            onClick={() => {
              downloadImage(_id, photo);
            }}
          >
            <img
              src={download}
              alt="download button"
              className="w-6 h-6 object-contain invert"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
