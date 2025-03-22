import { AuthContextProvider } from "./_utils/authContext";

export default function Layout({ children }) {
  return <AuthContextProvider>{children}</AuthContextProvider>;
}
