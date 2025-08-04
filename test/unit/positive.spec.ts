import { RegistrationForm } from "../../src/registrationForm";
import { createRegistrationFormObject } from "../../utils/unit/createRegistrationFormObject";
import { describe } from "mocha";
import { expect } from "chai";

describe("Positive tests", function () {
  it("Should create registrationForm object with valid input", function () {
    const registrationForm = createRegistrationFormObject();

    expect(registrationForm.firstName).to.equal("testName");
    expect(registrationForm.secondName).to.equal("testSurname");
    expect(registrationForm.pnoneNumber).to.equal(3750297243632);
    expect(registrationForm.email).to.equal("testEmail@gmail.com");
    expect(registrationForm.password).to.equal("passworD1");
    expect(registrationForm.confirmPassword).to.equal("passworD1");
    expect(registrationForm.isRegistred).to.equal(false);
    expect(registrationForm.isValidated).to.equal(false);
    expect(registrationForm.isActivated).to.equal(false);
  });
  it("Should create registrationForm object with empty input", function () {
    const registrationForm = new RegistrationForm("", "", "", "", "", "");

    expect(registrationForm.firstName).to.equal("");
    expect(registrationForm.secondName).to.equal("");
    expect(registrationForm.pnoneNumber).to.equal("");
    expect(registrationForm.email).to.equal("");
    expect(registrationForm.password).to.equal("");
    expect(registrationForm.confirmPassword).to.equal("");
    expect(registrationForm.isRegistred).to.equal(false);
    expect(registrationForm.isValidated).to.equal(false);
    expect(registrationForm.isActivated).to.equal(false);
  });

  it("Should register user with valid input with all fields filled", function () {
    const registrationForm = createRegistrationFormObject();
    registrationForm.register();

    expect(registrationForm.firstName).to.equal("testName");
    expect(registrationForm.secondName).to.equal("testSurname");
    expect(registrationForm.pnoneNumber).to.equal(3750297243632);
    expect(registrationForm.email).to.equal("testEmail@gmail.com");
    expect(registrationForm.password).to.equal("passworD1");
    expect(registrationForm.confirmPassword).to.equal("passworD1");
    expect(registrationForm.isRegistred).to.equal(true);
    expect(registrationForm.isValidated).to.equal(true);
    expect(registrationForm.isActivated).to.equal(false);
  });
  it("Should register user with valid input without First Name", function () {
    const registrationForm = new RegistrationForm(
      "",
      "testSurname",
      3750297243632,
      "testEmail@gmail.com",
      "passworD1",
      "passworD1"
    );
    registrationForm.register();

    expect(registrationForm.firstName).to.equal("");
    expect(registrationForm.isRegistred).to.equal(true);
    expect(registrationForm.isValidated).to.equal(true);
    expect(registrationForm.isActivated).to.equal(false);
  });
  it("Should register user with valid input without Second Name", function () {
    const registrationForm = new RegistrationForm(
      "testName",
      "",
      3750297243632,
      "testEmail@gmail.com",
      "passworD1",
      "passworD1"
    );
    registrationForm.register();

    expect(registrationForm.secondName).to.equal("");
    expect(registrationForm.isRegistred).to.equal(true);
    expect(registrationForm.isValidated).to.equal(true);
    expect(registrationForm.isActivated).to.equal(false);
  });
  it("Should register user with valid input without Phone Number", function () {
    const registrationForm = new RegistrationForm(
      "testName",
      "testSurname",
      "",
      "testEmail@gmail.com",
      "passworD1",
      "passworD1"
    );
    registrationForm.register();

    expect(registrationForm.pnoneNumber).to.equal("");
    expect(registrationForm.isRegistred).to.equal(true);
    expect(registrationForm.isValidated).to.equal(true);
    expect(registrationForm.isActivated).to.equal(false);
  });
  it("Should register user with valid input without First Name, Second Name and Phone Number", function () {
    const registrationForm = new RegistrationForm(
      "",
      "",
      "",
      "testEmail@gmail.com",
      "passworD1",
      "passworD1"
    );
    registrationForm.register();

    expect(registrationForm.firstName).to.equal("");
    expect(registrationForm.secondName).to.equal("");
    expect(registrationForm.pnoneNumber).to.equal("");
    expect(registrationForm.isRegistred).to.equal(true);
    expect(registrationForm.isValidated).to.equal(true);
    expect(registrationForm.isActivated).to.equal(false);
  });
  it("Should change First Name", function () {
    const registrationForm = createRegistrationFormObject();
    registrationForm.changeFirstName("newFirstName");

    expect(registrationForm.firstName).to.equal("newFirstName");
  });
  it("Should change Second Name", function () {
    const registrationForm = createRegistrationFormObject();
    registrationForm.changeSecondName("newSecondName");

    expect(registrationForm.secondName).to.equal("newSecondName");
  });
  it("Should change email", function () {
    const registrationForm = createRegistrationFormObject();
    registrationForm.changeEmail("newTestEmail@gmail.com");

    expect(registrationForm.email).to.equal("newTestEmail@gmail.com");
    expect(registrationForm.isValidated).to.equal(false);
  });
  it("Should change password", function () {
    const registrationForm = createRegistrationFormObject();
    registrationForm.changePassword("newPassword1", "newPassword1");

    expect(registrationForm.password).to.equal("newPassword1");
    expect(registrationForm.confirmPassword).to.equal("newPassword1");
    expect(registrationForm.isValidated).to.equal(false);
  });
  it("Should change Phone Number", function () {
    const registrationForm = createRegistrationFormObject();
    registrationForm.changePnoneNumber(79262025630);

    expect(registrationForm.pnoneNumber).to.equal(79262025630);
  });
  it("Should delete registration form data", function () {
    const registrationForm = createRegistrationFormObject();
    registrationForm.register();
    registrationForm.activate();
    registrationForm.deleteRegistrationFormData();

    expect(registrationForm.firstName).to.equal("");
    expect(registrationForm.secondName).to.equal("");
    expect(registrationForm.pnoneNumber).to.equal("");
    expect(registrationForm.email).to.equal("");
    expect(registrationForm.password).to.equal("");
    expect(registrationForm.confirmPassword).to.equal("");
    expect(registrationForm.isRegistred).to.equal(false);
    expect(registrationForm.isValidated).to.equal(false);
    expect(registrationForm.isActivated).to.equal(false);
  });
  it("Should deactivate user", function () {
    const registrationForm = createRegistrationFormObject();
    registrationForm.register();
    registrationForm.activate();
    registrationForm.deactivate();

    expect(registrationForm.isActivated).to.equal(false);
  });
  it("Should activate user", function () {
    const registrationForm = createRegistrationFormObject();
    registrationForm.register();
    registrationForm.activate();

    expect(registrationForm.isActivated).to.equal(true);
  });
});
