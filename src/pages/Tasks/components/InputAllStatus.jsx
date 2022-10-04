import { Select, Tag } from "@arco-design/web-react";
import { useState, useEffect, useRef } from "react";
import { TASK } from "@/constants";

const InputAllStatus = (props) => {
  let total = 0;
  props.data.map((status) => {
    total += status.value;
  });

  return (
    <div className="flex">
      {props.data.map((status) => {
        let width = status.value / total * 100
        return (
        <div className={`h-6 border border-white gk-bg ${status.color}`} style={{width: `${width}%`}}></div>

        )
      })}
    </div>
  );
};

export default InputAllStatus;
