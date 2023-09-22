"use client";
import { UserContext } from "@/context/UserContext";
import User from "@/app/usercontext/components/User";
import { useEffect, useState } from "react";

export default function Hello() {
  // I can just call the function here
  // It is not needed to be inside useEffect
  // Neither to be in getStaticProps since we're working with app router
  const [githubContent, setGithubContent] = useState({
    name: "Loading...",
    age: 0,
  });
  useEffect(() => {
    const getGithubPage = async () => {
      const githubData = fetch("https://api.github.com/users/rubskaiserman").then((response) =>
        response.json()
      );

      return githubData;
    };

    getGithubPage().then((data) => {
      setGithubContent(data);
    });
  }, []);

  return (
    <UserContext.Provider
      value={{
        name: githubContent.name,
        age: 25,
      }}
    >
      <User />
    </UserContext.Provider>
  );
}
