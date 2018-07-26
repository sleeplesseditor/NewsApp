const key = require('./config/keys').newsKey;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`;

export async function getNews() {
    let result = await fetch(url)
        .then(res => res.json());
    return result.articles;
}