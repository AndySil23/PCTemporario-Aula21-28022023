// let x = 1

// while (x <= 10){
//     x++;
// }

// let nome = "Lane";
// nome += " da Silva";

let contatos = [
    {
        nome: "Andy",
        telefone: "(00)00000-0000"
    },
    

    {
        nome: "Priscilla",
        telefone: "(11)11111-1111"
    },
    

    {
        nome: "Sidney",
        telefone: "(22)22222-2222"
    },
    

    {
        nome: "Henry",
        telefone: "(33)33333-3333"
    },
    

    {
        nome: "Luanna",
        telefone: "(44)44444-4444"
    },
    

    {
        nome: "Roger",
        telefone: "(55)55555-5555"
    },
    

    {
        nome: "Morgana",
        telefone: "(66)66666-6666"
    },
    

    {
        nome: "Leonardo",
        telefone: "(77)77777-7777"
    },

    {
        nome: "Noah",
        telefone: "(88)88888-8888"
    },

    {
        nome: "Diana",
        telefone: "(99)99999-9999"
    },
    {
        nome: "Tomas",
        telefone: "(99)99999-9999"
    }
    ];

function exibir(cadaContato){
    lista.innerHTML += `<li><strong>${cadaContato.nome}: </strong>${cadaContato.telefone}</li>`;
};


contatos.forEach(exibir);


// for (x = 0; x <= 9; x++){
//     lista.innerHTML += `<li><strong>${contatos[x].nome}: </strong>${contatos[x].telefone}</li>`;
// }






