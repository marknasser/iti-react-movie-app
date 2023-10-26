import React from "react";
import { Form, Col, Row } from "react-bootstrap";
import Select from "react-select";

const filterOptions = [
  { value: "all", label: "All" },
  { value: "movie", label: "Movie" },
  { value: "tv", label: "TV" },
  { value: "person", label: "Person" },
];

function Search({ dispatch, state }) {
  let defaultFilter = filterOptions.find((el) => el.value === state.filterTerm);
  let defaultSearch = state.searchTerm;

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
            value={defaultSearch}
            onChange={(e) => setState("SEARCH", e.target.value)}
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
            }}
          />
        </Col>
      </Row>
    </Form>
  );
}

export default Search;
