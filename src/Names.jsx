import { useEffect, useState } from 'react';
import './Names.css'

// This component should stay in sync with our demo-server API.
// Our api supports:
// - Reading a list of names.
// - Adding a name to the list & save to the API
// - Delete names from the list.
// - Bonus points? Add ability to update a name?

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

    function createName(newName) { // POST a new name to the API
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

    function deleteName(id) { // send a DELETE request to the API
        const options = {
            method: "DELETE",
            mode: "cors",
        }
        const url = "http://127.0.0.1:3000/api/" + id;
        fetch(url, options)
            .then((response) => response.json())
            .then((json) => {
                console.log("Deleting gave us: ", json);
                fetchNames(); // re-create the application state from the database.
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

    // Handle the "delete name" button click
    function handleClick(event) {
        console.log("Delete: " + event.target.id);
        deleteName(event.target.id);
    }

    // Each object looks like: {id: 1, name: "brad"}
    const items = names.map((obj) => {
        return (
            <li key={'id-' + obj.id}>
                <span className="left">{obj.name}</span>
                <button id={obj.id}
                    onClick={handleClick} 
                    className="right">Delete</button>
            </li>
        );
    });

    return (
        <>
            <p>
                <strong>NOTE!</strong> {' '}
                This component requires a running API server;<br/>
                See the {' '}
                <a href="https://github.com/bradmontgomery/demo-server/">demo-server</a>
                {' '} project on Github.
            </p>
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