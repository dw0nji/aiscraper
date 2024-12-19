
import React, { useState} from "react";
import axios from 'axios';

function Tool(){
    //const instance = new scraper();
    const [url, setUrl] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [response, setResponse] = useState(null);


    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log("submitted");
        setSubmitted(true);
        
        try {
            // Make a request to your backend scraping API
            const scrapedData = await axios.get('http://localhost:5000/api/scrape', {
                params: { url }
            });
            const responseString = JSON.stringify(scrapedData.data, null, 2); // Adjust the path if needed

            setResponse(responseString);
            console.log("received response" + responseString);


        } catch (error) {
            console.error('Error during scraping:', error);

        }

    };

    // Handle input changes
    const handleChange = (e) => {
        setUrl(e.target.value);
    };

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        <input
                            type="text"
                            id="url"
                            name="url"
                            value={url}
                            onChange={handleChange}
                            className="border border-gray-300 mt-5"
                        />
                    </label>
                    <br/>
                    <button type="submit"
                            className="text-white m-5 bg-gradient-to-r from-teal-300 via-teal-400 to-teal-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg px-8 py-4 text-center me-2 mb-2">
                        Submit.
                    </button>

                    {submitted && <p>Thank you for submitting please wait.</p>}
                    {response && <p>{response}</p>}

                </form>
            </div>
        </>
    );

}

export default Tool;