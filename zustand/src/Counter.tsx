import { Button } from "@/components/ui/button";
import { create } from "zustand";

const useStore = create<{
  count: number;
  inc: () => void;
  dec: () => void;
}>((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
}));

function Counter() {
  const store = useStore();
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <Button className="cursor-pointer" onClick={store.inc}>
        +
      </Button>
      <Count />
      <Button className="cursor-pointer" onClick={store.dec}>
        -
      </Button>
    </div>
  );
}

const Count = () => {
  const store = useStore();
  return <>{store.count}</>;
};

export default Counter;
