import { IMG_CDN_URL } from "../constants";

const FoodItem = ({ name, imageId, description, price }) => {
  return (
    <div className=" p-2 m-2 shadow-2xl bg-slate-100 w-52 h-80 overflow-hidden rounded-xl ">
      <img className="h-40 w-52" src={IMG_CDN_URL + imageId} alt="image" />
      <h3 className="font-bold text-xl">{name}</h3>
      <p>{description} </p>
      <p>Rs.:{price / 100}</p>
    </div>
  );
};

export default FoodItem;
