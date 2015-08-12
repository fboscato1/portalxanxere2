//Translate error messages to Portuguese-BR
jQuery.extend(jQuery.validator.messages, {
  required: "Campo obrigatório",
  remote: "Por favor, corrija este campo",
  email: "Por favor, digite um e-mail válido",
  url: "Por favor, digite uma URL válida",
  date: "Por favor, digite uma data válida",
  dateISO: "Por favor, digite uma data (ISO) válida",
  number: "Por favor, digite um número válido",
  digits: "Por favor, digite apenas digitos",
  creditcard: "Por favor, digite um número de cartão de crédito válido",
  equalTo: "Por favor, digite o mesmo valor novamente",
  accept: "Por favor, digite um valor com uma extension válida",
  maxlength: jQuery.validator.format("Por favor, digite não mais que {0} caracteres"),
  minlength: jQuery.validator.format("Por favor, digite ao menos {0} caracteres"),
  rangelength: jQuery.validator.format("Por favor, digite um valor entre {0} e {1} caracteres"),
  range: jQuery.validator.format("Por favor, digite um valor entre {0} and {1}"),
  max: jQuery.validator.format("Por favor, digite um valor menor ou igual a {0}"),
  min: jQuery.validator.format("Por favor, digite um valor maior ou igual a {0}")
});