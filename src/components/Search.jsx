import React, { useEffect, useState } from "react";
import { Form, Col, Row } from "react-bootstrap";
import Select from "react-select";

const filterOptions = [
  { value: "all", label: "All" },
  { value: "movie", label: "Movie" },
  { value: "tv", label: "TV" },
  { value: "person", label: "Person" },
];

function Search({ dispatch, state }) {
  const [functionState, setFunctionState] = useState("");
  let defaultFilter = filterOptions.find((el) => el.value === state.filterTerm);
  // let defaultSearch = state.searchTerm;

  const setState = (type, value) => {
    dispatch({ type, value });
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      if (functionState.trim().length > 0) {
        setState("SEARCH", functionState);
      }
    }, 400);

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [functionState]);

  return (
    <Form className="p-5">
      <Row>
        <Col>
          <Form.Control
            type="text"
            placeholder="Search"
            className=" mr-sm-2"
            value={functionState}
            onChange={(e) => {
              setFunctionState(e.target.value);
              // setState("SEARCH", e.target.value.trim());
            }}
          />
        </Col>
        <Col xs={4} md={3} lg={2}>
          <Select
            defaultValue={defaultFilter}
            value={defaultFilter}
            name="gender"
            options={filterOptions}
            onChange={(val) => {
              setState("FILTER", val.value);
              setFunctionState("");
            }}
          />
        </Col>
      </Row>
    </Form>
  );
}

export default Search;
