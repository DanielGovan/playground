import { useStore } from "./store/store";

function App() {
  const store = useStore();
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      {JSON.stringify(store)}
    </div>
  );
}

export default App;
