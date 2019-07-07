export class Usuario {
    id: number;
    nome: string;
    sobrenome: string;
    login: string;
    email: string;
    senha: string;
    cep: Cep;
}

export class Cep {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
}
