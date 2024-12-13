import { Character } from "../types/character"

export interface CharacterDetailProps {
    character: Character;
    onClose: () => void;
}

const CharacterDetail = ({character, onClose}: CharacterDetailProps) => {
  return (
   <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-4">{character.name}</h2>
        <img src={character.image} alt={character.name} className="w-full mb-4" />
        <p className="text-lg">Estado: {character.status}</p>
        <p className="text-lg">Especie: {character.species}</p>
        {character.type && <p className="text-lg">Tipo: {character.type}</p>}
        <p className="text-lg">Genero: {character.gender}</p>
        <button
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </div>
  )
}
export default CharacterDetail