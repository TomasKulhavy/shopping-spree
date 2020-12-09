import React, { useState } from 'react';
import { Form, Button, Input, InputGroupAddon, InputGroup } from "reactstrap";

function AddItem({addItem}) {
    const [value, setValue] = useState("");
    return (
        <Form>
            <InputGroup>
            <Input placeholder="Shopping item" type="text" onChange={e => setValue(e.target.value)}/>
                <InputGroupAddon addonType="append">
                    <Button onClick={() => addItem(value) } color="success">Add</Button>
                </InputGroupAddon>
            </InputGroup>
        </Form>
    );
}
export default AddItem;