import { trpc } from "../trpc";

export function Home() {
  const [message] = trpc.someQuery.useSuspenseQuery({
    message: "Hello world!",
  });

  return <>{message}</>;
}
