import { useEffect } from "react";

const userTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, []);
  return;
};

export default userTitle;
