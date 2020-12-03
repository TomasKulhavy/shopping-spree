import React from 'react';
import { ListGroupItemText, Button } from "reactstrap";

const Item = ({item, removeItem, index}) => (
    <ListGroupItemText>
        {item}
        <Button onClick={() => removeItem(index)} color="danger">Remove</Button>
    </ListGroupItemText>
)

export default Item;