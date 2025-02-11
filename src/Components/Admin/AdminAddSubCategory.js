import React from "react";
import { Row, Col } from "react-bootstrap";

const AdminAddSubCategory = () => {
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">Add New SubCategory</div>
        <Col sm="8">
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="Name SubCategory"
          />
          <select name="languages" id="lang" className="select mt-3 px-2 ">
            <option value="val">First Classification </option>
            <option value="val2">Second Classification </option>
            <option value="val2">Third Classification </option>
            <option value="val2"> Fourth Classification </option>
          </select>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button className="btn-save d-inline mt-2 "> Save</button>
        </Col>
      </Row>
    </div>
  );
};

export default AdminAddSubCategory;
