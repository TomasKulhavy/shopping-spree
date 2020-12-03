import React from 'react';
import { ListGroup, ListGroupItemText } from "reactstrap";

function List({list}) {
  return list.map ((item) => {
    return (
      <ListGroup>
        <ListGroupItemText>
          {item}
        </ListGroupItemText>
      </ListGroup>
    );
  });
}
export default List;