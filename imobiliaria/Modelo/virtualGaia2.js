$(document).ready(function () {
	
    //Carregar dropdown ddlTipo
    CarregarTipo();

    // monta tipos na ddltipo
    geraTipo($("#ddltipo"));
    $("#ddltipo").change(function () {
        geraTipo($(this));
    }).change();
    function geraTipo(tipo) {
        if (tipo.val() == "7" || tipo.val() == "25" || tipo.val() == "31") {
			$(".dormitorios select").removeAttr('disabled');
            $(".condFechado select").removeAttr('disabled');
            $(".area_util select").removeAttr('disabled');
            $(".area_total select").removeAttr('disabled');
            $(".vagas select").removeAttr('disabled');
            $(".suites select").removeAttr('disabled');
            $("#lblArea").text("Área construída");
			$(".busca select").selectmenu("refresh");
        }
        else if (tipo.val() == "20") {
			$(".dormitorios select").attr("disabled", "disabled");
            $(".condFechado select").removeAttr('disabled');
            $(".area_util select").attr("disabled", "disabled");
            $(".area_total select").removeAttr('disabled');
            $(".vagas select").attr("disabled", "disabled");
            $(".suites select").attr("disabled", "disabled");
            $("#lblArea").text("Área construída");
			$(".busca select").selectmenu("refresh");
        }
        else if (tipo.val() == "2" || tipo.val() == "22" || tipo.val() == "23" || tipo.val() == "24") {
			$(".dormitorios select").removeAttr('disabled');
            $(".condFechado select").attr("disabled", "disabled");
            $(".area_util select").removeAttr('disabled');
            $(".area_total select").removeAttr('disabled');
            $(".vagas select").removeAttr('disabled');
            $(".suites select").removeAttr('disabled');
            $("#lblArea").text("Área útil");
			$(".busca select").selectmenu("refresh");
        }
        else if (tipo.val() == "6" || tipo.val() == "12" || tipo.val() == "15" || tipo.val() == "16") {
			$(".dormitorios select").attr("disabled", "disabled");
  			$(".condFechado select").attr("disabled", "disabled");
			$(".area_util select").removeAttr('disabled');
            $(".area_total select").removeAttr('disabled');
            $(".vagas select").removeAttr('disabled');
			$(".suites select").attr("disabled", "disabled");
			$("#lblArea").text("Área construída");
			$(".busca select").selectmenu("refresh");
           
	   }
        else if (tipo.val() == "11" || tipo.val() == "19" || tipo.val() == "14" || tipo.val() == "8") {
			$(".dormitorios select").removeAttr('disabled');
            $(".area_util select").removeAttr('disabled');
            $(".area_total select").removeAttr('disabled');
            $(".vagas select").removeAttr('disabled');
            $(".suites select").removeAttr('disabled');
            $(".condFechado select").attr("disabled", "disabled");
			$(".busca select").selectmenu("refresh");
        }
        else if (tipo.val() == "5") {
			$(".dormitorios select").attr("disabled", "disabled");
            $(".condFechado select").attr("disabled", "disabled");
            $(".area_util select").attr("disabled", "disabled");
            $(".area_total select").removeAttr('disabled');
            $(".vagas select").attr("disabled", "disabled");
            $(".suites select").attr("disabled", "disabled");
			$(".busca select").selectmenu("refresh");
        }
        else if (tipo.val() == "27" || tipo.val() == "17" || tipo.val() == "18" || tipo.val() == "26") {
			$(".dormitorios select").attr("disabled", "disabled");
            $(".condFechado select").attr("disabled", "disabled");
            $(".area_util select").attr("disabled", "disabled");
            $(".area_total select").removeAttr('disabled');
            $(".vagas select").removeAttr('disabled');
            $(".suites select").attr("disabled", "disabled");
			$(".busca select").selectmenu("refresh");
        }
    }

    $("#Cidade, #cidade").change(function () {
        $(".zona").hide();
        $("#ddlzona").val("");
        if ($(this).val() == "85" || $(this).val() == "1") {
            $.ajax({
                beforeSend: function () {
                    $("#divbairro").html("<p>Escolha uma zona da cidade.</p>");
                },
                url: "jsonZonas.aspx",
                data: "cod_cid=" + $(this).val(),
                dataType: "json",
                success: function (json) {
                    if ($("#cidade").val() == 0) {
                        $(".zona").hide();
                        $("#divbairro").html("<p>Escolha alguma cidade</p>");
                    }
                    else
                        $(".zona").show();

                    if ($("#divbairroselect").length > 0)
                        ZonaHTML = zonasEmSelect(json);
                    else
                        ZonaHTML = zonasEmSelect(json);

                    $("#zona").html(ZonaHTML);

                    $("#ddlzona").change(function () {

                        if ($("#ddlzona").val() != "") {
                            $.ajax({
                                url: "jsonBairroZona.aspx",
                                data: "cod_cid=" + $("#cidade").val() + "&cod_zona=" + $(this).val(),
                                dataType: "json",
                                success: function (json) {

                                    if ($("#divbairroselect").length > 0) {
                                        BairroHTML = bairrosEmSelect(json);
                                        $("#divbairroselect").html(BairroHTML);
                                    }
                                    else {
                                        BairroHTML = bairrosEmChecks(json);
                                        $("#divbairro").html(BairroHTML);
                                    }

                                },
                                error: function () {
                                    if ($("#divbairroselect").length > 0)
                                        $("#divbairroselect").html('<select id="regiao" name="regiao"><option id="todos" selected="selected" value="">Selecione uma zona</option></select>');
                                    else
                                        $("#divbairro").html("<p>Escolha alguma zona</p>");
                                }
                            });

                        } else {
                            if ($("#cidade").val() == 0) {
                                $("#divbairro").html("<p>Escolha alguma cidade</p>");
                            }
                            else {
                                $.ajax({
                                    beforeSend: function () {
                                        $("#divbairro").html("<p>Aguarde, carregando os bairros</p>");
                                    },
                                    url: "jsonbairro.aspx",
                                    data: "cod_cid=" + $("#cidade").val(),
                                    dataType: "json",
                                    success: function (json) {

                                        if ($("#divbairroselect").length > 0)
                                            BairroHTML = bairrosEmSelect(json);
                                        else
                                            BairroHTML = bairrosEmChecks(json);

                                        if ($("#divbairroselect").length > 0) {
                                            BairroHTML = bairrosEmSelect(json);
                                            $("#divbairroselect").html(BairroHTML);
                                        }
                                        else {
                                            BairroHTML = bairrosEmChecks(json);
                                            $("#divbairro").html(BairroHTML);
                                        }

                                        $("#divbairro").html(BairroHTML);

                                        todosBairros();

                                    },
                                    error: function () {
                                        if ($("#divbairroselect").length > 0)
                                            $("#divbairroselect").html('<select id="bairro" name="bairro"><option id="todos" selected="selected" value="">Selecione uma cidade</option></select>');
                                        else
                                            $("#divbairro").html("<p>Escolha alguma cidade</p>");
                                    }
                                });
                            }

                        }

                    }).change();

                },
                error: function () {
                    if ($("#divbairroselect").length > 0)
                        $("#divbairroselect").html('<select id="regiao" name="regiao"><option id="todos" selected="selected" value="">Selecione uma zona</option></select>');
                    else
                        $("#divregiao").html("<p>Escolha alguma cidade</p>");
                }
            });

            //$(".regiaoBusca").show();
            //todasZonas();
        }
        else {
            $(".zona").hide();
            if ($("#cidade").val() == 0) {
                $("#divbairro").html("<p>Escolha alguma cidade</p>");
            }
            else {
                $.ajax({
                    beforeSend: function () {
                        $("#divbairro").html("<p>Aguarde, carregando os bairros</p>");
                    },
                    url: "jsonbairro.aspx",
                    data: "cod_cid=" + $(this).val(),
                    dataType: "json",
                    success: function (json) {
                        //					    if($("#divbairroselect").length > 0)
                        //						    BairroHTML = bairrosEmSelect(json);
                        //					    else
                        //						    BairroHTML = bairrosEmChecks(json);		

                        if ($("#divbairroselect").length > 0) {
                            BairroHTML = bairrosEmSelect(json);
                            $("#divbairroselect").html(BairroHTML);
                        }
                        else {
                            BairroHTML = bairrosEmChecks(json);
                            $("#divbairro").html(BairroHTML);
                        }

                        $("#divbairro").html(BairroHTML);

                        todosBairros();

                    },
                    error: function () {
                        if ($("#divbairroselect").length > 0)
                            $("#divbairroselect").html('<select id="bairro" name="bairro"><option id="todos" selected="selected" value="">Selecione uma cidade</option></select>');
                        else
                            $("#divbairro").html("<center>Escolha alguma cidade</center>");
                    }
                });
            }
        }

    }).change();

    BairroHTML = "";

    //});

    $("#ddltipo").change(function () {
        //filtraFinalidade("#ddlFinalidade",$(this).val());
        $.ajax({

            url: "jsonFinalidade.aspx",
            data: "cod_tipo=" + $("#ddltipo").val(),
            dataType: "json",
            success: function (json) {
                finalidadesEmSelect(json);
            },
            error: function () {

            }
        });

    }).change();
	
	function selecionaEmpreendimentoLAN(json) {
        $("#bLancamento #ddlNomeEmpr").empty();
        $("#bLancamento #ddlNomeEmpr").append("<option value='' selected='selected' >Empreendimento</option>");
        for (i = 0; i < json.nomeempreendimentos.length; i++) {
            $("#bLancamento #ddlNomeEmpr").append("<option value=" + json.nomeempreendimentos[i].id + ">" + json.nomeempreendimentos[i].nomeempreendimento + "</option>")
        }

        if ($('#bLancamento #ddlNomeEmpr').parent().find('div').length > 0) {
            $('#bLancamento #ddlNomeEmpr').parent().find('div').remove();
        }
        //$("#bLancamento #ddlNomeEmpr").next().find('.selectedTxt').text($("#bLancamento #ddlNomeEmpr").find('option:selected').text());
    };

    $("#bLancamento .cidadesEmpr #ddlcidade").change(function () {
        $.ajax({
            url: "jsonEmpreendimento.aspx",
            data: "cod_cid_empr=" + $("#bLancamento #ddlcidade").val() + "&status=2",
            dataType: "json",
			beforeSend: function(){
				$("#bLancamento .nomeEmpr #ddlNomeEmpr").next().css("opacity","0.2");
			},
            success: function (json) {
				$("#bLancamento .nomeEmpr #ddlNomeEmpr").next().css("opacity","10");
                selecionaEmpreendimentoLAN(json);
            },
            erro: function () {

            }
        });

    }).change();

	function selecionaEmpreendimentoCON(json) {
        $("#bCondominio #ddlNomeEmpr").empty();
        $("#bCondominio #ddlNomeEmpr").append("<option value='' selected='selected' >Condomínio</option>");
        for (i = 0; i < json.nomeempreendimentos.length; i++) {
            $("#bCondominio #ddlNomeEmpr").append("<option value=" + json.nomeempreendimentos[i].id + ">" + json.nomeempreendimentos[i].nomeempreendimento + "</option>")
        }

        if ($('#bCondominio #ddlNomeEmpr').parent().find('div').length > 0) {
            $('#bCondominio #ddlNomeEmpr').parent().find('div').remove();
        }
        //$("#bCondominio #ddlNomeEmpr").next().find('.customSelectInner').text($("#bCondominio #ddlNomeEmpr").find('option:selected').text());
    };

    $("#bCondominio .cidadesEmpr #ddlcidade").change(function () {
        $.ajax({
            url: "jsonEmpreendimento.aspx",
            data: "cod_cid_empr=" + $("#bCondominio #ddlcidade").val() + "&status=1",
            dataType: "json",
			beforeSend: function(){
				$("#bCondominio .nomeEmpr #ddlNomeEmpr").next().css("opacity","0.2");
			},
            success: function (json) {
				$("#bCondominio .nomeEmpr #ddlNomeEmpr").next().css("opacity","10");
                selecionaEmpreendimentoCON(json);
				//alert("teste");
            },
            erro: function () {

            }
        });
    }).change();

	
	


    function finalidadesEmSelect(json) {

        $("#ddlFinalidade").empty();
        $("#ddlFinalidade").append("<option value='0' selected='selected' >Finalidade</option>");
        for (i = 0; i < json.finalidades.length; i++) {
            $("#ddlFinalidade").append("<option value=" + json.finalidades[i].id + ">" + json.finalidades[i].finalidade + "</option>")
        }
    };

    function filtraFinalidade(campo, tipo) {
        strValues = "1,2,3,4,5,6";

        valorPadrao = $(campo).val();

        switch (tipo) {
            case "2":
            case "22":
            case "23":
            case "24":
                strValues = "1,5";
                break;

            case "6":
            case "12":
                strValues = "2,3";
                break;

            case "7":
            case "25":
                strValues = "1,2,4,5";
                break;

            case "8":
                strValues = "1,4";
                break;

            case "11":
            case "14":
            case "19":
                strValues = "4";
                break;

            case "15":
            case "26":
                strValues = "2";
                break;

            case "16":
                strValues = "1,2,6";
                break;

            case "17":
            case "18":
            case "27":
                strValues = "2,6";
                break;

            case "20":
            case "5":
                strValues = "1,2,3,4";
                break;
        }

        var arrFinalidades = new Array("", "Residencial", "Comercial", "Industrial", "Rural", "Temporada", "Corporativa");
        $(campo).empty();
        strValues = strValues.split(",");

        for (i = 0; i < strValues.length; i++) {
            if (valorPadrao == strValues[i])
                selected = " selected='selected' ";
            else
                selected = "";

            $(campo).append("<option value=" + strValues[i] + selected + ">" + arrFinalidades[strValues[i]] + "</option>")
        }
    };

    function zonasEmSelect(json) {
        ZonaHTML = "";
        ZonaHTML += '<select id="ddlzona" name="ddlzona">';
        ZonaHTML += '<option selected="selected" value="">Todos as zonas</option>';
        for (i = 0; i < json.zonas.length; i++) {
            ZonaHTML += '<option value="' + json.zonas[i].id + '">';
            ZonaHTML += json.zonas[i].zona;
            ZonaHTML += '</option>';
        }
        ZonaHTML += '</select>';
        return (ZonaHTML);
    }

    function bairrosEmChecks(json) {
        BairroHTML = "";
        BairroHTML += '<div class="">';
        BairroHTML += '<input type="checkbox" checked="checked" id="todos" value="" name="bairro"/>';
        BairroHTML += '<label for="todos"> Todos os bairros</label>';
        BairroHTML += '</div>';
		if(json != null){
			for (i = 0; i < json.bairros.length; i++) {
				BairroHTML += '<div class="">';
				BairroHTML += '<input type="checkbox" id="' + json.bairros[i].bairro + '" value="' + json.bairros[i].id + '" name="bairro"/>';
				BairroHTML += '<label for="' + json.bairros[i].bairro + '"> ' + json.bairros[i].bairro + '</label>';
				BairroHTML += '</div>';
			}
		}
		else {
			return false;
		}
        
        return (BairroHTML);
    }

    function bairrosEmSelect(json) {
        BairroHTML = "";
        BairroHTML += '<select id="bairro" name="bairro">';
        BairroHTML += '<option id="todos" selected="selected" value="">Todos os Bairros</option>';
        for (i = 0; i < json.bairros.length; i++) {
            BairroHTML += '<option value="' + json.bairros[i].id + '">';
            BairroHTML += json.bairros[i].bairro;
            BairroHTML += '</option>';
        }
        BairroHTML += '</select>';
        return (BairroHTML);
    }

    function todosBairros() {
        if ($("#divbairro").length > 0) {
            $("#todos").click(function () {
                if (this.checked) {
                    $("#divbairro input").not("#todos").attr("checked", false);
                } else {
                    $("#divbairro input").not("#todos").attr("checked", false);
                }
                pintaBairros();
            });
            $("#divbairro input").not("#todos").click(function () {
                $("#todos").attr("checked", false);
                pintaBairros();
            });
            pintaBairros();
        }
    }

    function pintaBairros() {
        if ($("#divbairro").length > 0) {
            $("#divbairro input").each(function () {
                if (this.checked) {
                    $(this).parent().attr("class", "bairroSelecionado");
                } else {
                    $(this).parent().removeAttr("class");
                }
            });
        }
    }

    //QUER COMPRAR E QUERO ALUGAR
    $("#ddlPretensao").change(function () {
        if ($("#ddlPretensao").val() == "1") {
            geraMinVenda();
            geraMaxVenda();
			geraFaixaValorVenda();
			$("#frmBusca #ddlFaixaDeValores").attr("name","vlVenda");
			
        }
        else {
            geraMinLocacao();
            geraMaxLocacao();
			geraFaixaValorLocacao();
			$("#frmBusca #ddlFaixaDeValores").attr("name","vlLocacao");
        }
		CarregarTipo();
    }).change();
	
	
    function geraMinLocacao() {
        $("#ddlValorMin").html("<option value=\"0\">Valor M&iacute;nimo</option><option value=\"400\">R$ 400,00</option><option value=\"800\">R$ 800,00</option><option value=\"1200\">R$ 1.200,00</option><option value=\"1600\">R$ 1.600,00</option><option value=\"2000\">R$ 2.000,00</option><option value=\"2500\">R$ 2.500,00</option><option value=\"3000\">R$ 3.000,00</option><option value=\"5000\">R$ 5.000,00</option><option value=\"8000\">R$ 8.000,00</option><option value=\"12000\">R$ 12.000,00</option><option value=\"18000\">R$ 18.000,00</option><option value=\"0\">Indiferente</option>");
    }

    function geraMaxLocacao() {
        $("#ddlValorMax").html("<option value=\"99999999\">Valor M&aacute;ximo</option><option value=\"400\">R$ 400,00</option><option value=\"800\">R$ 800,00</option><option value=\"1200\">R$ 1.200,00</option><option value=\"1600\">R$ 1.600,00</option><option value=\"2000\">R$ 2.000,00</option><option value=\"2500\">R$ 2.500,00</option><option value=\"3000\">R$ 3.000,00</option><option value=\"5000\">R$ 5.000,00</option><option value=\"8000\">R$ 8.000,00</option><option value=\"12000\">R$ 12.000,00</option><option value=\"18000\">R$ 18.000,00</option><option value=\"99999999\">Indiferente</option>");
    }

    function geraMinVenda() {
        $("#ddlValorMin").html("<option value=\"0\">Valor M&iacute;nimo</option><option value=\"200000\">R$ 200.000,00</option><option value=\"400000\">R$ 400.000,00</option><option value=\"600000\">R$ 600.000,00</option><option value=\"800000\">R$ 800.000,00</option><option value=\"1000000\">R$ 1.000.000,00</option><option value=\"1400000\">R$ 1.400.000,00</option><option value=\"1600000\">R$ 1.600.000,00</option><option value=\"1800000\">R$ 1.800.000,00</option><option value=\"2000000\">R$ 2.000.000,00</option><option value=\"0\">Indiferente</option>");
    }

    function geraMaxVenda() {
        $("#ddlValorMax").html("<option value=\"99999999\">Valor M&aacute;ximo</option><option value=\"200000\">R$ 200.000,00</option><option value=\"400000\">R$ 400.000,00</option><option value=\"600000\">R$ 600.000,00</option><option value=\"800000\">R$ 800.000,00</option><option value=\"1000000\">R$ 1.000.000,00</option><option value=\"1400000\">R$ 1.400.000,00</option><option value=\"1600000\">R$ 1.600.000,00</option><option value=\"1800000\">R$ 1.800.000,00</option><option value=\"2000000\">R$ 2.000.000,00</option><option value=\"99999999\">Indiferente</option>");
    }
	
	function geraFaixaValorLocacao() {
        $("#ddlFaixaDeValores").html("<option value=\"0\">Faixa de Valor</option><option value=\"0|400\">Até 400</option><option value=\"400|800\">De 400 até 800</option><option value=\"800|1200\">De 800 até 1.200</option><option value=\"1200|1600\">De 1.200 até 1.600</option><option value=\"1600|2000\">De 1.600 até 2.000</option><option value=\"2000|2500\">De 2.000 até 2.500</option><option value=\"2500|3000\">De 2.500 até 3.000</option><option value=\"3000|4000\">De 3.000 até 4.000</option><option value=\"4000|6000\">De 4.000 até 6.000</option><option value=\"6000|8000\">De 6.000 até 8.000</option><option value=\"8000|12000\">De 8.000 até 12.000</option><option value=\"12000|18000\">De 12.000 até 18.000</option><option value=\"18000|99999999\">A partir de 18.000</option>");		
    }

 	function geraFaixaValorVenda() {
        $("#ddlFaixaDeValores").html("<option value=\"0\">Faixa de Valor</option><option value=\"0|200000\">Até R$ 200.000</option><option value=\"200000|400000\">R$ 200.000 até R$ 400.000</option><option value=\"400000|600000\">R$ 400.000 até R$ 600.000</option><option value=\"600000|800000\">R$ 600.000 até R$ 800.000</option><option value=\"600000|1000000\">R$ 800.000 até R$ 1.000.000</option><option value=\"1000000|1400000\">R$ 1.000.000 até R$ 1.400.000</option><option value=\"1400000|1600000\">R$ 1.400.000 até R$ 1.600.000</option><option value=\"1600000|1800000\">R$ 1.600.000 até R$ 1.800.000</option><option value=\"1800000|2000000\">R$ 1.800.000 até R$ 2.000.000</option><option value=\"2000000|99999999\">Acima de R$ 2.000.000</option>");		
    }
	
    $(".boxSlideShow").each(function () {
        $(this).find("a").slideshow();
    });

    var pathname = window.location.href;

    if (pathname.indexOf('?') != -1) {
        var parametros = pathname.split('?');
        valoresEmSelect(parametros[1]);
    }

    function valoresEmSelect(parametros) {
        if (parametros.indexOf('&') != -1) {
            var parametrosList = parametros.split('&');
            for (var i = 0; i < parametrosList.length; i++) {
                var parametro = parametrosList[i].split('=');
                if (parametro[0] == "cidade") {
                    if (parametro[1] == "0") {
                        $("#" + parametro[0]).append("<option value='0' selected='selected' >Cidade</option>");
                    }
                    else {
                        $("#" + parametro[0]).val(parametro[1]);
                    }

                }
            }
        }
    }
	
//função de bairros por listagem em thickbox
$(".busca .bairro dd").append("<a href='javascript:;' id='ddlBairro2' data-toggle='modal' data-target='#myModal'></a>");
$('#ddlBairro2').click(function (){
	var idCidadeBuscaBairro = $("#cidade").val();
	$(".modal-dialog").load('bairroListagem.aspx?idCidade=' + idCidadeBuscaBairro + '&zona=undefined');
	$(document).ajaxStart(function(){
	  $("#loadingDiv").css("display","block");
	});
	$(document).ajaxComplete(function(){
	  $("#loadingDiv").css("display","none");
	});
});

$('#myModal').on('hide.bs.modal', function (e) {
	$("#idBairros").val("");
	$("#idBairros").attr("rel","");
	var txtLabel = "";
	var primeiro = true;
	$(".clsBairros input:checked").each(function(){
		if(primeiro){
			$("#idBairros").val($("#idBairros").val() + $(this).val());
			primeiro = false;
			}
		else
			$("#idBairros").val($("#idBairros").val() + "," + $(this).val());
		if($(this).val()!="0")			 
			txtLabel += $(this).parent().find("label").text() + ", ";
		else //salva as selects 'SELECIONAR TODOS' no atributo rel
		{  
			if($(this).attr("id") == "selectTodos") //Se não houver zona
				$("#idBairros").attr("rel","selectTodos");
			else //Se houver zona            
				$("#idBairros").attr("rel",  $("#idBairros").attr("rel") + "," + $(this).attr("rel") );
		}   
	});
	if(txtLabel=="")
	{
		$("#ddlBairro option:eq(0)").text("Bairros");
	}
	else
	{
		$("#ddlBairro option:eq(0)").text(txtLabel); 
		$("dl.bairro dd span span.ui-selectmenu-text").html(txtLabel);
	}
})

});

//Carregar o dropdow ddlTipo
function CarregarTipo() {
    $.ajax({
        url: "jsonTipo.aspx",
        data: "cod_pret=" + $("#ddlPretensao").val(),
        dataType: "json",
        success: function (json) {
            $("#ddltipo").empty();
            //$("#ddltipo").append("<option value='0'>Tipo</option>");
			//esse if é para consertar um erro ao carregar a pagina
			if(json != null){
				for (i = 0; i < json.tipos.length; i++) {
					$("#ddltipo").append("<option value=" + json.tipos[i].id + ">" + json.tipos[i].tipo + "</option>")
				}
				$("#ddltipo").multiselect({
					close:function(){
					$("#ddlFinalidade").selectmenu("refresh");
					}
				});
				
			
			}
			else {
				return false;
			}            
        },
        error: function (json) {
            var e = json;
        }
    });
}

//essa funcao chama direto na dll -----> NAO RETIRAR
function bairroThickbox(idBairro) {
}	


