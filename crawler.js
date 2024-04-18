const axios = require('axios');
const cheerio = require('cheerio');
const { URL } = require('url');

const MAX_DEPTH = 2; // Maximum depth of recursion
const visitedUrls = new Set();

async function crawl(url, depth = 0) {
    if (depth > MAX_DEPTH || visitedUrls.has(url)) {
        return;
    }

    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);

        // Extracting links from the page
        const links = [];
        $('a').each((index, element) => {
            const link = $(element).attr('href');
            if (link && !link.startsWith('#')) {
                links.push(link);
            }
        });

        console.log(`Links found on ${url}:`, links);

        // Add the current URL to the set of visited URLs
        visitedUrls.add(url);

        // Recursively crawl the links found on the page
        for (const link of links) {
            try {
                const absoluteUrl = new URL(link, url).href;
                if (absoluteUrl.startsWith('https://en.wikipedia.org') && !visitedUrls.has(absoluteUrl)) {
                    await crawl(absoluteUrl, depth + 1);
                }
            } catch (error) {
                console.error('Error processing link:', link);
            }
        }
    } catch (error) {
        console.error('Error fetching URL:', url);
    }
}

// Replace 'https://en.wikipedia.org/wiki/Main_Page' with the URL you want to crawl
crawl('https://en.wikipedia.org/wiki/Main_Page');
