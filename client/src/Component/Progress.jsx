import React from "react";
import { Circle } from "rc-progress";
import { useSelector } from "react-redux";
function Progress({ id }) {
  const list = useSelector((state) => state.todos);
  const index = list.findIndex((obj) => obj.id === id);
  console.log(index);
  const time = list[index].time;
  const completed = list[index].completed;
  console.log(time);
  console.log(completed);
  const progress = (completed / time) * 100;
  return (
    <div>
      <Circle
        percent={progress}
        strokeWidth={8}
        strokeColor="#86efac"
        className="h-16 w-16"
        trailColor="#fde047"
        trailWidth={2}
      />
    </div>
  );
}

export default Progress;
