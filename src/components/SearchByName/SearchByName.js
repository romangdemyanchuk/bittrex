import React, {useState} from "react";
import { Input } from '@material-ui/core';
import './SearchByName.css'

const SearchByName = (props) => {
    const [term, setTerm] = useState("");
    const onSearchChange = (e) => {
        const term = e.target.value;
        setTerm(term);
        props.onSearchChange(term);
    };
    return (
        <form>
            <Input className="search-input" type="text" name="item"
                    placeholder="Find..."
                    value={term}
                    onChange={onSearchChange}
            />
        </form>
    )
};
export default SearchByName