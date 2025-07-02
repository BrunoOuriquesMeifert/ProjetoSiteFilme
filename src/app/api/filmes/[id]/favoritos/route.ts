import { authOptions } from "@/app/lib/authOptions";
import prisma from "@/app/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest,
  { params }: any) {

  const session = await getServerSession(authOptions);

  if (!session?.user) {
    throw new Error("Usuário precisa estar autenticado");
  }
  // verificar se o filme está favoritado ou não
  await prisma.favorito.create({
    data: {
      filme_id: Number(params.id),
      usuario_id: parseInt(session.user.id),
    },
  });

  return Response.json({});
}