import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import { ref, database, onValue } from "../config/firebase.js";
import { BarLoader } from "react-spinners";

const ConfessionLists = () => {
  const [Loading, setLoading] = useState(true);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const [ConfessionLists, setConfessionLists] = useState([]);
  useEffect(() => {
    onValue(ref(database, "confessions"), (snapshot) => {
      let _data = snapshot.val();
      if (_data) {
        let _confessionLists = [];
        for (let key in _data) {
          _confessionLists.push(_data[key]);
        }
        setConfessionLists(_confessionLists);
      }
      setLoading(false);
    });
  }, []);
  return (
    <div className="flex flex-wrap  gap-10 w-2/3 justify-center mt-20 mb-10 m-auto">
      {Loading ? (
        <BarLoader size={7} height={3} color="indigo" />
      ) : ConfessionLists.length > 0 ? (
        ConfessionLists.map((item, index) => {
          let _date = new Date(item.createdAt);
          return (
            <div
              key={index}
              className="flex flex-col min-h-[320px] min-w-[280px] justify-between  border-[1px] shadow-xl border-slate-400   rounded-xl px-4 py-2"
            >
              <div className="contain_date_bote">
                <div className="heading text-center font-semibold mt-2 mb-1 text-slate-700">{`${_date.getFullYear()} ${_date.getMonth()} ${
                  months[_date.getDate()]
                }`}</div>
                <div className="note text-slate-800 text-center  text-[15px]">
                  {item.note}
                </div>{" "}
              </div>
              <div className="time  text-slate-600  text-sm">
                <Moment fromNow>{item.createdAt}</Moment>
              </div>
            </div>
          );
        })
      ) : (
        <p className="text-red-400">No confession notes</p>
      )}
    </div>
  );
};

export default ConfessionLists;
