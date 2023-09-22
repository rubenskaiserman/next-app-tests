import { UserContext } from "@/context/UserContext";

export default function User() {
  return (
    <UserContext.Consumer>
      {(context) => (
        <p>
          {context.name} - {context.age}
        </p>
      )}
    </UserContext.Consumer>
  );
}
