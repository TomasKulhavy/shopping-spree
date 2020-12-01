import React from 'react';
import {ListGroup} from "reactstrap";
import Item from "./Item";

function List({list}) {
  function renderList() {
    return list.map ((item, index) => {
      return (
        <Item key={index} text={item} />
      );
    });
  }
  return(
    <ListGroup>
      {renderList()}
    </ListGroup>
  )
};
export default List;