import React, { useEffect, useReducer } from "react";
import { Form, Col, Row, Button, InputGroup } from "react-bootstrap";
import Select from "react-select";

const initialValue = { searchTerm: "", filterTerm: "" };
const reducerFn = (state, action) => {
  if (action.type === "SEARCH") {
    return { searchTerm: action.value, filterTerm: state.filterTerm };
  }
  if (action.type === "FILTER") {
    return { searchTerm: state.searchTerm, filterTerm: action.value };
  }
  return initialValue;
};

function Search() {
  const [state, dispatch] = useReducer(reducerFn, initialValue);
  const filterOptions = [
    { value: "movie", label: "Movie" },
    { value: "tv", label: "TV" },
    { value: "person", label: "Person" },
  ];

  useEffect(() => {
    console.log(state);
  }, [state]);

  const setState = (type, value) => {
    dispatch({ type, value });
  };

  return (
    <Form className="p-5">
      <Row>
        <Col>
          <Form.Control
            type="text"
            placeholder="Search"
            className=" mr-sm-2"
            onChange={(e) => setState("SEARCH", e.target.value)}
          />
        </Col>
        <Col xs={4} md={3} lg={2}>
          <Select
            name="gender"
            options={filterOptions}
            onChange={(val) => {
              setState("FILTER", val.value);
            }}
          />
        </Col>
      </Row>
    </Form>
  );
}

export default Search;
