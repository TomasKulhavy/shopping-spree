import React from 'react';
import { ListGroupItem, Button } from "reactstrap";

const Item = ({item, removeItem, index}) => (
    <ListGroupItem>
        {item}
        <Button onClick={() => removeItem(index)} color="danger">Remove</Button>
    </ListGroupItem>
)

export default Item;