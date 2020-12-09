import React from 'react';
import { ListGroup } from "reactstrap";
import Item from "./Item";

const List = ({value, removeItem, checkItem}) => (
  <ListGroup>
    {value.map((item, index) => (<Item index={index} item={item} removeItem={removeItem} checkItem={checkItem} />))}
  </ListGroup>
)

export default List;