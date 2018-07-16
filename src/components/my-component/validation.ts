export const CPF_LENGTH = 11;
export const CNPJ_LENGTH = 14;
export const DIVISOR = 11;
export const CPF_WEIGHTS = [[10, 9, 8, 7, 6, 5, 4, 3, 2], [11, 10, 9, 8, 7, 6, 5, 4, 3, 2]];
export const CNPJ_WEIGHTS = [[5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2], [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]];

export function isCPFValid(cpf: string) {
  const _cpf = cpf.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  const _cpfSet = new Set(_cpf.split(''));
  if (_cpf.length !== CPF_LENGTH || _cpfSet.size === 1){
    return false
  }

  const firstPart = _cpf.substring(0, 9);
  const secondPart = _cpf.substring(0, 10);
  const firstDigit = _cpf[9];
  const secondDigit = _cpf[10];

  if (firstDigit === calculateFirstDigit(firstPart) && secondDigit === calculateSecondDigit(secondPart)){
    return true;
  }

  return false;
}

export function isCNPJValid(cnpj?: string) {
  const _cnpj = cnpj.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  const _cnpjSet = new Set(_cnpj.split(''));
  if (_cnpj.length !== CNPJ_LENGTH || _cnpjSet.size === 1){
    return false
  }

  const firstPart = _cnpj.substring(0, 12);
  const secondPart = _cnpj.substring(0, 13);
  const firstDigit = _cnpj[12];
  const secondDigit = _cnpj[13];

  if (firstDigit === calculateFirstDigit(firstPart) && secondDigit === calculateSecondDigit(secondPart)){
    return true;
  }

  return false;
}

function calculateFirstDigit(number: string): string{
  return calculateDigit(number);
}

function calculateSecondDigit(number: string): string {
  return calculateDigit(number, 2, 10);
}

function calculateDigit(number: string, digit=1, sizeToCheck=9): string {
  let sum = 0;
  let weights = (number.length === sizeToCheck) ?
    CPF_WEIGHTS[digit - 1] :
    CNPJ_WEIGHTS[digit - 1];

  for (let index = 0; index < number.length; index++) {
    sum = sum + parseInt(number[index]) * weights[index];
  }
  const restDivision = sum % DIVISOR;
  if (restDivision < 2) {
    return '0';
  }

  return String(DIVISOR - restDivision);
}
