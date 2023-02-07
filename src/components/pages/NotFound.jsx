import { TbError404Off } from "react-icons/tb";

function NotFound() {
  return (
    <div className="hero">
      <div className="text-center hero-content">
        <TbError404Off className="w-40 h-40" />
        <p className="font-bold text-5xl ">Oops! Page not found</p>
      </div>
    </div>
  );
}

export default NotFound;
