const api = "data.json";

const dishes = [];
const searchInput = document.querySelector('#search');
const searchResults = document.querySelector('#search-results');

fetch(api)
    .then(res => res.json())
    .then(foods => {
        for (const category of foods.categories) {
            dishes.push(...category.foods);
        }
    });



function findOptions(word, data){
    return data.filter( s => {
        const regexp = new RegExp(word, 'gi');
        return s.name.match(regexp);
    });
}

function displayOptions(){
    const result = findOptions(this.value, dishes);

    const html = result.map( dishes => {
        return `<div class="search-results-block" >
        <img class="search-results-image" src="${dishes.photos[0]}">
        <div class="search-results-text-block">
            <h1 class="search-results-name">${dishes.name}</h1>
            <h3 class="search-results-desc">${dishes.description}</h3>
            <h4 class="search-results-price">---$</h4>
        </div>
    </div>`
    }).slice(0, 5).join("");

    searchResults.innerHTML = html;
}


searchInput.addEventListener('change', displayOptions);
searchInput.addEventListener('keyup', displayOptions);

