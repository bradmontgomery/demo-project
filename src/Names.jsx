import { useEffect, useState } from 'react';
import './Names.css'

// This component should stay in sync with our demo-server API.
// Our api supports:
// - Reading a list of names.
// - TODO: Adding a name to the list & save to the API
// - TODO: Delete names from the list.

function Names() {
    const [ names, setNames ] = useState([])

    function fetchNames() { // GET the list of names from the API
        const myRequest = new Request("http://127.0.0.1:3000/api");
        fetch(myRequest)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setNames(json);
            });
    }

    function createName(newName) {
        const options = {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name: newName})
        }
        fetch("http://127.0.0.1:3000/api", options)
            .then((response) => response.json())
            .then((json) => {
                // update the application state
                setNames([
                    ...names,
                    json
                ])
            })
    }


    useEffect(() => {
        fetchNames()
    }, []);

    // Handle form submission
    function handleSubmit(event) {
        event.preventDefault();
        createName(event.target.name.value);
    }

    // Each object looks like: {id: 1, name: "brad"}
    const items = names.map((obj) => {
        return (
            <li key={'id-' + obj.id}>
                <span className="left">{obj.name}</span>
                <button className="right">Delete</button>
            </li>
        );
    });

    return (
        <>
            <ul>
                {items}
            </ul>
            <form onSubmit={handleSubmit}>
                <p>
                    <input name="name" placeholder="Add a name" type="text" />
                    <input type="submit" value="Add" />
                </p>
            </form>
        </>
    )
}

export default Names;