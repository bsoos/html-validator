import React from "react";

const statusMap = {
  error: "danger",
  info: "info"
};

export const getSatus = type => statusMap[type];

export const ResultListItem = ({ data }) => (
  <div className="e-row">
    <div className="e-col-12">
      <e-validator
        header={data.extract}
        subheader={data.message}
        status={getSatus(data.type)}
      />
    </div>
  </div>
);

export default ({ result = [] }) => (
  <div className="validation-output">
    <e-validator summary="Validation results" />
    {result.map((res, index) => <ResultListItem data={res} key={index} />)}
  </div>
);
