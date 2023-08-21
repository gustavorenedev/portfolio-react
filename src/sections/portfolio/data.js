import Image1 from '../../assets/projectBookClub.svg'
import Image2 from '../../assets/projectSupermarketList.svg'
import Image3 from '../../assets/projectWallet.svg'
import Image4 from '../../assets/projectAgriculturalPlanting.jpg'
import Image5 from '../../assets/projectDSList.jpg'

const data = [
    {
        id: 1,
        category: 'backend',
        image: Image1,
        title: "BookClub (Backend)",
        desc: "API feita em Node.js com a função principal de uma biblioteca virtual. O usuário pode pesquisar livros e autores, obter suas informações e favoritar os livros.",
        demo: 'http://egatortutorials.com',
        github: 'https://github.com/gustavorenedev/bookclub-api'
    },
    {
        id: 2,
        category: 'backend',
        image: Image2,
        title: "Supermarket List (Backend)",
        desc: "API em Node.js usando Express e Mongoose para conectar no MongoDB que visa organizar listas de compras de usuários do aplicativo, simplificando as compras no supermercado.",
        demo: 'http://egatortutorials.com',
        github: 'https://github.com/gustavorenedev/supermarket-list-api'
    },
    {
        id: 3,
        category: 'backend',
        image: Image3,
        title: "Wallet App (Backend)",
        desc: "Esta é uma API criada usando Node.js, Express e PostgresSQL. O objetivo principal é criar um aplicativo que controle as finanças do usuário.",
        demo: 'http://egatortutorials.com',
        github: 'https://github.com/gustavorenedev/Wallet-app-backend'
    },
    {
        id: 4,
        category: 'frontend',
        image: Image4,
        title: "Agriculture Planting (Frontend)",
        desc: "Projeto utilizando HTML, CSS e JavaScript. A ferramenta oferece informações sobre cultivos populares em cada região, auxiliando decisões informadas para uma agricultura mais eficaz.",
        demo: 'http://egatortutorials.com',
        github: 'https://github.com/gustavorenedev/GS-Code-Masters-Group'
    },
    {
        id: 5,
        category: 'backend',
        image: Image5,
        title: "DSList (Backend)",
        desc: "Desenvolvida a aplicação utiliza Java com Spring Boot para gerenciar uma lista de jogos favoritos. A aplicação consome uma API para coletar os detalhes dos jogos e os armazena em um banco de dados.",
        demo: 'http://egatortutorials.com',
        github: 'https://github.com/egattor'
    }
]

export default data