export const validateCreateContact = (values) => {
  const errors = {};
  const { firstName, phone, email } = { ...values };
  console.log(firstName);
  if (!firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length < 2) {
    errors.firstName = "Must be at least 2 characters.";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less.";
  }

  const reg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  if (!reg.test(phone)) {
    errors.phone = "The phone number should contain only numbers.";
  }

  if (!email || !email.includes("@")) {
    errors.email = "Email should contain a @";
  }

  return errors;
};
