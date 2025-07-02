import { PrismaClient } from "@/app/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  await prisma.filmes.createMany({
    data: [
      {
        titulo: "O Senhor dos Anéis",
        descricao: "Uma jornada épica pela Terra Média.",
        imagemUrl: "https://br.web.img3.acsta.net/medias/nmedia/18/92/91/32/20224832.jpg",
      },
      {
        titulo: "Matrix",
        descricao: "A realidade nem sempre é o que parece.",
        imagemUrl: "https://upload.wikimedia.org/wikipedia/pt/c/c1/The_Matrix_Poster.jpg",
      },
      {
        titulo: "Interestelar",
        descricao: "Explorando os limites do espaço e do tempo.",
        imagemUrl: "https://m.media-amazon.com/images/I/61AN97A3+fL._UF1000,1000_QL80_DpWeblab_.jpg",
      },
    ],
  });

  console.log("🎉 Filmes inseridos no banco com sucesso!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
