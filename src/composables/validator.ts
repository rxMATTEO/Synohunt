type FieldName = 'Password' | 'Email' | 'Username';

export default function validateWeakness (
  password: string,
  inputName: FieldName,
  notValidMsg?: string,
  ...regexp: RegExp[]
) {
  if (!password) {
    return `${inputName} is required.`;
  }
  if (regexp.length) {
    if (regexp.find(reg => password.match(reg))) {
      return true;
    } else {
      return notValidMsg;
    }
  }
  return true;
}
