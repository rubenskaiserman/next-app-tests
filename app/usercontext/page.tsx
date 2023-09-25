"use client";
import User from "@/app/usercontext/components/User";
import Link from "next/link";
import { UserContext } from "./context/UserContext";
import { useContext, useEffect, useState } from "react";

export default function UserContextPage() {
  const { user, setUser }: any = useContext(UserContext);

  useEffect(() => {
    const getGithubPage = async () => {
      const githubData = fetch("https://api.github.com/users/rubskaiserman").then((response) =>
        response.json()
      );

      return githubData;
    };

    getGithubPage().then((data) => {
      data.age = 30;
      setUser({
        name: data.name,
        age: data.age,
      });
    });
  }, [user]);

  console.log(user);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <User />
    </UserContext.Provider>
  );
}
