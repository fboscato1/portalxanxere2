// INPUT MASK
$(window).load(function() {
  $.mask.definitions['~'] = "[+-]";
  $('.cell').focusout(function(){
    var phone, element;
    element = $(this);
    element.unmask();
    phone = element.val().replace(/\D/g, '');
    if(phone.length > 10) {
      element.mask("(99) 99999-999?9");
    } else {
      element.mask("(99) 9999-9999?9");
    }
  }).trigger('focusout');
  $(".dateBR").mask("99/99/9999");
  $(".phone").mask("(99) 9999-9999");
  $(".cpf").mask("999.999.999-99");
  $(".cnpj").mask("99.999.999/9999-99");
  $(".rg").mask("99.999.999-9");
  $(".cep").mask("99999-999");
  $(".area").maskMoney({ thousands:'.', decimal:',', affixesStay: true});

  //MASK MONEY
  $(".currency").maskMoney({prefix:'R$ ', thousands:'.', decimal:',', affixesStay: true});

});