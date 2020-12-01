import React, { useState } from 'react';
import { Form, Button, Input } from "reactstrap";

function AddItem({list, setList}) {
    const [value, setValue] = useState(null);
    return (
        <Form>
            <Input placeholder="Shopping item" type="text" onChange={e => setValue(e.target.value)}/>
            <Button onClick={() => setList([...list, value])} color="success">Add</Button>
        </Form>
    );
}
export default AddItem;