import { RegistrationForm } from "../../src/registrationForm";

export function createRegistrationFormObject () {
     const registrationForm = new RegistrationForm(
      "testName",
      "testSurname",
      3750297243632,
      "testEmail@gmail.com",
      "passworD1",
      "passworD1"
    );
    return registrationForm
} 