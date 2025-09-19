import * as Yup from "yup";

export const deliverySchema = Yup.object().shape({
  fullName: Yup.string()
    .min(5, "O nome precisa ter pelo menos 5 caracteres")
    .required("O campo é obrigatório"),

  address: Yup.string().required("O campo é obrigatório"),

  city: Yup.string().required("O campo é obrigatório"),

  postalCode: Yup.string()
    .min(9, "O CEP precisa ter 9 caracteres")
    .max(9, "O CEP precisa ter 9 caracteres")
    .matches(/^\d{5}-\d{3}$/, "Formato de CEP inválido (Ex: 12345-678)")
    .required("O campo é obrigatório"),

  number: Yup.string()
    .matches(/^\d+$/, "O campo deve conter apenas números")
    .required("O campo é obrigatório"),

  complement: Yup.string(),
});

export const paymentSchema = Yup.object().shape({
  cardName: Yup.string()
    .min(5, "O nome precisa ter pelo menos 5 caracteres")
    .required("O campo é obrigatório"),

  cardNumber: Yup.string()
    .length(16, "O número do cartão deve ter 16 dígitos")
    .matches(/^\d+$/, "O número do cartão deve conter apenas números")
    .required("O campo é obrigatório"),

  cvv: Yup.string()
    .length(3, "O CVV precisa ter 3 dígitos")
    .matches(/^\d+$/, "O CVV deve conter apenas números")
    .required("O campo é obrigatório"),

  monthIssue: Yup.string()
    .length(2, "O mês precisa ter 2 dígitos")
    .matches(/^\d+$/, "O mês deve conter apenas números")
    .required("O campo é obrigatório"),

  yearIssue: Yup.string()
    .length(4, "O ano precisa ter 4 dígitos")
    .matches(/^\d+$/, "O ano deve conter apenas números")
    .required("O campo é obrigatório"),
});
