import React, { Children } from "react";
import "./page.css";

export const Website = () => {
  return (
    <div>
      <Border>This is my Webpage</Border>
      <div>Some content</div>
    </div>
  );
};

function Border({children}) {
  return <div className="border">{children}</div>;
}
