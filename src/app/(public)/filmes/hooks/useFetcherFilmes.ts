import { useQuery } from "@tanstack/react-query";

async function getfilmes() {
  const response = await fetch("/api/filmes");
  const data = await response.json();
  return data;
}

export function useFetcherFilmes() {
  return useQuery({
    queryKey: ["filmes"],
    queryFn: getfilmes,
    refetchOnMount: false
  });
}

