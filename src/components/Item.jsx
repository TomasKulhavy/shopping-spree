import React from 'react';
import { ListGroupItem, Button } from "reactstrap";

const Item = ({item, removeItem, index, setTheme, theme}) => (
    <ListGroupItem color={theme}>
        {item}
        <Button onClick={() => removeItem(index)} color="danger">Remove</Button>
        <Button onClick={() => setTheme("success")} color="success">Check</Button>
    </ListGroupItem>
)

export default Item;