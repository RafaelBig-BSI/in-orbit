# <img height="40" src="https://user-images.githubusercontent.com/84249945/219458363-0df46081-95bd-4878-a828-541457541cbd.png"/> Resumo
Back-end da aplicação ``in.orbit`` onde foi desenvolvido com:
  * NodeJS
  * Docker
  * PostgreSQL

# <img height="40" src="https://user-images.githubusercontent.com/84249945/219471082-bba3510e-ee6d-4a6e-bf78-d7afc692043e.png"/> Requisitos
  * Possuir NodeJS instalado: https://nodejs.org/en
  * Possuir Docker Desktop instalado: https://www.docker.com/products/docker-desktop/

# :hammer: Como utilizar
Assim que instalar os requisitos descritos, entre na pasta raiz do projeto no terminal e siga as etapas:
1) Instalar a `node_modules`
```bash
npm install
```
2) Inicie o Docker Desktop em sua máquina
3) Inicie o container com o comando: 
```bash
docker compose up -d
```
4) Semear o banco de dados
```bash
npm run seed
```
5) Iniciar a aplicação
```bash
npm run dev
```
# 📝Observações
Para visualizar o banco de dados em ação execute o comando:
```bash
npx drizzle-kit studio
```
Dessa forma, abrirá uma janela no browser para navegar no BD criado!

# <img height="40" src="https://user-images.githubusercontent.com/84249945/219471565-77dd520e-41ee-41f8-8fb9-0e259535a867.png"/> Tecnologias utilizadas
<p>
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=nodejs,ts,docker,postgresql" />
  </a>
</p>
