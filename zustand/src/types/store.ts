// I hope the point of this file will become clear? Prefer colocation of types where possible but I concede it can have source of truth issues on larger codebases

import type { CartSlice } from "@/store/cart-slice";
import type { UserSlice } from "@/store/user-slice";

export type Store = UserSlice & CartSlice;
