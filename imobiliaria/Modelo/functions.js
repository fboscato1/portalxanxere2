// JavaScript Document

/**
* Iguala tamanho de seletores
* @param string element Ex. ".selector"
*/
(function($) {
$.fn.equalHeights = function () {
	var h = 0;
	$.each($(this), function(e,v){
		var current = $(v).height();
		if(current > h){
			h = current;
		}
	});
	$(this).each(function(){
		$(this).height(h);
	});
};
})(jQuery);

$(document).ready(function() {

	// Ordena telefones no header(index)
	var countTels = $("#dropdownTelsList li").length;
	if(countTels == 0){
		$("#dropdownTelsContainer").remove();
		$(".boxTelefone .bullet-separator").remove();
	} else if (countTels == 1) {
		var tel = $("#dropdownTelsList li").detach();
		$("#headerTels").append(tel);
		$("#dropdownTelsContainer").remove();
	} else {
		$("#dropdownTelsBtn").html($("#dropdownTelsList li").first());
		$("#dropdownTelsBtn .tels strong").append("<span class='more-phones color1'>Mais telefones <span class='caret'></span></span>")
    }

    // Esconde icone de dropdown nas paginas internas
	$(function(){
		var i = $('.telSecundario li').length;
		if(i == 0)
			$('.telPrincipal .caret, .telSecundario').hide();
	});
 	
	//Menu lateral
	$( '#menu' ).show();
	$( '#menu' ).multilevelpushmenu({
		containersToPush: [$( '#pushobj' )],
		direction: 'rtl',
		fullCollapse: true,
		collapsed: true,
		wrapperClass: 'mlpm_w',
		menuInactiveClass: 'mlpm_inactive',
		menuWidth: 260,
		//preventItemClick: false,
		onItemClick: function() {
			var event = arguments[0],
			$menuLevelHolder = arguments[1],
			$item = arguments[2],
			options = arguments[3];
			var itemHref = $item.find("a:first").attr("href");
			location.href = itemHref;
    	},
		onExpandMenuStart:function() {
			$("#bgMenu").fadeIn("slow");			
    	}
	});
	// Botao abrir menu
	$( '#buttonCollapse' ).click(function(){
		$("#menu").multilevelpushmenu("expand");
		$("body").css("overflow","hidden");	
		$("body").css("padding-right","17px");		
	});
	$("#bgMenu").click(function(){
		$("#menu").multilevelpushmenu("collapse");
	});
	
	//verifica se tem mais de um telefone no topo
	if($("#topoInterna01 .telSecundario").length < 1){
		$("#topoInterna01 .maisTels").remove();
		$("#topoInterna01 .iconMais").remove();
	}
	
	//newsletter	
	$(".xboxNewsletter form").validate({
          errorElement:"span"
    });
	//fim newsletter
	
	//remove a div complemento se nao houver conteudo
	$("footer .unidade .jsComplemento").each(function(index, element) {
		if($("div", this).text() == ""){
			return $(this).remove();
		}
	});
	
	//unidades
	var varUnidade = $("footer #boxEnderecos .unidade");
	
	//coloca os links e classe nas unidades
	varUnidade.each(function(index){
		index++;
		$(".btn", this).attr("href", "contato.aspx?unidade"+index);
	});
	
	//verifica se tem mais de uma unidade no rodape e deixa centralizado
	if( $(".boxEnd").length == 1){
		$(".boxIcon").addClass("col-md-offset-4");
	}

	//customizacao dos selects
//	$(".busca select").customSelect();
//	$(".customSelect").append("<i class='fa fa-angle-down'></i>");

	
		
	//BUSCAS 01
	//clicar na lupa da busca submete o formulario atual
	$(".busca form .fa-search").click(function(){
		$(this).parent().parent("form").submit();
	});
	
	// Busca rapida (old)
	// $(".busca .navBusca li a").click(function(){
	//     var divClass = "." + $(this).attr("id");
	//     $(this).parent().parent().parent().next().find(".jsHidden").hide();
	//     $(this).parent().parent().parent().next().find(divClass).fadeIn();

	//     $(this).parent().prevAll().removeClass("active");
	//     $(this).parent().nextAll().removeClass("active");
	//     $(this).parent().addClass("active");
		
	// });
	// $(".busca .navBusca").each(function(){
	//    $("li a:eq(0)", this).trigger("click");
	// });
	
	$(function () {
	  $('[data-toggle="tooltip"]').tooltip()
	})
	
	//retira o campo "padrao" da busca de lancamento
	$("#bLancamento .statusEmpr select option").each(function(){
        if( $(this).val() == 1 ) $(this).remove();
    });
	
	//deixa o campo val 0 igual a 2,3,4,5,6
	$("#bLancamento .statusEmpr select option").each(function(){
        if( $(this).val() == 0 ) $(this).val("2,3,4,5,6,7");
    });
	
	//se nao houver busca de condominio > retira do menu
	if( $("#bCondominio form .cidadesEmpr").length < 1 ){
		 $(".busca .navBusca #bCondominio-tab").parent().remove();
	}
	
	//se nao houver busca de lancamento > retira do menu
	if( $("#bLancamento form .cidadesEmpr").length < 1 ){
		 $(".busca .navBusca #bLancamento-tab").parent().remove();
	}
	
	//formularios de favoritos
	$("#cestaLogin01 .boxLogin dd").addClass("form-group");
	$("#cestaLogin01 .boxLogin dd input").addClass("form-control required");
	$("#cestaLogin01 .boxLogin dd #Email").attr("placeholder","E-mail (enviaremos sua senha para lá) *");
	$("#cestaLogin01 .boxLogin dd #tx_nome").attr("placeholder","Nome");
	$("#cestaLogin01 .boxLogin dd #tx_sobrenome").attr("placeholder","Sobrenome");
	$("#cestaLogin01 .boxLogin dd #tx_email").attr("placeholder","E-mail").addClass("email");
	$("#cestaLogin01 .boxLogin dd #tx_senha").attr("placeholder","Senha");
	$(".boxLoginFicha #Botao" ).replaceWith("<button type='submit' id='Botao' class='btn btn-lg btn-block bgColor2 bgHover1' name='Botao'><i class='fa fa-check'></i> Entrar</button>" );
	
	//Validacao recaptcha
	$(".validaReCaptcha").validate({
	    errorElement: "span",
		errorPlacement: function(error, element) {
            if ( element.is(":file") ) {
              error.appendTo( element.parents('.boxCv') );
            } else if ( element.is(":radio") ) {
              error.appendTo( element.parents('.form-group') );
        	} else {
        	  error.insertAfter( element );
        	}
        },
	    invalidHandler: function (event, validator) {
	        if (grecaptcha.getResponse() == "")
	            $("#error-captcha").show();
	        else
	            $("#error-captcha").hide();
	    },
	    submitHandler: function (form) {
	        if (grecaptcha.getResponse() != "") { 
			form.submit();
			} else {
				$("#error-captcha").show();
			}
	    }
    });
	
	//Verifica se tem redes sociais
	$(".redesSociais a").each(function() {
		if ($(this).attr("href") == "#") {
			$(this).remove();
		}
    });
	if( $(".redesSociais a").length < 1 ){
		 $(".redesSociais").remove();
	}

	// Substitui nome da operadora pelo icone correspondente
	$("#boxEnderecos .telefones, .linkUnidades .dados").each(function() {
		$(this).html($(this).html().replace(/\/ /g,"</li><li>"));
		$(this).html($(this).html().replace(/whatsapp/g,"<i class='fa ga-whatsapp-01'></i>"));
		$(this).html($(this).html().replace(/vivo/g,"<i class='fa ga-vivo-01'></i>"));
		$(this).html($(this).html().replace(/claro/g,"<i class='fa ga-claro-01'></i>"));
		$(this).html($(this).html().replace(/tim/g,"<i class='fa ga-tim-01'></i>"));
		$(this).html($(this).html().replace(/oi/g,"<i class='fa ga-oi-01'></i>"));
		$(this).html($(this).html().replace(/nextel/g,"<i class='fa ga-nextel-01'></i>"));
	});

	// Atribui link do Corretor Online ao item de menu
	$(function(){
		var chat = $(".btCorretor").attr("href");
		var linkMenu = $(".chat-corretor");

		if(chat == "#")
			linkMenu.parent("li").hide();
		else
			linkMenu.attr("href", chat);
	});

	// Atribui link do Corretor Online ao item de menu
	$(function(){
		var chat = $(".btCorretor").attr("href");
		var linkMenu = $(".chat-corretor");

		if(chat == "#")
			linkMenu.parent("li").hide();
		else
			linkMenu.attr("href", chat);
	});

	// Remove links nao atribuidos do menu de topo
	$(function(){

		var boleto = $("#sitemap .boleto").attr("href");
		var extrato = $("#sitemap .extrato").attr("href");

		$(".menuRapido .boleto").attr("href", boleto);
		$(".menuRapido .extrato").attr("href", extrato);
		
		$("#dropdownCliente ul li a").each(function(){
			if($(this).attr("href") == "#")
				$(this).parent("li").remove();
		});

		var links = $("#dropdownCliente ul li").length;

		if(links == 0)
		$("#dropdownCliente").remove();

	});

	// Remove links nao atribuidos do sitemap
	$(function(){
		$(".liMain li a").each(function(){
			if($(this).attr("href") == "#")
				$(this).parent("li").remove();
		});
	});

	// Remove lista de telefones do rodape se estiver vazia
	$(function(){
		$(".telefones ul").each(function(e,v){
			
			var i = 0;
			var target = $(this).children("li");

			target.each(function(){
				if($(this).text() == "")
					i++;
			});

			if(i > 0)
				$(this).parent(".telefones").remove();
		});
	});
	
});

$(function (){
  $(document).ready(function(){
	$( ".ui-select" ).selectmenu({
		icons: { button: "fa fa-angle-down" }
	});
	
	$( ".busca select" ).selectmenu({
		icons: { button: "fa fa-angle-down" },
		change: function(){
			$(this).change();
			setTimeout('$(".busca select").selectmenu("refresh");', 250);			
		}
	});
	
	$("select").change(function(){
	  var nomeCampo = $(this).find("option:selected").text()
	  $(this).parent().find(".ui-selectmenu-text").html(nomeCampo);
	})
	
	function detectmob() { 
	 if( navigator.userAgent.match(/Android/i)
	 || navigator.userAgent.match(/webOS/i)
	 || navigator.userAgent.match(/iPhone/i)
	 || navigator.userAgent.match(/iPad/i)
	 || navigator.userAgent.match(/iPod/i)
	 || navigator.userAgent.match(/BlackBerry/i)
	 || navigator.userAgent.match(/Windows Phone/i)
	 ){
		$(".busca #ddltipo").css("left","0");
		$(".busca #ddltipo").change(function(){
			$("#ddltipo").multiselect("refresh");
		})
		return true;
	  }
	 else {
		return false;
	  }
	}
	detectmob();
  });
});