import * as yup from "yup";

export const profileSchema = yup.object().shape({
  cohort: yup.string().required("Cohort required!"),
  title: yup.string().required("Title required!"),
  first_name: yup.string().required("First Name required!"),
  last_name: yup.string().required("Last Name required!"),
  rsa_id_number: yup.string().required("RSA ID Number required!"),
  mobile_number: yup.string().required("Mobile Number required!"),
  email: yup.string().required("Email required!"),
  gender: yup.string().required("Gender required!"),
  disabled: yup.string().required("Disabled required!"),
  race: yup.string().required("Race required!"),
  residential_address: yup.string().required("Residential Address required!"),
  tax_number: yup.string().required("Tax Number required!"),
  bank_account_number: yup.string().required("Bank Account Number required!"),
  bank_account_type: yup.string().required("Bank Account Type required!"),
  bank_branch_code: yup.string().required("Bank Branch Code required!"),
  monthly_salary: yup.string().required("Monthly salary required!"),
  start_date: yup.string().required("Start date required!"),
  end_date: yup.string().required("End date required!"),
  supervisor: yup.string().required("Supervisor required!"),
  host: yup.string().required("Host required!"),
  host_address: yup.string().required("Host Address required!"),
});

export const noRequiredProfileSchema = yup.object().shape({
  cohort: yup.string(),
  title: yup.string(),
  first_name: yup.string(),
  last_name: yup.string(),
  rsa_id_number: yup.string(),
  mobile_number: yup.string(),
  email: yup.string(),
  gender: yup.string(),
  disabled: yup.string(),
  race: yup.string(),
  residential_address: yup.string(),
  tax_number: yup.string(),
  bank_account_number: yup.string(),
  bank_account_type: yup.string(),
  bank_branch_code: yup.string(),
  monthly_salary: yup.string(),
  start_date: yup.string(),
  end_date: yup.string(),
  supervisor: yup.string(),
  host: yup.string(),
  host_address: yup.string(),
});
