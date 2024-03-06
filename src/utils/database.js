import { useEffect } from "react";
import { ref, set, onValue, database } from "../config/firebase.js";
const deleteData = () => {
  useEffect(() => {
    onValue(ref(database, "confessions/"), (snapshot) => {
      let _data = snapshot.val();
      for (let key in _data) {
        let createdAt = new Date(_data[key].createdAt);
        createdAt.setDate(createdAt.getDate() + 1);
        if (new Date() >= createdAt) {
          set(ref(database, "confessions/" + key), null);
        }
      }
    });
  }, []);
};

export default deleteData;
