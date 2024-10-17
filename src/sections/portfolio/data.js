import Image2 from "../../assets/projectSupermarketList.svg";
import Image3 from "../../assets/projectWallet.svg";
import Image4 from "../../assets/projectAgriculturalPlanting.jpg";
import Image5 from "../../assets/projectDSList.jpg";
import Image6 from "../../assets/projectAPIUser.png";
import Image7 from "../../assets/projectSeaCare.png";
import Image8 from "../../assets/projetoMinimalAPI.png";
import Image9 from "../../assets/ProjectPersonalBuy.png";
import Image10 from "../../assets/projectCleanArch.png";

const data = [
  {
    id: 1,
    category: "backend",
    image: Image2,
    title: "Supermarket List (Backend)",
    desc: "API em Node.js usando Express e Mongoose para conectar no MongoDB que visa organizar listas de compras de usuários do aplicativo, simplificando as compras no supermercado.",
    github: "https://github.com/gustavorenedev/supermarket-list-api",
  },
  {
    id: 2,
    category: "backend",
    image: Image3,
    title: "Wallet App (Backend)",
    desc: "Esta é uma API criada usando Node.js, Express e PostgresSQL. O objetivo principal é criar um aplicativo que controle as finanças do usuário.",
    github: "https://github.com/gustavorenedev/Wallet-app-backend",
  },
  {
    id: 3,
    category: "frontend",
    image: Image4,
    title: "Agriculture Planting (Frontend)",
    desc: "Projeto utilizando HTML, CSS e JavaScript. A ferramenta oferece informações sobre cultivos populares em cada região, auxiliando decisões informadas para uma agricultura mais eficaz.",
    github: "https://github.com/gustavorenedev/GS-Code-Masters-Group",
  },
  {
    id: 4,
    category: "backend",
    image: Image5,
    title: "DSList (Backend)",
    desc: "Desenvolvida a aplicação utiliza Java com Spring Boot para gerenciar uma lista de jogos favoritos. A aplicação consome uma API para coletar os detalhes dos jogos e os armazena em um banco de dados.",
    github: "https://github.com/gustavorenedev/dslist",
  },
  {
    id: 5,
    category: "backend",
    image: Image6,
    title: "Gerenciador de Usuário (Backend)",
    desc: "Uma API criada usando uma arquitetura de 3 camadas com C#, que permite aos usuários realizar várias operações, como registro, login, gerenciamento de usuários e redefinição de senha.",
    github: "https://github.com/gustavorenedev/APIUser",
  },
  {
    id: 6,
    category: "backend",
    image: Image7,
    title: "SeaCare (Backend e Frontend)",
    desc: "Desenvolvida a aplicação SeaCare utilizando toda a arquitetura ASP.NET Core em MVC para denúncia de artefatos em praias, permite reportar localização exata de plásticos, detritos e objetos inusitados, com informações adicionais e painel de administração.",
    github: "https://github.com/gustavorenedev/SeaCareGS",
  },
  {
    id: 7,
    category: "backend",
    image: Image10,
    title: "Clean Archtecture MVC (Backend e Frontend)",
    desc: "Projeto ASP.NET Core MVC com Clean Architecture, usando .NET 8, CQRS, MediatR, DDD, e Repository Pattern. API RESTful com Swagger, JWT, Identity e EF Core com SQL Server.",
    github: "https://github.com/gustavorenedev/CleanArchMvc",
  },
  {
    id: 8,
    category: "backend",
    image: Image8,
    title: "Minimal API com JWT (Backend)",
    desc: "Está API minimalista, desenvolvida em .NET Core e C#, permite o cadastro e login de Administradores e Editores com autenticação JWT, garantindo permissões diferenciadas.",
    github: "https://github.com/gustavorenedev/minimal-API",
  },
  {
    id: 9,
    category: "backend",
    image: Image9,
    title: "PersonalBuyAPI (Backend)",
    desc: "Desenvolvida a aplicação PersonalBuy em 3 camadas em .NET Core para e-commerce, gerenciando clientes, produtos e carrinhos. Próxima etapa: integrar Machine Learning para sugestões de compra por e-mail.",
    github: "https://github.com/gustavorenedev/PersonalBuyAPI",
  },
];

export default data;
