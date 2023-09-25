"use client";
import { createContext, useState } from "react";

type User = {
  user: { name: string; age: number };
  setUser: any;
};

export const UserContext = createContext<User>({
  user: {
    name: "",
    age: 0,
  },
  setUser(user: { name: string; age: number }) {
    this.user.name = user.name;
    this.user.age = user.age;
  },
});

// export const UserContext = () => {
//   const [user, setUser] = useState({ name: "", age: 0 });

//   const UserContext = createContext<User>({
//     user: user,
//     setUser: setUser,
//   });

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };
