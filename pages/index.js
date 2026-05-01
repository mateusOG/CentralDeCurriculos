import Link from "next/link";

export default function Home() {
  return (
    (
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="styleshet" href="../../styles/style.css" />
        <title>Home</title>
      </head>
    ),
    (
      <main>
        <h1>Página Inicial</h1>
        <Link href="/curriculumBasic/curriculumBasic">
          Ver Currículo Básico
        </Link>

        <Link href="/curriculumBasic/curriculumBackAnd">
          Ver Currículo Backend
        </Link>
      </main>
    )
  );
}
