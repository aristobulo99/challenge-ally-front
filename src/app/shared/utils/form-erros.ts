import { AbstractControl, FormControl, FormGroup } from "@angular/forms";

export const isRequired  = (field: FormControl) => {
  if (!field?.validator) return false;

  const validator = field.validator({} as AbstractControl);
  return !!validator && validator['required'];
}

export const getFieldError = (
  field: string | FormControl,
  form?: FormGroup
): string | null => {
  const control =
    field instanceof FormControl ? field : form?.controls[field] || null;

  if (!control?.errors) return null;

  const errorMessages: Record<string, string | ((error: any) => string)> = {
    required: 'Este campo es requerido',
    minlength: (error) => `Mínimo ${error.requiredLength} caracteres.`,
    maxlength: (error) => `Máximo ${error.requiredLength} caracteres.`,
    email: (error) => `El correo electrónico no es válido. Ejemplo: usuario@dominio.com`,
    passwordMismatch: 'Las contraseñas no coinciden.'
  };

  const [errorKey, errorValue] = Object.entries(control.errors)[0];
  const errorMessage = errorMessages[errorKey];

  return typeof errorMessage === 'function'
    ? errorMessage(errorValue)
    : errorMessage || 'Error no especificado';
};