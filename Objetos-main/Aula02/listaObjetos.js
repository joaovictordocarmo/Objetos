const cliente = {
    nome: "Carla",
    idade: 37,
    email: "carla@email.com.br",
    telefone: ["(43)999077471", "(43)999226866"],
};

cliente.endereços = [
 {
    rua: "Vereadora Ruth Martinez Corrêa",
    número: 877,
    apartamento: false,
    casa: true,
    complemento: "Em frente a Delegacia Civil",
},
]

cliente.endereços.push({
    rua: "Jack and Rose - Titanic",
    número: 1912,
    apartamento: false,
    casa: false,
    complemento: "no fundo do mar",
});

console.log(cliente.endereços);