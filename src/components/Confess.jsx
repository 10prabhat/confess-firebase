import { ref, set, database } from "../config/firebase.js";
import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toast";
import deleteData from "../utils/database.js";

const Confess = () => {
  const [text, setText] = useState("");
  deleteData();
  const addConfess = () => {
    // query
    if (text) {
      // add to database
      set(ref(database, "confessions/" + uuidv4()), {
        note: text,
        createdAt: Date.now(),
      }).then((err) => {
        if (!err) {
          toast.success("Sucessfully added");
          setText("");
        } else toast.error("Failed to add on database");
      });
    } else {
      toast.warn("Empty confess field");
    }
  };

  return (
    <>
      <div className="my-1 text-center border-[1px] pb-4 pt-10 px-8 border-[#460e6eab] justify-center xl:mt-20 mx-5 mt-10  xl:w-[45%] xl:m-auto rounded-xl">
        <textarea
          className="outline-none  border-none  resize-none  w-full 
        "
          name=""
          id=""
          rows="8"
          cols="0"
          placeholder="Write confess here"
          autoFocus={true}
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></textarea>
        <br />
        <button
          className="bg-indigo-700 hover:bg-indigo-900 transition-all ease-in-out duration-150
       text-white font-semibold px-5 py-2 rounded-xl"
          onClick={() => {
            addConfess();
          }}
        >
          Confess
        </button>
      </div>
      <div className="note flex items-center gap-[4px] justify-center">
        <FaLock size={8} />
        <small className="text-[12px] my-2">
          Confess note will remain for 24 hrs
        </small>
        <ToastContainer delay={2400} />
      </div>
    </>
  );
};

export default Confess;
