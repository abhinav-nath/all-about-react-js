import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", onLocationChange);

    // clean-up
    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []); // run only when this component is first rendered

  return currentPath === path ? children : null;
};

export default Route;
