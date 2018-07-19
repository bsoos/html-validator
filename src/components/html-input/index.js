import React from "react";

export default ({ onChange, value }) => (
  <div className="html-input">
    <textarea value={value} className="text-area" onChange={onChange} />
  </div>
);
