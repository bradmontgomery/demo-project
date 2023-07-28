import { useState } from 'react'
import './ApiFetcher.css'

// TODO: what should this thing do?
// 1. render a button
// 2. when clicked, fetch data from httpbin.org
// 3. when we get an HTTP response, show some content 

function ApiFetcher() {
    const [ result, setResult ] = useState("");
    const [ buttonText, setButtonText ] = useState("Get UUID");

    function sendRequest(event) {
        //console.log("sending a request...");
        setButtonText("loading...");

        const myRequest = new Request("https://httpbin.org/uuid");
        fetch(myRequest)
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                // for simplicity, add the response status to our state.
                //setResult(response.status);

                /* 
                Response from httpbin.org/uuid looks like:
                {
                    "uuid": "9eee2718-4b6f-4eca-b0c3-5c0e5a999954"
                }
                */
                setResult(json.uuid)
                setButtonText("Get another UUID")
            });
    }

    return (
        <div className="api-fetcher">
            <h1>API Fetcher...</h1>
            <button onClick={sendRequest}>{buttonText}</button>
            {result && <p>
                Here's a UUID: {result}</p>}
        </div>
    )
}

export default ApiFetcher;
