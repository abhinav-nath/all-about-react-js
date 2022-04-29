import { useEffect } from "react";

const Route = ({ path, children }) => {
  useEffect(() => {
    const onLocationChange = () => {
      console.log("Location Change");
    };

    window.addEventListener("popstate", onLocationChange);

    // clean-up
    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []); // run only when this component is first rendered

  return window.location.pathname === path ? children : null;
};

export default Route;
