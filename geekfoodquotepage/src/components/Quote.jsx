import React from "react";
import "./Quote.css";

export const Quote = (props) => {
  return (
    <div className="container">
      <p>{props.description}</p>
      <span className="author-text">{props.author}</span>
    </div>
  );
};
