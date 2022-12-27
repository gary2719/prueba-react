import React, { FC } from "react";
import "./card.scss";
import Button from "../../atoms/button/button";

interface CardProps {
  title: string;
}

const Card: FC<CardProps> = ({ title }) => {
  return (
    <div className="card">
      <Button onClick={() => {}}>Eliminar</Button>
    </div>
  );
};

export default Card;
