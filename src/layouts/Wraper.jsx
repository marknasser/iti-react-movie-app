import React from "react";

function Wraper({ children, isLoading, isError }) {
  if (isLoading) {
    return <p style={{ fontSize: "60px" }}> Loading ...</p>;
  }
  if (isError) {
    return <p style={{ fontSize: "60px" }}> Error try again !</p>;
  }
  return <>{children}</>;
}

export default Wraper;
