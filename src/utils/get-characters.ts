import { Character } from "../types/character";

export async function getCharacters():Promise<Character[]> {
    const response = await fetch("https://rickandmortyapi.com/api/character")

    if(!response.ok) {
        throw new Error("Error al obtener los personajes");
    }

    const data = await response.json();
    return data.results.map((c: Character) => ({
        id: c.id,
        name: c.name,
        status: c.status,
        species: c.species,
        type: c.type,
        gender:c.gender,
        image:c.image,
    }));
}