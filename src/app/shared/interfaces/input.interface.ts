
export interface InputsContent {
    type: 'text' | 'number' | 'email' | 'password';
    label: string;
    placeholder: string;
    formControlName: string;
}