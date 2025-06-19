
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