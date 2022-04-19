import authors from "../constant/constants";

export function getRandomAuthor () {
    return authors[Math.round(Math.random() * authors.length)];
}