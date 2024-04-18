# Web Crawler

A lightweight and configurable web crawler built with Node.js.

<img width="1512" alt="Screenshot 2024-04-17 at 7 13 38 PM" src="https://github.com/shuddha2021/nodejs-crawler/assets/81951239/bf1726aa-27a2-450a-9ed6-95b6e282edfa">

## Description

This crawler recursively extracts links from websites using Node.js, Axios, and Cheerio. It respects depth limits and avoids duplicate visits for efficient crawling.


## Features

- Asynchronous operation for optimal performance
- Recursive link extraction with configurable depth
- Deduplication of visited URLs
- Targeted crawling capability (e.g., specific domain)
- Extensible codebase for easy customization
- Error handling and reporting

## Technologies

- Node.js
- Axios (HTTP requests)
- Cheerio (HTML parsing)

## Implementation

The crawler fetches and parses HTML using Axios and Cheerio, respectively. It maintains a set of visited URLs and recursively follows links within the configured depth limit and target domain. The process continues until all links are crawled or the maximum depth is reached.

## Usage

1. Clone the repository
2. Install dependencies: `npm install`
3. Configure `MAX_DEPTH` and `targetDomain` in `crawler.js`
4. Run: `node crawler.js`

## Contributing

Contributions are welcome! Open issues or submit pull requests.

## License

[MIT License](LICENSE)
