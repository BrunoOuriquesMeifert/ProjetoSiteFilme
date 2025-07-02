import { queryClient } from "@/app/lib/reactQuery";
import { useMutation, useQueryClient } from "@tanstack/react-query";

async function favoritarFilme(id: any) {
  const response = await fetch(`/api/filmes/${id}/favoritos`, {
    method: "POST",
  });
  if (!response.ok) {
    throw new Error("Erro ao criar postagem");
  }
  return response.json();
}

export function usefavoritoFilme() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ( { id }  ) => {
        return favoritarFilme(id);
    },
    onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [ 'filmes']
        })
    }
  });
}
