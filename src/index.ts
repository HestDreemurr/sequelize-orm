import { 
  sequelize, 
  Users,
  Products
} from "#sequelize";
import { Op } from "sequelize";
import { randomUUID } from "crypto";

sequelize.sync();
console.log("[+] Sequelize sincronizado com o Banco de Dados.");


/*
  CRUD simples com Sequelize
*/

// Criar usuário
async function saveUser() {
  const user = await Users.create({
    id: randomUUID(),
    name: "Hest",
    email: "hest@gmail.com"
  });
  
  console.log(`Usuário criado: ${JSON.stringify(user, null, 2)}\n`);
}
// saveUser();

// Procurar usuários
async function findUsers() {
  const data = await Users.findAll({
    attributes: ["name", "email"],
    where: {
      name: {
        [Op.iLike]: "%Jonh%"
      }
    }
  });
  console.log(`Usuários no banco: ${JSON.stringify(data, null, 2)}`);
}

async function findUser(email: string) {
  const data = await Users.findOne({
    where: {
      email
    }
  });
  
  console.log(`Usuário encontrado: ${JSON.stringify(data, null, 2)}`);
}
// findUser("sky@gmail.com");
// findUsers();

// Atualizar usuários
async function updateUsers() {
  await Users.update(
    { name: "Hest lindo" },
    {
      where: {
        name: "Hest"
      }
    }
  );
  
  console.log("Usuários atualizados.");
}
// updateUsers();

// Deletar usuários
async function deleteUsers() {
  await Users.destroy({
    where: {
      name: {
        [Op.iLike]: "%Jonh%"
      }
    }
  });
  
  console.log("Usuários deletados.");
}
// deleteUsers();

/*
  Associações com Sequelize
*/

async function saveProduct() {
  const data = await Products.create({
    id: randomUUID(),
    name: "Bobbie Goods",
    description: "Oh mãe, compra Bobbie Goods",
    price: 10000,
    userId: "c8afabb4-3ba5-4367-a2d1-61a657d95eba"
  });
  
  console.log(`Produto criado: ${JSON.stringify(data, null, 2)}`);
}
// saveProduct();

async function getUserProducts(email: string) {
  const user = await Users.findOne({
    where: {
      email
    },
    include: Products
  });
  
  console.log(`Usuário encontrado: ${JSON.stringify(user, null, 2)}`);
  
  // console.log(`Produtos encontrados: ${JSON.stringify(products, null, 2)}`);
}
// getUserProducts("hest@gmail.com");