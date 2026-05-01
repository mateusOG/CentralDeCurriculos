import Link from "next/link";

export default function Home() {
  return (
    (
      <head className="container">
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="styleshet" href="../../styles/style.css" />
        <title>Home</title>
      </head>
    ),
    (
      <main className="container">
        <h1>Página Inicial</h1>
        <p className="item">
          <Link href="/curriculuns/curriculumBasic">Ver Currículo Básico</Link>
        </p>
        <p className="item">
          <Link href="/curriculuns/curriculumBackAnd">
            Ver Currículo Backend
          </Link>
        </p>
        <p className="item">
          <Link href="/curriculuns/curriculumTrainee">
            Ver Currículo Estágio
          </Link>
        </p>
      </main>
    )
  );
}
