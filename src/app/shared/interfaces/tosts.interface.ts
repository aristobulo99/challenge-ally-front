
export interface ToastsContent {
    title?: string,
    message?: string,
    type: 'confirm' | 'warning' | 'error';
    active: boolean,
    duration: number
}