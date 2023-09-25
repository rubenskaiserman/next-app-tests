import { UserContext } from "@/app/usercontext/context/UserContext";
import { useContext } from "react";

export default function User() {
  const userContext = useContext(UserContext);

  return (
    <p>
      {userContext.user.name} - {userContext.user.age}
    </p>
  );
}
