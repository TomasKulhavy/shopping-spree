import React from 'react';
import { ListGroupItem, Button } from "reactstrap";

const Item = ({item, removeItem, index, checkItem, textColor}) => (
    <ListGroupItem color={textColor}>
        {item}
        <Button onClick={() => removeItem(index)} color="danger">Remove</Button>
        <Button onClick={() => checkItem(index)} color="success">Check</Button>
    </ListGroupItem>
)

export default Item;