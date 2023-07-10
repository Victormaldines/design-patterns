import { EmailValidatorProtocol } from './validation/email-validator-protocol';
import { EmailValidatorFnProtocol } from './validation/email-validator-protocol';
import { EmailValidatorClassAdapter } from './validation/email-validator-class-adapter';
import { emailValidatorFnAdapter } from './validation/email-validator-fn-adapter';

function validateEmailClass(
  email: string,
  emailValidator: EmailValidatorProtocol
): void {
  if (emailValidator.isEmail(email)) {
    console.log('is valid (CLASS)');
  } else {
    console.log('is not valid (CLASS)');
  }
}

function validateEmailFn(
  value: string,
  emailValidator: EmailValidatorFnProtocol
): void {
  if (emailValidator(value)) {
    console.log('is valid (FN)');
  } else {
    console.log('is not valid (FN)');
  }
}

const email = 'gemaplys@email.com';

validateEmailClass(email, new EmailValidatorClassAdapter());
validateEmailFn(email, emailValidatorFnAdapter);
