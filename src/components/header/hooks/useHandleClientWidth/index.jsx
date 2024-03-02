import { useEffect } from "react";

export default function useHandleClientWidth({ setNavBar, setMenuForSubCategory }) {
  function handleClientWidth() {
    setNavBar(false);
    setMenuForSubCategory({
      isActive: false,
      name: ""
    });
  }

  return function displayResize() {
    useEffect(() => {
      window.addEventListener("resize", handleClientWidth);

      return () => {
        window.removeEventListener("resize", handleClientWidth);
      };
    }, []);
  };
}
