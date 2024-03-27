import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <h4 className="flex mt-1 h-24 justify-center items-center bg-gradient-to-b text-white from-slate-500 to-slate-800">
      Made With 🤍 by {user.name}
    </h4>
  );
};

export default Footer;
