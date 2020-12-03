import React from 'react';
import { ListGroup } from "reactstrap";
import Item from "./Item";

const List = ({value, removeItem}) => (
  <ListGroup>
    {value.map((item, index) => (<Item index={index} item={item} removeItem={removeItem} />))}
  </ListGroup>
)

export default List;