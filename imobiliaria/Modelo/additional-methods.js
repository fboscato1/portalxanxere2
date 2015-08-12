$(document).ready(function(){
	// DATE FORMAT BRASIL

	jQuery.validator.addMethod("dateBR", function (value, element) {
    //contando chars    
    if (value.length != 10) return (this.optional(element) || false);
    // verificando data
    var data = value;
    var dia = data.substr(0, 2);
    var barra1 = data.substr(2, 1);
    var mes = data.substr(3, 2);
    var barra2 = data.substr(5, 1);
    var ano = data.substr(6, 4);
    if (data.length != 10 || barra1 != "/" || barra2 != "/" || isNaN(dia) || isNaN(mes) || isNaN(ano) || dia > 31 || mes > 12) return (this.optional(element) || false);
    if ((mes == 4 || mes == 6 || mes == 9 || mes == 11) && dia == 31) return (this.optional(element) || false);
    if (mes == 2 && (dia > 29 || (dia == 29 && ano % 4 != 0))) return (this.optional(element) || false);
    if (ano < 1900) return (this.optional(element) || false);
    return (this.optional(element) || true);
}, "Informe uma data válida");  // Mensagem padrão

    // CPF
    jQuery.validator.addMethod("cpf", function (value, element) {
    	value = jQuery.trim(value);

    	value = value.replace('.', '');
    	value = value.replace('.', '');
    	cpf = value.replace('-', '');
    	while (cpf.length < 11) cpf = "0" + cpf;
    	var expReg = /^0+$|^1+$|^2+$|^3+$|^4+$|^5+$|^6+$|^7+$|^8+$|^9+$/;
    	var a = [];
    	var b = new Number;
    	var c = 11;
    	for (i = 0; i < 11; i++) {
    		a[i] = cpf.charAt(i);
    		if (i < 9) b += (a[i] * --c);
    	}
    	if ((x = b % 11) < 2) { a[9] = 0 } else { a[9] = 11 - x }
    		b = 0;
    	c = 11;
    	for (y = 0; y < 10; y++) b += (a[y] * c--);
    		if ((x = b % 11) < 2) { a[10] = 0; } else { a[10] = 11 - x; }
    	if ((cpf.charAt(9) != a[9]) || (cpf.charAt(10) != a[10]) || cpf.match(expReg)) return this.optional(element) || false;
    	return this.optional(element) || true;
}, "Informe um CPF válido"); // Mensagem padrão

    // CNPJ
    jQuery.validator.addMethod("cnpj", function (cnpj, element) {
    	cnpj = jQuery.trim(cnpj);

    // DEIXA APENAS OS NÚMEROS
    cnpj = cnpj.replace('/', '');
    cnpj = cnpj.replace('.', '');
    cnpj = cnpj.replace('.', '');
    cnpj = cnpj.replace('-', '');

    var numeros, digitos, soma, i, resultado, pos, tamanho, digitos_iguais;
    digitos_iguais = 1;

    if (cnpj.length < 14 && cnpj.length < 15) {
    	return this.optional(element) || false;
    }
    for (i = 0; i < cnpj.length - 1; i++) {
    	if (cnpj.charAt(i) != cnpj.charAt(i + 1)) {
    		digitos_iguais = 0;
    		break;
    	}
    }

    if (!digitos_iguais) {
    	tamanho = cnpj.length - 2
    	numeros = cnpj.substring(0, tamanho);
    	digitos = cnpj.substring(tamanho);
    	soma = 0;
    	pos = tamanho - 7;

    	for (i = tamanho; i >= 1; i--) {
    		soma += numeros.charAt(tamanho - i) * pos--;
    		if (pos < 2) {
    			pos = 9;
    		}
    	}
    	resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    	if (resultado != digitos.charAt(0)) {
    		return this.optional(element) || false;
    	}
    	tamanho = tamanho + 1;
    	numeros = cnpj.substring(0, tamanho);
    	soma = 0;
    	pos = tamanho - 7;
    	for (i = tamanho; i >= 1; i--) {
    		soma += numeros.charAt(tamanho - i) * pos--;
    		if (pos < 2) {
    			pos = 9;
    		}
    	}
    	resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    	if (resultado != digitos.charAt(1)) {
    		return this.optional(element) || false;
    	}
    	return this.optional(element) || true;
    } else {
    	return this.optional(element) || false;
    }
}, "Informe um CNPJ válido.");


// Cellphone (8 or 9 digits)
jQuery.validator.addMethod("cell", function (value, element) {
        value = value.replace("(", "");
        value = value.replace(")", "");
        value = value.replace("-", "");
        value = value.replace("_", "");
        value = value.replace(" ", "");
        return this.optional(element) || /[0-9]{10}/.test(value) || /[0-9]{11}/.test(value);
    }, "Informe um celular válido.");

// Not Equal Method
jQuery.validator.addMethod("notEqual", function(value, element, param) {
   return this.optional(element) || value != $(param).val();
}, "Esse campo precisa ser diferente");


// IDADE
jQuery.validator.addMethod("minAge", function (value, element) {

    value = jQuery.trim(value);

    if (value < 18) { 
        return false;
    } else {
        return this.optional(element) || true;
    }


}, "A idade mínima para a contratação de um financiamento imobiliário é de 18 anos."); // Mensagem padrão

var customError = "";

$.validator.addMethod("prazo", function(value, element) {
    $.validator.messages.prazo = customError;
    var returnVal = true;
    
    if (value < 24) {
        customError = "O prazo mínimo para a contratação de um financiamento imobiliário é de 24 meses.";
        return false;
    } else if (value > 360) {
        customError = "O prazo máximo para a contratação de um financiamento imobiliário é de 360 meses.";
        return false;
    } else {
        return this.optional(element) || true;
    }

}, customError);

// Ativa os campos de formularios relativos aos inputs selecionados ================

$(function(){

    function enableRel(ele){
        $("[data-form='#"+ele+"']").fadeIn().removeClass("ignore").find("input, select, textarea").removeAttr("disabled");
    }

    function disableRel(ele){
        $("[data-form='#"+ele+"']").fadeOut().addClass("ignore").find("input, select, textarea").attr("disabled","disabled");
    }

    $(".ignore").find('input, select, textarea').attr("disabled", "disabled");

    // Dynamic options when using UI selectmenu
    $( "[data-select='true']" ).selectmenu({
        icons: { button: "fa fa-angle-down" },
        disabled: false,
        change: function(event){
            var name = $(this).attr("name");
            var selected = $(this).children("option:selected");
            var notSelected = $("select[name='"+name+"'] option:not(:selected)");

            if(selected.is("[data-form-target]")){
                var target = selected.attr("data-form-target");
                lastTarget = target;
                enableRel(target);
            }

            if(target == undefined){
                $(notSelected).each(function(){
                    var target = $(this).attr("data-form-target");
                    disableRel(target);
                });
            } else {
                $.each(notSelected, function(e){
                    var newTarget = $(notSelected[e]).attr("data-form-target");
                    if(newTarget != lastTarget) {
                        disableRel(newTarget);
                    }
                });
            }
        }
    });

    $(":checkbox, :radio").on("change", function(){

        var name = $(this).attr("name");

        if($(this).is(":checked")){
            var target = $(this).attr("data-form-target");
            enableRel(target);
        }

        $("input[name='"+name+"']:not(:checked)").each(function(){
            var target = $(this).attr("data-form-target");
            disableRel(target);
        });
    });

}); //===============================================

});