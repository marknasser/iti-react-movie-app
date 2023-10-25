import React from "react";

function Wraper({ children, isLoading, isError }) {
  if (isLoading) {
    return (
      <p style={{ fontSize: "60px", textAlign: "center" }}> Loading ...</p>
    );
  }
  if (isError) {
    return (
      <p style={{ fontSize: "60px", textAlign: "center" }}>Error try again !</p>
    );
  }
  return <>{children}</>;
}

export default Wraper;
