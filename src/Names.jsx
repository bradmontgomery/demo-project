import { useEffect, useState } from 'react';

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

    useEffect(() => {
        fetchNames()
    }, []);

    // Each object looks like: {id: 1, name: "brad"}
    const items = names.map((obj) => {
        return (
            <li key={'id-' + obj.id}>
                <span>{obj.name}</span>
                <button>Delete</button>
            </li>
        );
    });

    return (
        <>
            <ul>
                {items}
            </ul>
            <form>
                <p>
                    <input placeholder="Add a name" />
                    <input type="submit" value="Add" />
                </p>
            </form>
        </>
    )
}

export default Names;