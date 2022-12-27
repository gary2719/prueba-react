import React from "react";
import { FC } from "react";
import "./counter.scss";

interface CounterProps {
  completedTasks: number;
  totalTasks: number;
}

const Counter: FC<CounterProps> = () => {
  return (
    <div className="counter">
      <span className="counter__description">
      </span>
    </div>
  );
};

export default Counter;
