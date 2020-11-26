import React from "react";
import { Button } from 'reactstrap';

const Add = () => {
    const [items, setItems] = useState([]);
    return(
        <div>
            <InputGroup>
                <Input />
                <InputGroupAddon addonType="append">
                    <Button color="success" onClick="">Add</Button>
                </InputGroupAddon>
            </InputGroup>
        </div>
    )
}

export default Add;