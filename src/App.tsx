import ListCharacter from "./components/ListCharacter";

function App() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold py-4 my-2">Listado de Personajes</h1>
      <div className="flex flex-wrap gap-4 items-center justify-center">
        <ListCharacter />
      </div>
    </div>
  );
}

export default App;
