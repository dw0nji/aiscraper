// server.js
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import Scraper from './scraper.js'; // Adjust the import based on your directory structure


const app = express();
const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../../build')));


// API route for scraping
app.get('/api/scrape', async (req, res) => {
    const urlToScrape = req.query.url;
    console.log("scraping");

    if (!urlToScrape) {
        return res.status(400).send('URL parameter is required.');
    }

    try {
        const scraper = new Scraper(urlToScrape);
        await scraper.scrapeURL();
        const scrapedData = await scraper.processAI();
        
        

        res.json(scrapedData);
    } catch (error) {
        res.status(500).send('Error scraping the data.');
    }
});


// The "catchall" handler: for any request that doesn't match one above,
// send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'../..//build/', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
