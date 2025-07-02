import prisma from "@/app/lib/prisma";

export async function GET() {
  const filmes = await prisma.filmes.findMany({});
  //se esta autenticado, busca na tabela favorito: filmes favoritasdos
  return Response.json(filmes);
}


