const objetoPessoa = {
    nome: "Carla",
    idade: 37,
    cpf: "11122233300",
    email: "carla.dutra.medeiros@escola.pr.gov.br",
    altura:"1.66"

}
//Acessando com o ponto
console.log(`O nome do cliente é ${objetoPessoa.nome} e sua idade ${objetoPessoa.idade} anos`)


//Acessando com os colchetes
console.log(
    `O nome do cliente é ${objetoPessoa["nome"]} e essa pessoa tem ${objetoPessoa["idade"]} anos.`
  );
  
  const chaves = ["nome", "idade", "cpf", "email", "altura"];
  
  chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${objetoPessoa[chave]}`);
  });

  console.log(objetoPessoa[nome])