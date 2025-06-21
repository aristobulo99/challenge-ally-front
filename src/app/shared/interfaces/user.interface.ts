
export interface CreateUser{
    names: string;
    lastNames: string;
    email: string;
    password: string;
}

export interface User extends CreateUser {
    id: number;
    createDate: Date;
    updateDate: Date;
}

export interface UserLogins {
    loginCreate: Date,
    ipAdress: string
}

export interface Users extends User {
    userLogins?: UserLogins
}