import { signIn, getSession, useSession } from "next-auth/react";

export default function checkLogin() {
  const { data: session, status } = useSession();
  if (session === null) {
    signIn();
    return session;
  }
  return session;
}
