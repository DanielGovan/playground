import { type StateCreator } from "zustand";
import type { Store } from "@/types/store";
// import {create} from "zustand"; // (complex nested mutations demo below)

type UserState = {
  userName: string;
  fullName: string;
  age: number;
  address: string;
};

type UserActions = {
  setAddress: (address: string) => void;
};

export type UserSlice = UserState & UserActions;

export const createUserSlice: StateCreator<
  Store,
  [["zustand/immer", never]],
  [],
  UserSlice
> = (set) => ({
  address: "",
  age: 0,
  fullName: "",
  userName: "",
  setAddress: (address) =>
    set((state) => {
      state.address = address;
    }),
  // setAddress: (address) => set(() => ({ address })), // aka setAddress: (address) => set((state) => ({ ...state, address })), but only 1 level deep
});

// Demo of using nested complex state mutations, makes it much more complicated, not reccomended, keep the structures flat!
// const useCountStore = create<{ nested: { count: number }; inc: () => void }>(
//   (set) => ({
//     nested: { count: 0 },
//     inc: () =>
//       set((state) => ({
//         nested: { ...state.nested, count: state.nested.count + 1 },
//       })),
//   })
// );
