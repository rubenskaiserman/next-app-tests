"use client";
// import { UserContext } from "@/app/usercontext/context/UserContext";
import User from "@/app/usercontext/components/User";
import { useContext, useEffect, useState } from "react";

export default function UserContextPage() {
    // const [githubContent, setGithubContent] = useState({
    //   name: "Loading...",
    //   age: 0,
    // });
    // useEffect(() => {
    //   const getGithubPage = async () => {
    //     const githubData = fetch("https://api.github.com/users/rubskaiserman").then((response) =>
    //       response.json()
    //     );

    //     return githubData;
    //   };

    //   getGithubPage().then((data) => {
    //     data.age = 30;
    //     setGithubContent(data);
    //   });
    // }, []);
    // const userContext = useContext(UserContext)
    // console.log("UserContext: ", userContext)

  return (
    <h1>
        {/* {userContext.user.name} - {userContext.user.age} */}
    </h1>
  );
}
