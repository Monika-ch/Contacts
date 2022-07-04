export const validateCreateContact = (values) => {
  const errors = {};
  const { firstName, phoneNum, email } = { ...values };

    if (!firstName) {
      errors.firstName = "Required";
    } else if (values.firstName.length < 2) {
      errors.firstName = "Must be at least 2 characters.";
    } else if (values.firstName.length > 15) {
      errors.firstName = "Must be 15 characters or less.";
    }

    const reg = /^\d+$/;
    if (!reg.test(phoneNum)) {
      errors.phoneNum = "The phone number should contain only numbers.";
    }

    if (!email.includes("@")) {
      errors.email = "Email should contain a @";
    }

//  if (!values.firstName) {
//    errors.firstName = "Required";
//  } else if (values.firstName.length < 2) {
//    errors.firstName = "Must be at least 2 characters.";
//  } else if (values.firstName.length > 15) {
//    errors.firstName = "Must be 15 characters or less";
//  }

//   const reg = /^\d+$/;
//    if (!reg.test(values.phoneNum)) {
//      errors.phoneNum = "The phone number should contain only numbers.";
//    }
  
//   if (!values.email.includes("@")) {
//     errors.email = "Email should contain a @";
//   }

  return errors;
};

// export default validateCreateContact;