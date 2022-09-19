import { Button } from "@arco-design/web-react";
import { IconPause, IconPlayArrow } from "@arco-design/web-react/icon";
import { useState, useEffect } from "react";
import { displayTimeFromSeconds } from "../utils/_utils";

const InputTracking = (props) => {
  const [edit, setEdit] = useState(false);
  const [timer, setTimer] = useState(props.data);

  useEffect(() => {
    let interval = null;
    if (edit) {
      interval = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
    } else if (!edit && timer !== 0) {
      clearInterval(interval);
      console.log(timer);
    }
    return () => clearInterval(interval);
  }, [edit, timer]);

  return (
    <Button
      size="mini"
      icon={edit ? <IconPause /> : <IconPlayArrow />}
      type={edit ? "primary" : "secondary"}
      status={edit ? "success" : ""}
      className="w-full text-center"
      onClick={() => setEdit(!edit)}
    >
      {timer > 0 ? displayTimeFromSeconds(timer) : "Start"}
    </Button>
  );
};

export default InputTracking;
