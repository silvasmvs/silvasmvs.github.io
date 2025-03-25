import Image from "next/image";
import { AnimateText } from "./components/AnimateText";
import { Label } from "./components/Label";
import { TypeText } from "./components/TypeText";
import { Link } from "./components/Link";
import { ExperienceCard } from "./components/ExperienceCard";

export default function Home() {
  return (
    <div className="grid grid-rows-[100vh_70rem_120rem_100rem_5rem] min-h-screen">
      <section className="bg-red-500 text-white flex flex-col">
        <nav className="bg-white px-48 justify-between flex flex-row min-h-[92px] items-center">
          <h1 className="text-lg text-zinc-900">MAURICIO SILVA</h1>
          <ul className="flex space-x-4 text-zinc-900">
            <li>
              <Link href="#">Início</Link>
            </li>
            <li>
              <Link href="#about">Sobre</Link>
            </li>
            <li>
              <Link href="#experiences">Experiências</Link>
            </li>
            <li>
              <Link href="#projects">Projetos</Link>
            </li>
          </ul>
        </nav>
        <div className="bg-white text-white px-48 h-full flex flex-row">
          <div className="bg-white text-white p-4 h-full justify-center items-start flex flex-col w-3/6">
            <span className="text-zinc-900 font-normal text-base font-[family-name:var(--font-montserrat)]">
              Olá, eu sou
            </span>
            <TypeText
              words={['MAURICIO SILVA']}
            />

            <div className="mt-5 flex flex-col">
              <span className="text-zinc-900">
                Converto ideias em experiências interativas 🎨
              </span>
            </div>

            <div className="flex flex-row gap-3 mt-4">
              <Link href="https://github.com/silvasmvs"><Image alt="" src="social-media/github.svg" width={24} height={24} /></Link>
              <Link href="https://www.linkedin.com/in/silvasmvs/"><Image alt="" src="social-media/linkedin.svg" width={24} height={24} /></Link>
            </div>
          </div>
          <div className="bg-white p-4 h-full w-3/6 flex justify-center items-center">
            <Image alt="" width={400} height={400} src="profile.png" />
          </div>
        </div>
      </section>
      <section id="about" className="bg-zinc-50 text-zinc-900 p-4 flex flex-col justify-start items-center py-[6rem]">
        <AnimateText className="text-2xl font-semibold">SOBRE MIM</AnimateText>

        <AnimateText className="mt-8 max-w-[700px]">
          Sou Desenvolvedor Frontend com mais de 7 anos de experiência, especializado em React.js, Next.js, React Native,
          GraphQL, Node.js e TypeScript. Tenho expertise na construção de design systems do zero, trabalhando em conjunto
          com times de design para garantir componentes reutilizáveis e acessíveis, seguindo padrões como Composition Pattern. <br /><br /> 

          Minha experiência inclui otimização de performance em aplicações React, gerenciamento avançado de estado e estratégias
          como Server-Side Rendering (SSR) e Static Site Generation (SSG) para melhorar SEO, tempo de carregamento e reduzir a
          carga no frontend. Também atuo na arquitetura modular de aplicações, refatorando sistemas monolíticos para microfrontends,
          promovendo desacoplamento, escalabilidade e melhor performance para múltiplos times. <br /><br /> 

          No backend, tenho experiência com GraphQL, BFFs e APIs REST usando Node.js, Express e TRPC, além de bancos SQL e NoSQL e
          APIs com Laravel. Possuo conhecimentos em arquitetura orientada a eventos, filas (RabbitMQ) e microserviços. Também aplico
          boas práticas de CI/CD, incluindo automação de deploy e pipelines com GitHub Actions. Tenho experiência com testes unitários
          e E2E (Jest, Testing Library, Cypress, CircleCI) e monitoramento de aplicações com Sentry. <br /><br /> 

          Além disso, tenho vivência com AWS (API Gateway, S3, Route 53, Elastic Beanstalk e CloudWatch) e estou sempre em busca de
          aprimorar a arquitetura modular, código limpo e boas práticas de desenvolvimento, focando na experiência do usuário e na
          eficiência do time de engenharia.
        </AnimateText>

        <AnimateText className="mt-8 w-[700px]">
          Algumas das tecnologias que eu trabalho:
        </AnimateText>

        <ul className="flex flex-wrap gap-2 mt-4 max-w-[700px]">
          <Label name="JavaScript" iconUrl="labels/icon-javascript.svg" />
          <Label name="Typescript" iconUrl="labels/icon-typescript.svg" />
          <Label name="React" iconUrl="labels/icon-react.svg" />
          <Label name="React Native" iconUrl="labels/icon-react.svg" />
          <Label name="GraphQL" iconUrl="labels/icon-graphql.svg" />
          <Label name="Next.js" iconUrl="labels/icon-nextjs.svg" />
          <Label name="Tailwind" iconUrl="labels/icon-tailwindcss.svg" />
          <Label name="Syled Components" iconUrl="labels/icon-styled-components.svg" />
          <Label name="Sass" iconUrl="labels/icon-sass.svg" />
          <Label name="Storybook" iconUrl="labels/icon-storybook.svg" />
          <Label name="Jest" iconUrl="labels/icon-jest.svg" />
          <Label name="Testing Library" iconUrl="labels/icon-testing-library.svg" />
          <Label name="Figma" iconUrl="labels/icon-figma.svg" />
          <Label name="Turbo Repo" iconUrl="labels/icon-turbo.svg" />
          <Label name="Capacitor.js" iconUrl="labels/icon-capacitor.svg" />
          <Label name="Trpc" iconUrl="labels/icon-trpc.svg" />
          <Label name="Node.js" iconUrl="labels/icon-node.svg" />
          <Label name="Express" iconUrl="labels/icon-express.svg" />
          <Label name="Cypress" iconUrl="labels/icon-cypress.svg" />
          <Label name="Nest.js" iconUrl="labels/icon-nestjs.svg" />
          <Label name="RabbitMq" iconUrl="labels/icon-rabbitmq.svg" />
          <Label name="Docker" iconUrl="labels/icon-docker.svg" />
          <Label name="Sentry" iconUrl="labels/icon-sentry.svg" />
        </ul>
      </section>
      <section id="experiences" className="bg-white text-zinc-900 p-[6rem] flex flex-col justify-start items-center">
        <AnimateText className="text-2xl font-semibold">
          EXPERIÊNCIAS
        </AnimateText>
        <div className="max-w-[700px] gap-1">
          <ExperienceCard
            logoUrl="logos/ClassApp.png"
            position="Engenheiro de Software Sênior"
            company="ClassApp"
            period="Ago 2023 - Jan 2025"
            tasks={[
              "Desenvolvimento e manutenção de aplicações frontend utilizando React.js, Next.js e TypeScript.",
              "Desenvolvimento e modernização de sistemas distribuídos legados por meio de microfrontends com Module Federation.",
              "Evolução e aprimoramento da arquitetura do Design System, garantindo consistência e escalabilidade.",
              "Criação de boilerplates e estruturas cross-team, facilitando a colaboração entre múltiplos times e acelerando entregas.",
              "Documentação técnica de sistemas legados e novos projetos, promovendo padronização e compartilhamento de conhecimento.",
              "Participação ativa em decisões estratégicas sobre arquitetura e escalabilidade do frontend, visando performance e manutenção a longo prazo.",
              "Otimização de performance em sistemas react legado, reduzindo o tempo de carregamento dos testes E2E mais de 20%."
            ]}
          />

          <ExperienceCard
            logoUrl="logos/ClassApp.png"
            position="Engenheiro de Software"
            company="ClassApp"
            period="Set 2020 - Ago 2023"
            tasks={[
              "Desenvolvimento e manutenção de produtos utilizando Next.js, garantindo escalabilidade e performance.",
              "Otimização e refatoração de sistemas legados em React.js, melhorando manutenibilidade e experiência do usuário.",
              "Implementação de testes unitários para aumentar a confiabilidade do código e reduzir falhas em produção.",
              "Criação e evolução do Design System, padronizando componentes e promovendo consistência na interface.",
              "Desenvolvimento de produtos internos, desde a concepção da UI até a implantação final, focando em eficiência e usabilidade."
            ]}
          />

          <ExperienceCard
            logoUrl="logos/ClassApp.png"
            position="Engenheiro de Software Júnior"
            company="ClassApp"
            period="Nov 2019 - Set 2020"
            tasks={[
              "Automatização de Processos e Fluxos de Trabalho em Customer Success e Suporte com Node.js",
              "Desenvolvimento de Dashboards e Interfaces Interativas para Melhoria de Performance das Equipes Internas",
              "Integração de Sistemas Externos para Automação de Relatórios e Análise de Dados",
              "Otimização e Evolução de Projetos Front-End em React.js com Foco em Escalabilidade e Performance",
            ]}
          />

          <ExperienceCard
            logoUrl="logos/techagr.png"
            position="Estagiário de Desenvolvimento"
            company="@Tech"
            period="Fev 2019 - Nov 2019"
            tasks={[
              "Manutenções em frontend legado utilizando Vue Js",
              "Desenvolvimento de novo layout juntamente com o time, de repaginação da plataforma web",
              "Construção de um novo frontend utilizando React js"
            ]}
          />
        </div>
      </section>
      <section id="projects" className="bg-zinc-50 text-zinc-900 p-4 flex flex-col justify-start items-center py-[6rem]">
        <div className="w-full flex justify-center items-center max-w-[900px] px-4">
          <AnimateText className="text-2xl font-semibold">PROJETOS</AnimateText>
        </div>
        
        <div className="max-w-[900px] gap-2 flex flex-wrap justify-between mt-12">
          <div className="justify-center items-start flex flex-col max-w-[410px] w-1/2 gap-3 p-4">
            <Link href="https://github.com/silvasmvs/cuidar-plus" target="_blank">
              <Image width={418} height={320} alt="" src={"projects/cuidar+.svg"}  />
              <h2 className="font-semibold text-xl mt-4">Cuidar+</h2>
            </Link>
            <span>
              O Cuidar+ é um aplicativo monorepo desenvolvido com React Native, Next.js e Node.js.
              O UX/UI foi desenvolvido no Figma e será implementado no aplicativo. O principal objetivo
              do projeto é tornar o acesso à saúde pública mais rápido e eficiente.
            </span>
            <div className="flex flex-wrap gap-2 my-4">
              
              <Label small name="Typescript" iconUrl="labels/icon-typescript.svg" />
              <Label small name="React" iconUrl="labels/icon-react.svg" />
              <Label small name="Next.js" iconUrl="labels/icon-nextjs.svg" />
              <Label small name="Tailwind" iconUrl="labels/icon-tailwindcss.svg" />
              <Label small name="Storybook" iconUrl="labels/icon-storybook.svg" />
              <Label small name="Testing Library" iconUrl="labels/icon-testing-library.svg" />
              <Label small name="Turbo Repo" iconUrl="labels/icon-turbo.svg" />
              <Label small name="Capacitor.js" iconUrl="labels/icon-capacitor.svg" />
              <Label small name="Trpc" iconUrl="labels/icon-trpc.svg" />
            </div>
          </div>
          <div className="justify-center items-start flex flex-col max-w-[410px] w-1/2 gap-2 p-4">
            <Link href="https://github.com/silvasmvs/microsservices-api" target="_blank">
              <Image width={418} height={320} alt="" src={"projects/server.svg"}  />
              <h2 className="font-semibold text-xl mt-4">Microsservices Api</h2>
            </Link>
            <span>
              Este projeto foi desenvolvido no curso, com o intuito de estudar e aplicar conceitos de microsserviços
              em uma API REST. O projeto foi dividido em 3 serviços: um serviço chamado api-gateway que recebe as requisições
              e enchaminha para a fila, e um serviço chamado micro-admin-backend que consome a fila e salva os dados no banco de dados.
            </span>
            <div className="flex flex-wrap gap-2 my-4">
              <Label small name="Typescript" iconUrl="labels/icon-typescript.svg" />
              <Label small name="Turbo Repo" iconUrl="labels/icon-turbo.svg" />
              <Label small name="Node.js" iconUrl="labels/icon-node.svg" />
              <Label small name="Nest.js" iconUrl="labels/icon-nestjs.svg" />
              <Label small name="RabbitMq" iconUrl="labels/icon-rabbitmq.svg" />
              <Label small name="AWS" iconUrl="labels/icon-aws.svg" />
            </div>
          </div>
          <div className="justify-center items-start flex flex-col max-w-[410px] w-1/2 gap-2 p-4">
            <Link href="https://github.com/silvasmvs/portfolio-ui" target="_blank">
              <Image width={418} height={320} alt="" src={"projects/portfolio.svg"}  />
              <h2 className="font-semibold text-xl mt-4">Portfólio UI</h2>
            </Link>
            <span>
              Este projeto foi desenvolvido com o intuito de estudar e foi desenvolvido
              com React.js, Next.js, TailwindCSS e TypeScript. O principal objetivo deste projeto é mostrar um pouco do meu trabalho
              e experiência com desenvolvimento frontend.
            </span>
            <div className="flex flex-wrap gap-2 my-4">
              <Label small name="Typescript" iconUrl="labels/icon-typescript.svg" />
              <Label small name="Next.js" iconUrl="labels/icon-nextjs.svg" />
              <Label small name="Tailwind" iconUrl="labels/icon-tailwindcss.svg" />
            </div>
          </div>
          <div className="justify-center items-start flex flex-col max-w-[410px] w-1/2 gap-2 p-4">
            <Link href="https://www.figma.com/design/kR0v1SS9WNen2qnk378gQC/Cuidar%2B?node-id=0-1&t=DFSUMoLzoyGCb1GA-1" target="_blank">
              <Image width={418} height={320} alt="" src={"projects/cuidar+ui.svg"}  />
              <h2 className="font-semibold text-xl mt-4">Cuidar+ UX/UI</h2>
            </Link>
            <span>
              O Cuidar+ é um projeto desenvolvido a partir do projeto realizado no curso de UX/UI.
              O principal objetivo do projeto é tornar o acesso à saúde pública mais rápida e eficiente.
              Com este projeto, os usuários podem agendar consultas, encontrar hospitais próximos e obter
              informações sobre unidades de atendimento de forma simples e intuitiva.
            </span>
            <div className="flex flex-wrap gap-2 my-4">
              <Label
                small
                name="Figma"
                iconUrl="labels/icon-figma.svg"
              />
            </div>
          </div>
        </div>        
      </section>
      <footer className="bg-zinc-950 text-white px-20 flex flex-row justify-between items-center">
      <span>Copyright 2025</span>
        <span>Desenvolvido por Mauricio Silva</span>
        
        <div className="flex flex-row justify-between items-center gap-6">
          <Link href="https://github.com/silvasmvs" target="_blank"><Image className="invert" alt="" src="social-media/github.svg" width={24} height={24} /></Link>
          <Link href="https://www.linkedin.com/in/silvasmvs/" target="_blank"><Image className="invert" alt="" src="social-media/linkedin.svg" width={24} height={24} /></Link>
        </div>
      </footer>
    </div>
  );
}
