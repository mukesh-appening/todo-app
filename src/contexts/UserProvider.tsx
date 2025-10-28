import { defaultUser } from "../constants/defaultUser";
import { useIndexedDBState } from "../hooks/useIndexedDBState";
import { User } from "../types/user";
import { UserContext } from "./UserContext";

export const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useIndexedDBState<User>(defaultUser, "user");

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
