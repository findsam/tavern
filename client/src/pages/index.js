import useAuth from "../hooks/useAuth";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  if (!useAuth()) return null;
  else router.push("/feed");
}
