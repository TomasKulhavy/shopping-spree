import React from 'react';
import { ListGroupItem, Button } from "reactstrap";

<<<<<<< HEAD
const Item = ({item, removeItem, index, checkItem, textColor}) => (
    <ListGroupItem color={textColor}>
        {item}
        <Button onClick={() => removeItem(index)} color="danger">Remove</Button>
        <Button onClick={() => checkItem(index)} color="success">Check</Button>
=======
const Item = ({item, removeItem, index}) => (
    <ListGroupItem>
        {item}
        <Button onClick={() => removeItem(index)} color="danger">Remove</Button>
>>>>>>> d4ebeb0160a51bf168e909abc56e74a8e2564c38
    </ListGroupItem>
)

export default Item;