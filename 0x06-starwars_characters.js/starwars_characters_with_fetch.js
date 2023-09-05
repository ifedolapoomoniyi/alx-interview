#!/usr/bin/env node
//Script that returns the characters in a starwars movie
const movieId = process.argv[2];

if (!movieId) {
	console.error("Please provide a film ID as a command line argument");
	return;
}

getCharacters();

async function getCharacters() {
	const url = await fetch(
		"https://swapi-api.alx-tools.com/api/films/" + movieId
	);
	if (!url.ok) {
		console.error("Failed to fetch film data for given Id")
		return
	}
	const movie = await url.json();
	let characters = movie.characters;

    //characters returns links to each character

	characters.forEach((element) => {
		async function printCharacters() {
			const url = await fetch(element);
			const character = await url.json();
			console.log(character.name);
		}
		printCharacters();
	});
}