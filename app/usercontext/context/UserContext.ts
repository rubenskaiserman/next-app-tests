import { createContext } from "react";

type User = {
  name: string;
  age: number;
};

export const UserContext = createContext<User>(undefined!);

export const UserProvider = UserContext.Provider;
