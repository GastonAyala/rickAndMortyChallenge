import { useEffect, useState } from "react";
import { Character } from "../types/character";
import { getCharacters } from "../utils/get-characters";
import { Spinner } from "./Spinner";

const ListCharacter = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const data = await getCharacters();
        setCharacters(data);
      } catch (err) {
        if (err instanceof Error) setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : error ? (
        <div className="text-red-500">
          <p>Error: {error}</p>
        </div>
      ) : (
        characters.map((c) => (
          <div
            key={c.id}
            className="max-w-sm rounded overflow-hidden shadow-lg hover:bg-slate-200"
          >
            <img className="w-full" src={c.image} alt={c.name} />
            <div className="px-6 py-2">
              <div className="font-bold text-xl mb-2">{c.name}</div>
            </div>
            <div className="text-lg py-3">
              <p className="text-gray-900 leading-none">{c.species}</p>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default ListCharacter;
