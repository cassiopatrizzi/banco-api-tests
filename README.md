# BANCO-API-TESTS

Este projeto tem como objetivo praticar e demonstrar a criação de testes automatizados em Node.js utilizando **Mocha**, **Chai** e **Supertest**.  
O foco principal é validar endpoints de autenticação, como o `/login`.

## 📌 Tecnologias Utilizadas
- [Mocha](https://mochajs.org/) - Framework de testes em JavaScript  
- [Chai](https://www.chaijs.com/) - Biblioteca de asserções  
- [Supertest](https://github.com/ladjs/supertest) - Testes de integração para APIs HTTP 

## 📂 Estrutura do Projeto
```
BANCO-API-TESTS
├── node_modules/
├── test/
│   └── login.test.js # Testes do endpoint de login
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## 🚀 Como executar o projeto

1. **Clonar o repositório**
    ```bash
    git clone https://github.com/cassiopatrizzi/banco-api-tests.git
    cd BANCO-API-TESTS
    ```

2. **Instalar as dependências**
    ```bash
    npm install
    ```

3. **Executar os testes**
    ```bash
    npm test
    ```