import { createRegistrationFormObject } from "../../utils/unit/createRegistrationFormObject";
import { describe } from "mocha";
import { expect } from "chai";

describe("Negative tests", function () {
  it("Should show error in case of registrating without email", function () {
    const registrationForm = createRegistrationFormObject();
    registrationForm.email = "";

    expect(() => registrationForm.register()).to.throw(
      "Please specify email and password."
    );
  });
  it("Should show error in case of registrating without password", function () {
    const registrationForm = createRegistrationFormObject();
    registrationForm.password = "";

    expect(() => registrationForm.register()).to.throw(
      "Please specify email and password."
    );
  });
  it("Should show error in case of registrating without email and password", function () {
    const registrationForm = createRegistrationFormObject();
    registrationForm.email = "";
    registrationForm.password = "";

    expect(() => registrationForm.register()).to.throw(
      "Please specify email and password."
    );
  });
  it("Should show error in case of registrating with password without password confirmation", function () {
    const registrationForm = createRegistrationFormObject();
    registrationForm.password = "passworD1";
    registrationForm.confirmPassword = "";

    expect(() => registrationForm.register()).to.throw(
      "Passwords do not match."
    );
  });
  it("Should show error in case of registrating with password and password confirmation that do not match", function () {
    const registrationForm = createRegistrationFormObject();
    registrationForm.password = "passworD1";
    registrationForm.confirmPassword = "passworD2";

    expect(() => registrationForm.register()).to.throw(
      "Passwords do not match."
    );
  });
  it("Should show error if password has less then 8 symbols", function () {
    const registrationForm = createRegistrationFormObject();
    registrationForm.password = "keY0123";

    expect(() => registrationForm.register()).to.throw(
      "Password must be at least 8 characters long."
    );
  });
  it("Should show error if password don't have a number", function () {
    const registrationForm = createRegistrationFormObject();
    registrationForm.password = "passworD";
    registrationForm.confirmPassword = "passworD";

    expect(() => registrationForm.register()).to.throw(
      "Password must contain at least one uppercase letter, one lowercase letter, and one number."
    );
  });
  it("Should show error if password don't have a lowercase letter", function () {
    const registrationForm = createRegistrationFormObject();
    registrationForm.password = "PASSWORD1";
    registrationForm.confirmPassword = "PASSWORD1";    

    expect(() => registrationForm.register()).to.throw(
      "Password must contain at least one uppercase letter, one lowercase letter, and one number."
    );
  });
  it("Should show error if password don't have a high case letter", function () {
    const registrationForm = createRegistrationFormObject();
    registrationForm.password = "password1";
    registrationForm.confirmPassword = "password1";        

    expect(() => registrationForm.register()).to.throw(
      "Password must contain at least one uppercase letter, one lowercase letter, and one number."
    );
  });
  it("Should register user with password that contains symbols: ~`! @#$%^&*()_-+={[}]|:;\"'<,>.?", function () {
    const registrationForm = createRegistrationFormObject();
    registrationForm.password = "passworD1~`! @#$%^&*()_-+={[}]|:;\"'<,>.?";
    registrationForm.confirmPassword = "passworD1~`! @#$%^&*()_-+={[}]|:;\"'<,>.?"; 
    registrationForm.register();

    expect(registrationForm.password).to.equal(
      "passworD1~`! @#$%^&*()_-+={[}]|:;\"'<,>.?"
    );
    expect(registrationForm.confirmPassword).to.equal(
      "passworD1~`! @#$%^&*()_-+={[}]|:;\"'<,>.?"
    );
    expect(registrationForm.isRegistred).to.equal(true);
    expect(registrationForm.isValidated).to.equal(true);
    expect(registrationForm.isActivated).to.equal(false);
  });
  it("Should show error in case of email with more then one '@'", function () {
    const registrationForm = createRegistrationFormObject();
    registrationForm.email = "userN@me@gmail.com";

    expect(() => registrationForm.register()).to.throw(
      "Please specify email using following format: username@gmail.com"
    );
  });
  it("Should show error in case of email which ends on '.'", function () {
    const registrationForm = createRegistrationFormObject();
    registrationForm.email = "testEmail@gmail.";

    expect(() => registrationForm.register()).to.throw(
      "Please specify email using following format: username@gmail.com"
    );
  });
  it("Should show error in case of email with consecutive '.' after '@'", function () {
    const registrationForm = createRegistrationFormObject();
    registrationForm.email = "testEmail@gmail..com";

    expect(() => registrationForm.register()).to.throw(
      "Please specify email using following format: username@gmail.com"
    );
  });
  it("Should show error in case of email without '@'", function () {
    const registrationForm = createRegistrationFormObject();
    registrationForm.email = "testEmailgmail..com";

    expect(() => registrationForm.register()).to.throw(
      "Please specify email using following format: username@gmail.com"
    );
  });
  it("Should show error in case of email without username before '@'", function () {
    const registrationForm = createRegistrationFormObject();
    registrationForm.email = "@gmail..com";

    expect(() => registrationForm.register()).to.throw(
      "Please specify email using following format: username@gmail.com"
    );
  });
});
