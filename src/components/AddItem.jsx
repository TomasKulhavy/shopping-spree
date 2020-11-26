import React from "react";
import {useState} from "react";
import { Button, Input, InputGroup, InputGroupAddon } from 'reactstrap';

const Add = props => {
    const [items, setItems] = useState([]);
    return(
        <div>
            <InputGroup>
                <Input placeholder="Shopping item" onChange={(e) => {e.target.value}}/>
                <InputGroupAddon addonType="append">
                    <Button color="success" onClick={props.setItems(props.value)}>Add</Button>
                </InputGroupAddon>
            </InputGroup>
        </div>
    )
}

export default Add;