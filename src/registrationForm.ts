export class RegistrationForm {
  firstName: string;
  secondName: string;
  pnoneNumber: string | number;
  email: string;
  password: string;
  confirmPassword: string;
  isRegistred: boolean = false;
  isActivated: boolean = false;
  isValidated: boolean = false;

  constructor(
    firstName: string,
    secondName: string,
    pnoneNumber: string | number,
    email: string,
    password: string,
    confirmPassword: string,
  ) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.pnoneNumber = pnoneNumber;
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
  }

  changeFirstName(firstName: string) {
    this.firstName = firstName;
  }
  changeSecondName(secondName: string) {
    this.secondName = secondName;
  }
  changePnoneNumber(pnoneNumber: string | number) {
    this.pnoneNumber = pnoneNumber;
  }
  changeEmail(email: string) {
    this.email = email;
    this.isValidated = false;
  }
  changePassword(password: string, confirmPassword: string) {
    this.password = password;
    this.confirmPassword = confirmPassword;
    this.isValidated = false;
  }
  register() {
    const regEmail = /^[a-zA-Z0-9._%+-]+@gmail\.com$/i;
    const regPassword = /[A-Za-z\d](?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;
    if (!this.password || !this.email) {
      throw new Error("Please specify email and password.");
    } else if (!regEmail.test(this.email)) {
      throw new Error("Please specify email using following format: username@gmail.com");
    } else if (this.password.length < 8) {
      throw new Error("Password must be at least 8 characters long.");
    } else if (!regPassword.test(this.password)) {
      throw new Error("Password must contain at least one uppercase letter, one lowercase letter, and one number.");
    } else if (this.password !== this.confirmPassword) {
      throw new Error("Passwords do not match.");
    } else {
      this.isRegistred = true;
      this.isValidated = true;
    }
  }
  activate() {
    this.isActivated = true;
  }
  deactivate() {
    this.isActivated = false;
  }
  deleteRegistrationFormData() {
    this.firstName = "";
    this.secondName = "";
    this.pnoneNumber = "";
    this.email = "";
    this.password = "";
    this.confirmPassword = "";
    this.isRegistred = false;
    this.isValidated = false;
    this.isActivated = false;
  }
}
