export default function CurriculumTrainee() {
  return (
    <div className="container">
      <header>
        <img
          src="/image/foto_mateus.jpg"
          alt="Foto de Mateus Oliveira Gil"
          className="profile-photo"
        ></img>
        <h1>Mateus Oliveira Gil</h1>
        <p className="contact-info">
          Florianópolis/SC | (51) 99310-7970
          <br />
          <a href="mailto:mateus.gill1326@gmail.com">
            mateus.gill1326@gmail.com
          </a>
          <br />
          <a
            href="https://linkedin.com/in/mateus-oliveira-gil"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/mateus-oliveira-gil
          </a>
          {" | "}
          <a
            href="https://github.com/mateusOG"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/mateusOG
          </a>
        </p>
      </header>

      <section>
        <h2>Objetivo Profissional</h2>
        <div className="section-content">
          <p>
            Estudante de tecnologia buscando{" "}
            <strong>Estágio em Desenvolvimento Full Stack</strong>. Interessado
            em contribuir com squads de desenvolvimento, aplicando conhecimentos
            em React, Node.js e testes automatizados para criar soluções
            escaláveis enquanto desenvolvo minhas competências profissionais.
          </p>
        </div>
      </section>

      <section>
        <h2>Resumo</h2>
        <div className="section-content">
          <p>
            Estudante de Análise e Desenvolvimento de Sistemas com sólida base
            técnica em ecossistemas JavaScript (React, Node.js, Next.js).
            Experiência prática com testes automatizados utilizando Jest/TDD e
            gerenciamento de infraestrutura com Docker e GitHub Actions.
          </p>
        </div>
      </section>

      <section>
        <h2>Habilidades Técnicas</h2>
        <div className="section-content">
          <div className="skills-grid">
            <div>
              <p className="item-title">Desenvolvimento & Frameworks</p>
              <span className="tag">JavaScript</span>{" "}
              <span className="tag">TypeScript</span>{" "}
              <span className="tag">React</span>{" "}
              <span className="tag">Next.js</span>{" "}
              <span className="tag">Node.js</span>{" "}
              <span className="tag">Java</span> <span className="tag">PHP</span>
            </div>
            <div>
              <p className="item-title">Ferramentas & Infraestrutura</p>
              <span className="tag">Git</span>{" "}
              <span className="tag">Docker</span>{" "}
              <span className="tag">PostgreSQL</span>{" "}
              <span className="tag">GitHub Actions</span>{" "}
              <span className="tag">Jest</span> <span className="tag">TDD</span>{" "}
              <span className="tag">CI/CD</span>{" "}
              <span className="tag">API REST</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2>Educação e Formação Profissional</h2>
        <div className="section-content">
          <div className="item">
            <span className="item-title">
              Superior de Tecnologia em Análise e Desenvolvimento de Sistemas
            </span>
            <span className="item-subtitle">
              Cruzeiro do Sul Virtual (EAD) | Fev/2024 – Atual (Previsto para
              2026)
            </span>
          </div>

          <div className="item">
            <span className="item-title">
              Formação Técnica - Sistema Industrial
            </span>
            <span className="item-subtitle">
              Escola Comendador Clemente Cífales
            </span>
            <ul>
              <li>Mecânico de Manutenção de Máquinas Industriais</li>
              <li>Programação de Máquinas CNC</li>
            </ul>
          </div>

          <div className="item">
            <span className="item-title">
              Técnico em Tecnologia da Informação
            </span>
            <span className="item-subtitle">
              QI Faculdade & Escola Técnica | Fev/2018 – Jul/2020
            </span>
          </div>
        </div>
      </section>

      <section>
        <h2>Cursos Complementares de Especialização</h2>
        <div className="section-content">
          <div className="item">
            <span className="item-title">Formação Full Stack - curso.dev</span>
            <div className="highlight-box">
              <p>
                Treinamento intensivo focado em excelência técnica e melhores
                práticas do mercado:
              </p>
              <ul>
                <li>
                  <strong>Frontend & Backend:</strong> Node.js, React e Next.js
                  com foco em performance.
                </li>
                <li>
                  <strong>Arquitetura e Qualidade:</strong> Testes
                  unitários/integração com Jest e TDD.
                </li>
                <li>
                  <strong>Infraestrutura:</strong> Docker, GitHub Actions e
                  CI/CD.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2>Trajetória Profissional</h2>
        <div className="section-content">
          <div className="item">
            <span className="item-title">
              Transição de Carreira | Setor Industrial
            </span>
            <span className="item-subtitle">2018 – Atual</span>
            <p>
              Experiência consolidada em empresas como{" "}
              <strong>Digicon, TMS e GKN Driveline</strong>. Embora de um setor
              diferente, essa trajetória me proporcionou maturidade
              profissional, capacidade de trabalhar sob pressão, disciplina com
              processos de qualidade rigorosos e facilidade em aprender novas
              ferramentas e tecnologias complexas rapidamente.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
