import { sequelize, Users } from "#sequelize";
import { randomUUID } from "crypto";

sequelize.sync();
console.log("Sequelize sincronizado com o Banco de Dados.");


/*
  CRUD simples com Sequelize
*/

// Criar usuário
async function saveUser() {
  const user = await Users.create({
    id: randomUUID(),
    name: "Fulano",
    email: "fulano@gmail.com"
  });
  
  console.log(`Usuário criado: ${user.name}\n`);
}
// saveUser();

// Procurar usuários
async function findUsers() {
  const data = await Users.findAll({
    attributes: ["name", "email"]
  });
  console.log(`Usuários no banco: ${JSON.stringify(data, null, 2)}`);
}

findUsers();