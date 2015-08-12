$(document).ready(function() {

/********************************************/ 
/* SUPER DESTAQUE 01
/********************************************/
if($("#superDestaque01 .image").length) {

	$("#superDestaque01 .rodaSuperDestaque").carouFredSel({
		responsive  : true,
		items: 1,
		auto: {
			fx: "scroll",
			timeoutDuration:15000,
			duration:1000
		},
		prev: {	
			button: "#superDestaque01 .prevSuper",
			key: "left",
			fx: "scroll",
			items: 1,
			duration:1000
		},
		next: { 
			button: "#superDestaque01 .nextSuper",
			key: "right",
			fx: "scroll",
			items: 1,
			duration:1000
		},
		swipe       : {
			onTouch     : true,
			onMouse     : true
		}
	});
	//trocar cor de fundo no hover do destaque
	$("#superDestaque01 .boxSuperDestaque .destaque").hover(function(){
		$(".features", this).removeClass('bgColor2');
		$(".features", this).addClass('bgColor1');
	}, function(){
		$(".features", this).removeClass('bgColor1');
		$(".features", this).addClass('bgColor2');
	});
	
	//Insere icones
	$("#superDestaque01 .importantes .in_dorm").prepend("<i class='fa fa-bed'></i>");
	$("#superDestaque01 .importantes .in_suites").prepend("<i class='fa ga-bathroom-02'></i>");
	$("#superDestaque01 .importantes .in_garagens").prepend("<i class='fa ga-garage-01'></i>");
	
	//Retira textos
	$("#superDestaque01 .importantes .in_dorm").each(function() {
		$(this).html($(this).html().replace(" dormitórios",""));
	});	
	$("#superDestaque01 .importantes .in_dorm").each(function() {
		$(this).html($(this).html().replace(" dormitório",""));
	});	
	
	$("#superDestaque01 .importantes .in_suites").each(function() {
		$(this).html($(this).html().replace(" suítes",""));
	});	
	$("#superDestaque01 .importantes .in_suites").each(function() {
		$(this).html($(this).html().replace(" suíte",""));
	});	
	
	$("#superDestaque01 .importantes .in_garagens").each(function() {
		$(this).html($(this).html().replace(" vagas descobertas",""));
	});		
	$("#superDestaque01 .importantes .in_garagens").each(function() {
		$(this).html($(this).html().replace(" vagas cobertas",""));
	});		
	$("#superDestaque01 .importantes .in_garagens").each(function() {
		$(this).html($(this).html().replace(" vagas",""));
	});
	$("#superDestaque01 .importantes .in_garagens").each(function() {
		$(this).html($(this).html().replace(" vaga descoberta",""));
	});		
	$("#superDestaque01 .importantes .in_garagens").each(function() {
		$(this).html($(this).html().replace(" vaga coberta",""));
	});		
	$("#superDestaque01 .importantes .in_garagens").each(function() {
		$(this).html($(this).html().replace(" vaga",""));
	});	

} else {
	$("#superDestaque01").hide();
}

/********************************************/ 
/* SUPER DESTAQUE 02
/********************************************/
if($("#superDestaque02 .image").length){

	$("#superDestaque02 .boxSuperDestaqueSideThumbs .sp-slide").each(function(){
		var src  = $(this).find("img").attr('src');
		var desc = $(this).find(".tipo").text();

		var body  =  "<div class='sp-thumbnail'>";
			body +=  "	<div class='sp-thumbnail-image-container'>";
			body +=  "		<img class='sp-thumbnail-image' src='"+src+"' class='img-responsive'/>";
			body +=  "	</div>";
			body +=  "	<div class='sp-thumbnail-text'>";
			body +=  "		<div class='sp-thumbnail-title'>"+desc+"</div>";
			body +=  "	</div>";
			body +=  "</div>";

		$("#superDestaque02 .boxSuperDestaqueSideThumbs .sp-thumbnails").append(body);

	});

	$('#superDestaque02 .boxSuperDestaqueSideThumbs .image img').addClass("sp-image");

	$( '#superDestaque02 .boxSuperDestaqueSideThumbs' ).sliderPro({
		width: "100%",
		height: 400,
		autoplay: true,
		orientation: 'horizontal',
		loop: false,
		arrows: true,
		buttons: false,
		smallSize: 500,
		mediumSize: 1000,
		largeSize: 3000,
		centerImage: true,
		imageScaleMode: "contain", 
		imageScaleMode: 'cover',
		thumbnailsPosition: 'right',
		thumbnailPointer: true,
		thumbnailWidth: 290,
		thumbnailHeight: 134,
		breakpoints: {
			800: {
				thumbnailsPosition: 'bottom',
				thumbnailWidth: 160,
				thumbnailHeight: 130,
				height: 233
			},
			500: {
				thumbnailsPosition: 'bottom',
				thumbnailWidth: 120,
				thumbnailHeight: 75,
				height: 233
			}
		}
	});

	$(".nextSuper").on('click', function(){
		$("#superDestaque02 .boxSuperDestaqueSideThumbs .sp-next-arrow").trigger('click');
	});

	$(".prevSuper").on('click', function(){
		$("#superDestaque02 .boxSuperDestaqueSideThumbs .sp-previous-arrow").trigger('click');
	});

		// Separa as thumbs do slider e adiciona na lateral
		var caption = $(this).find(".sp-caption-container").detach();
		$('#superDestaque02 .boxSuperDestaqueSideThumbs .sp-slides-container').append(caption);

		//Insere icones
		$("#superDestaque02 .boxSuperDestaqueSideThumbs  .importantes .in_dorm").prepend("<i class='fa fa-bed'></i>");
		$("#superDestaque02 .boxSuperDestaqueSideThumbs  .importantes .in_suites").prepend("<i class='fa ga-bathroom-02'></i>");
		$("#superDestaque02 .boxSuperDestaqueSideThumbs  .importantes .in_garagens").prepend("<i class='fa ga-garage-02'></i>");
		
		//Retira textos
		$("#superDestaque02 .boxSuperDestaqueSideThumbs  .importantes .in_dorm").each(function() {
			$(this).html($(this).html().replace(" dormitórios",""));
		});	
		$("#superDestaque02 .boxSuperDestaqueSideThumbs  .importantes .in_dorm").each(function() {
			$(this).html($(this).html().replace(" dormitório",""));
		});	
		
		$("#superDestaque02 .boxSuperDestaqueSideThumbs  .importantes .in_suites").each(function() {
			$(this).html($(this).html().replace(" suítes",""));
		});	
		$("#superDestaque02 .boxSuperDestaqueSideThumbs  .importantes .in_suites").each(function() {
			$(this).html($(this).html().replace(" suíte",""));
		});	
		
		$("#superDestaque02 .boxSuperDestaqueSideThumbs  .importantes .in_garagens").each(function() {
			$(this).html($(this).html().replace(" vagas descobertas",""));
		});		
		$("#superDestaque02 .boxSuperDestaqueSideThumbs  .importantes .in_garagens").each(function() {
			$(this).html($(this).html().replace(" vagas cobertas",""));
		});		
		$("#superDestaque02 .boxSuperDestaqueSideThumbs  .importantes .in_garagens").each(function() {
			$(this).html($(this).html().replace(" vagas",""));
		});
		$("#superDestaque02 .boxSuperDestaqueSideThumbs  .importantes .in_garagens").each(function() {
			$(this).html($(this).html().replace(" vaga descoberta",""));
		});		
		$("#superDestaque02 .boxSuperDestaqueSideThumbs  .importantes .in_garagens").each(function() {
			$(this).html($(this).html().replace(" vaga coberta",""));
		});		
		$("#superDestaque02 .boxSuperDestaqueSideThumbs  .importantes .in_garagens").each(function() {
			$(this).html($(this).html().replace(" vaga",""));
		});	

	} else {
		$("#superDestaque02").hide();
	}

/********************************************/ 
/* SUPER DESTAQUE 03
/********************************************/
if($("#superDestaque03 .destaque").length > 3){

	//carrosel do super destaque
	function highlight( items ) {
		items.filter(":eq(1)").css({
			backgroundColor: "#ff9",
			opacity	: 1
		});
		items.filter(":eq(1)").find(".features").fadeIn();
		return items;
	}
	function unhighlight( items ) {
		items.css({
			backgroundColor: "#fff",
			opacity	: 0.5
		});
		return items;
	}

	$("#superDestaque03 .rodaSuperDestaque").carouFredSel({
		responsive  : true,
		items       : {
			visible     : 3,
			width       : 1040
		},
		scroll	: 1,
		prev: {	
			button: "#superDestaque03 .prevSuper",
			key: "left",
			fx: "scroll",
			items: 1,
			duration:1000,
			onBefore: function( data ) {
				$("#superDestaque03 .features").fadeOut();
				unhighlight( data.items.old );
			},
			onAfter	: function( data ) {
				highlight( data.items.visible );
			}
		},
		next: { 
			button: "#superDestaque03 .nextSuper",
			key: "right",
			fx: "scroll",
			items: 1,
			duration:1000,
			onBefore: function( data ) {
				$("#superDestaque03 .features").fadeOut();
				unhighlight( data.items.old );
			},
			onAfter	: function( data ) {
				highlight( data.items.visible );
			}
		},
		auto: {
			onBefore: function( data ) {
				$("#superDestaque03 .features").fadeOut();
				unhighlight( data.items.old );
			},
			onAfter	: function( data ) {
				highlight( data.items.visible );
			},
			items: 1,
			duration:1000
		},
		swipe       : {
			onTouch     : true,
			onMouse     : true
		}
	});

	highlight(unhighlight($("#superDestaque03 .rodaSuperDestaque > *")));

	//Insere icones
	$("#superDestaque03 .importantes .in_dorm").prepend("<i class='fa fa-bed'></i>");
	$("#superDestaque03 .importantes .in_suites").prepend("<i class='fa ga-bathroom-02'></i>");
	$("#superDestaque03 .importantes .in_garagens").prepend("<i class='fa ga-garage-01'></i>");
	
	//Retira textos
	$("#superDestaque03 .importantes .in_dorm").each(function() {
		$(this).html($(this).html().replace(" dormitórios",""));
	});	
	$("#superDestaque03 .importantes .in_dorm").each(function() {
		$(this).html($(this).html().replace(" dormitório",""));
	});	
	
	$("#superDestaque03 .importantes .in_suites").each(function() {
		$(this).html($(this).html().replace(" suítes",""));
	});	
	$("#superDestaque03 .importantes .in_suites").each(function() {
		$(this).html($(this).html().replace(" suíte",""));
	});	
	
	$("#superDestaque03 .importantes .in_garagens").each(function() {
		$(this).html($(this).html().replace(" vagas descobertas",""));
	});		
	$("#superDestaque03 .importantes .in_garagens").each(function() {
		$(this).html($(this).html().replace(" vagas cobertas",""));
	});		
	$("#superDestaque03 .importantes .in_garagens").each(function() {
		$(this).html($(this).html().replace(" vagas",""));
	});
	$("#superDestaque03 .importantes .in_garagens").each(function() {
		$(this).html($(this).html().replace(" vaga descoberta",""));
	});		
	$("#superDestaque03 .importantes .in_garagens").each(function() {
		$(this).html($(this).html().replace(" vaga coberta",""));
	});		
	$("#superDestaque03 .importantes .in_garagens").each(function() {
		$(this).html($(this).html().replace(" vaga",""));
	});	
	
} else {
	$("#superDestaque03").remove();
}

/********************************************/ 
/* SUPER DESTAQUE 04
/********************************************/
if($("#superDestaque04 .image").length){

	$("#superDestaque04 .rodaSuperDestaque").carouFredSel({
		responsive  : true,
		width: "100%",
		items: 1,
		auto: false,
		prev: {	
			button: "#superDestaque04 .prevSuper",
			key: "left",
			fx: "scroll",
			items: 1,
			duration:1000
		},
		next: { 
			button: "#superDestaque04 .nextSuper",
			key: "right",
			fx: "scroll",
			items: 1,
			duration:1000
		},
		swipe       : {
			onTouch     : true,
			onMouse     : true
		},
		pagination  : {
			container       : "#pagination",
			anchorBuilder   : function( nr ) {
				var src = $("img", this).attr( "src" );
				var body = "<div class='thumb-container borderColor1' style='background-image: url("+src+")'>";
				body += "</div>";
				return body;
			}
		}
	});

	//ajusta posicao dos features
	$("#superDestaque04 .features").each(function(){
		var alturaFeatures = $(this).height();
		$(this).css("margin-top","-" + (alturaFeatures / 2) + "px");
	});

	//Insere icones
	$("#superDestaque04 .importantes .in_dorm").prepend("<i class='fa fa-bed'></i>");
	$("#superDestaque04 .importantes .in_suites").prepend("<i class='fa ga-bathroom-02'></i>");
	$("#superDestaque04 .importantes .in_garagens").prepend("<i class='fa ga-garage-01'></i>");
	
	//Retira textos
	$("#superDestaque04 .importantes .in_dorm").each(function() {
		$(this).html($(this).html().replace(" dormitórios",""));
	});	
	$("#superDestaque04 .importantes .in_dorm").each(function() {
		$(this).html($(this).html().replace(" dormitório",""));
	});	
	
	$("#superDestaque04 .importantes .in_suites").each(function() {
		$(this).html($(this).html().replace(" suítes",""));
	});	
	$("#superDestaque04 .importantes .in_suites").each(function() {
		$(this).html($(this).html().replace(" suíte",""));
	});	
	
	$("#superDestaque04 .importantes .in_garagens").each(function() {
		$(this).html($(this).html().replace(" vagas descobertas",""));
	});		
	$("#superDestaque04 .importantes .in_garagens").each(function() {
		$(this).html($(this).html().replace(" vagas cobertas",""));
	});		
	$("#superDestaque04 .importantes .in_garagens").each(function() {
		$(this).html($(this).html().replace(" vagas",""));
	});
	$("#superDestaque04 .importantes .in_garagens").each(function() {
		$(this).html($(this).html().replace(" vaga descoberta",""));
	});		
	$("#superDestaque04 .importantes .in_garagens").each(function() {
		$(this).html($(this).html().replace(" vaga coberta",""));
	});		
	$("#superDestaque04 .importantes .in_garagens").each(function() {
		$(this).html($(this).html().replace(" vaga",""));
	});	

} else {
	$("#superDestaque04").hide();
}

/********************************************/ 
/* SUPER DESTAQUE 05
/********************************************/
if($("#superDestaque05 .image").length){

	$("#superDestaque05 .rodaSuperDestaque").carouFredSel({
		responsive  : true,
		width: "100%",
		height: "480px",
		items: 1,
		auto: {
			fx: "scroll",
			timeoutDuration:15000,
			duration:1000
		},
		prev: {	
			button: "#superDestaque05 .prevSuper",
			key: "left",
			fx: "scroll",
			items: 1,
			duration:1000
		},
		next: { 
			button: "#superDestaque05 .nextSuper",
			key: "right",
			fx: "scroll",
			items: 1,
			duration:1000
		},
		swipe       : {
			onTouch     : true,
			onMouse     : true
		},
		pagination  : {
			container       : "#pagination",
			anchorBuilder   : function( nr ) {
				var src = $("img", this).attr( "src" );
				var caption = $(".tipo", this).text();
				var bairro = $(".bairro", this).text();
				var description = $(".description", this).text();				
				var body = "<div class='thumb-container bgColor1 borderColor2'>";
				body += "<div class='thumb-overlay'>";
				body += "<div class='thumb-caption'>"+caption+"</div>";
				body += "<div class='thumb-bairro'>"+bairro+"</div>";
				body += "<div class='thumb-description'>"+description+"</div>";
				body += "</div>";
				body += "</div>";
	    		// src = src.replace( "/large/", "/small/");
	    		return body;
	    	}
	    }
	});

	// trocar cor de fundo no hover do destaque
	// $("#superDestaque05 .boxSuperDestaque .destaque").hover(function(){
	// 	$(".features", this).removeClass('bgColor2');
	// 	$(".features", this).addClass('bgColor1');
	// }, function(){
	// 	$(".features", this).removeClass('bgColor1');
	// 	$(".features", this).addClass('bgColor2');
	// });

	//Insere icones
	$("#superDestaque05  .importantes .in_dorm").prepend("<i class='fa fa-bed'></i>");
	$("#superDestaque05  .importantes .in_suites").prepend("<i class='fa ga-bathroom-02'></i>");
	$("#superDestaque05  .importantes .in_garagens").prepend("<i class='fa ga-garage-02'></i>");
	
	//Retira textos
	$("#superDestaque05  .importantes .in_dorm").each(function() {
		$(this).html($(this).html().replace(" dormitórios",""));
	});	
	$("#superDestaque05  .importantes .in_dorm").each(function() {
		$(this).html($(this).html().replace(" dormitório",""));
	});	
	
	$("#superDestaque05  .importantes .in_suites").each(function() {
		$(this).html($(this).html().replace(" suítes",""));
	});	
	$("#superDestaque05  .importantes .in_suites").each(function() {
		$(this).html($(this).html().replace(" suíte",""));
	});	
	
	$("#superDestaque05  .importantes .in_garagens").each(function() {
		$(this).html($(this).html().replace(" vagas descobertas",""));
	});		
	$("#superDestaque05  .importantes .in_garagens").each(function() {
		$(this).html($(this).html().replace(" vagas cobertas",""));
	});		
	$("#superDestaque05  .importantes .in_garagens").each(function() {
		$(this).html($(this).html().replace(" vagas",""));
	});
	$("#superDestaque05  .importantes .in_garagens").each(function() {
		$(this).html($(this).html().replace(" vaga descoberta",""));
	});		
	$("#superDestaque05  .importantes .in_garagens").each(function() {
		$(this).html($(this).html().replace(" vaga coberta",""));
	});		
	$("#superDestaque05  .importantes .in_garagens").each(function() {
		$(this).html($(this).html().replace(" vaga",""));
	});	

} else {
	$("#superDestaque05").hide();
}

/********************************************/ 
/* SUPER DESTAQUE 06
/********************************************/
if($("#superDestaque06 .destaque").length > 3) {

	//carrosel do super destaque
	function highlight( items ) {
		items.filter(":eq(1)").css({
			backgroundColor: "#ff9",
			opacity	: 1
		});
		items.filter(":eq(1)").find(".features").fadeIn();
		return items;
	}

	function unhighlight( items ) {
		items.css({
			backgroundColor: "#fff",
			opacity	: 0.5
		});
		return items;
	}

	$("#superDestaque06 .rodaSuperDestaque").carouFredSel({
		responsive  : true,
		items       : {
			visible     : 3,
			width       : 1040
		},
		scroll	: 1,
		prev: {	
			button: "#superDestaque06 .prevSuper",
			key: "left",
			fx: "scroll",
			items: 1,
			duration:1000,
			onBefore: function( data ) {
				$("#superDestaque06 .features").fadeOut();
				unhighlight( data.items.old );
			},
			onAfter	: function( data ) {
				highlight( data.items.visible );
			}
		},
		next: { 
			button: "#superDestaque06 .nextSuper",
			key: "right",
			fx: "scroll",
			items: 1,
			duration:1000,
			onBefore: function( data ) {
				$("#superDestaque06 .features").fadeOut();
				unhighlight( data.items.old );
			},
			onAfter	: function( data ) {
				highlight( data.items.visible );
			}
		},
		auto: false,
		swipe       : {
			onTouch     : true,
			onMouse     : true
		}
	});

	highlight( unhighlight( $("#superDestaque06 .rodaSuperDestaque > *") ) );


	//Insere icones
	$("#superDestaque06 .importantes .in_dorm").prepend("<i class='fa fa-bed'></i>");
	$("#superDestaque06 .importantes .in_suites").prepend("<i class='fa ga-bathroom-02'></i>");
	$("#superDestaque06 .importantes .in_garagens").prepend("<i class='fa ga-garage-01'></i>");
	
	//Retira textos
	$("#superDestaque06 .importantes .in_dorm").each(function() {
		$(this).html($(this).html().replace(" dormitórios",""));
	});	
	$("#superDestaque06 .importantes .in_dorm").each(function() {
		$(this).html($(this).html().replace(" dormitório",""));
	});	
	
	$("#superDestaque06 .importantes .in_suites").each(function() {
		$(this).html($(this).html().replace(" suítes",""));
	});	
	$("#superDestaque06 .importantes .in_suites").each(function() {
		$(this).html($(this).html().replace(" suíte",""));
	});	
	
	$("#superDestaque06 .importantes .in_garagens").each(function() {
		$(this).html($(this).html().replace(" vagas descobertas",""));
	});		
	$("#superDestaque06 .importantes .in_garagens").each(function() {
		$(this).html($(this).html().replace(" vagas cobertas",""));
	});		
	$("#superDestaque06 .importantes .in_garagens").each(function() {
		$(this).html($(this).html().replace(" vagas",""));
	});
	$("#superDestaque06 .importantes .in_garagens").each(function() {
		$(this).html($(this).html().replace(" vaga descoberta",""));
	});		
	$("#superDestaque06 .importantes .in_garagens").each(function() {
		$(this).html($(this).html().replace(" vaga coberta",""));
	});		
	$("#superDestaque06 .importantes .in_garagens").each(function() {
		$(this).html($(this).html().replace(" vaga",""));
	});	

} else {
	$("#superDestaque06").remove();
}

/********************************************/ 
/* SUPER DESTAQUE 07
/********************************************/
if($("#superDestaque07 .destaque").length){

	$("#superDestaque07 .rodaSuperDestaque").carouFredSel({
		width   : "100%",
		items       : {
			visible     : 1
		},
		scroll	: 1,
		prev: {	
			button: "#superDestaque07 .prevSuper",
			key: "left",
			fx: "scroll",
			items: 1,
			duration:1000
		},
		next: { 
			button: "#superDestaque07 .nextSuper",
			key: "right",
			fx: "scroll",
			items: 1,
			duration:1000
		},
		auto: {
			items: 1,
			duration:1000
		},
		swipe       : {
			onTouch     : true,
			onMouse     : true
		}
	});

	//Insere icones
	$("#superDestaque07 .importantes .in_dorm").prepend("<i class='fa fa-bed'></i>");
	$("#superDestaque07 .importantes .in_suites").prepend("<i class='fa ga-bathroom-02'></i>");
	$("#superDestaque07 .importantes .in_garagens").prepend("<i class='fa ga-garage-01'></i>");
	
	//Retira textos
	$("#superDestaque07 .importantes .in_dorm").each(function() {
		$(this).html($(this).html().replace(" dormitórios",""));
	});	
	$("#superDestaque07 .importantes .in_dorm").each(function() {
		$(this).html($(this).html().replace(" dormitório",""));
	});	
	
	$("#superDestaque07 .importantes .in_suites").each(function() {
		$(this).html($(this).html().replace(" suítes",""));
	});	
	$("#superDestaque07 .importantes .in_suites").each(function() {
		$(this).html($(this).html().replace(" suíte",""));
	});	
	
	$("#superDestaque07 .importantes .in_garagens").each(function() {
		$(this).html($(this).html().replace(" vagas descobertas",""));
	});		
	$("#superDestaque07 .importantes .in_garagens").each(function() {
		$(this).html($(this).html().replace(" vagas cobertas",""));
	});		
	$("#superDestaque07 .importantes .in_garagens").each(function() {
		$(this).html($(this).html().replace(" vagas",""));
	});
	$("#superDestaque07 .importantes .in_garagens").each(function() {
		$(this).html($(this).html().replace(" vaga descoberta",""));
	});		
	$("#superDestaque07 .importantes .in_garagens").each(function() {
		$(this).html($(this).html().replace(" vaga coberta",""));
	});		
	$("#superDestaque07 .importantes .in_garagens").each(function() {
		$(this).html($(this).html().replace(" vaga",""));
	});	
	function positionFaixa(){
		$("#superDestaque07 .faixaSuper").each(function(){
			var alturaFaixa = $(this).height();
			$(this).css("margin-top","-" + (alturaFaixa / 2) + "px");
		});

	}
	positionFaixa();
	$(window).resize(function(){
		positionFaixa();
	});	

} else {
	$("#superDestaque07").hide();
}

/********************************************/ 
/* SUPER DESTAQUE 08
/********************************************/
	//carrosel do super destaque
	if($("#superDestaque08 .image").length){

		$("#superDestaque08 .rodaSuperDestaque").carouFredSel({
			responsive  : true,
			width: "100%",
			height: "480px",
			items: 1,
			auto: {
				fx: "scroll",
				timeoutDuration:15000,
				duration:1000
			},
			prev: {	
				button: "#superDestaque08 .prevSuper",
				key: "left",
				fx: "scroll",
				items: 1,
				duration:1000
			},
			next: { 
				button: "#superDestaque08 .nextSuper",
				key: "right",
				fx: "scroll",
				items: 1,
				duration:1000
			},
			swipe       : {
				onTouch     : true,
				onMouse     : true
			},
			pagination  : {
				container       : "#pagination",
				anchorBuilder   : function( nr ) {
					var src = $("img", this).attr( "src" );
					var caption = $(".tipo", this).text();
					var body = "<div class='thumb-container borderColor1' style='background-image: url("+src+")'>";
					body += "</div>";
					return body;
				}
			}
		});
		
	//Insere icones
	$("#superDestaque08  .importantes .in_dorm").prepend("<i class='fa fa-bed'></i>");
	$("#superDestaque08  .importantes .in_suites").prepend("<i class='fa ga-bathroom-02'></i>");
	$("#superDestaque08  .importantes .in_garagens").prepend("<i class='fa ga-garage-02'></i>");
	
	//Retira textos
	$("#superDestaque08  .importantes .in_dorm").each(function() {
		$(this).html($(this).html().replace(" dormitórios",""));
	});	
	$("#superDestaque08  .importantes .in_dorm").each(function() {
		$(this).html($(this).html().replace(" dormitório",""));
	});	
	
	$("#superDestaque08  .importantes .in_suites").each(function() {
		$(this).html($(this).html().replace(" suítes",""));
	});	
	$("#superDestaque08  .importantes .in_suites").each(function() {
		$(this).html($(this).html().replace(" suíte",""));
	});	
	
	$("#superDestaque08  .importantes .in_garagens").each(function() {
		$(this).html($(this).html().replace(" vagas descobertas",""));
	});		
	$("#superDestaque08  .importantes .in_garagens").each(function() {
		$(this).html($(this).html().replace(" vagas cobertas",""));
	});		
	$("#superDestaque08  .importantes .in_garagens").each(function() {
		$(this).html($(this).html().replace(" vagas",""));
	});
	$("#superDestaque08  .importantes .in_garagens").each(function() {
		$(this).html($(this).html().replace(" vaga descoberta",""));
	});		
	$("#superDestaque08  .importantes .in_garagens").each(function() {
		$(this).html($(this).html().replace(" vaga coberta",""));
	});		
	$("#superDestaque08  .importantes .in_garagens").each(function() {
		$(this).html($(this).html().replace(" vaga",""));
	});	

} else {
	$("#superDestaque08").hide();
}

/********************************************/ 
/* LANCAMENTO 01
/********************************************/
if($("#lancamento01 .rodaBanners .image").length){
	$("#lancamento01 .rodaBanners").carouFredSel({
		responsive  : true,
		items: 1,
		auto: {
			fx: "scroll",
			timeoutDuration:15000,
			duration:1000
		},
		prev: {	
			button: "#lancamento01 .prevLanc",
			key: "left",
			fx: "scroll",
			items: 1,
			duration:1000
		},
		next: { 
			button: "#lancamento01 .nextLanc",
			key: "right",
			fx: "scroll",
			items: 1,
			duration:1000
		},
		swipe       : {
			onTouch     : true,
			onMouse     : true
		}
	});

} else {
	$("#lancamento01").hide();
}

/********************************************/ 
/* LANCAMENTO 02
/********************************************/
if($("#lancamento02 .image").length){

	$("#lancamento02 .rodaBanners").carouFredSel({
		width   : "100%",
		responsive: true,
		items: {
			visible: {
				min: 1,
				max: 3
			}
		},
		auto: {
			fx: "scroll",
			timeoutDuration:15000,
			duration:1000
		},
		prev: {	
			button: "#lancamento02 .prevLanc",
			key: "left",
			fx: "scroll",
			items: 1,
			duration:1000
		},
		next: { 
			button: "#lancamento02 .nextLanc",
			key: "right",
			fx: "scroll",
			items: 1,
			duration:1000
		},
		swipe       : {
			onTouch     : true,
			onMouse     : true
		}
	});

	$("#lancamento02 .destaque .description").each(function(){
		var resume = $(this).text();
		if(resume.length){
			$(this).text(resume.substr(0, 100)+"...");
		}
	});

	//$("#lancamento02 .destaque .description").hide();

} else {
	$("#lancamento02").hide();
}

});

/********************************************/ 
/* LANCAMENTO 03
/********************************************/


/********************************************/ 
/* LANCAMENTO 04
/********************************************/


/********************************************/ 
/* LANCAMENTO 05
/********************************************/


/********************************************/ 
/* LANCAMENTO 06
/********************************************/


/********************************************/ 
/* LANCAMENTO 07
/********************************************/


/********************************************/ 
/* LANCAMENTO 08
/********************************************/



function applyButton(divClass) {    
	$(document).ready(function() {
		$("#destaque01 .categoriasImoveisDestaque .btn").detach().appendTo("#destaque01 .topoNav");
		$("#destaque01 .topoNav .btn").removeClass("visible-xs");
		$("#destaque01 .topoNav .btn").addClass("hidden-xs");
	});
}
//chama os destaques via ajax e funcionalidade das abas
$(document).ready(function() {

/********************************************/ 
/* DESTAQUE 01
/********************************************/

$("#destaque01 .jsNavAbas li a").click(function(){

	var page = $(this).data('page');
	var divClass = "#" + $(this).data('box');

	$("#destaque01 .topoNav .btn").hide();

	if(!$(this).hasClass("loaded")){

		$(this).parent().parent().parent().parent().find("#" + $(this).data('box')).html("<div class='loadingDest'></div>");

		if (typeof page != "undefined") {
			$(divClass).load(page, function () {
				applyButton(divClass);
				$(".categoriasImoveisDestaque .destaque .features").equalHeights();
			});
			$(this).addClass("loaded");
		}
	}

	$(this).parent().parent().parent().parent().find(".jsHidden").hide();
	$(this).parent().parent().parent().parent().find("#" + $(this).data('box')).fadeIn();
	$(this).parent().parent().parent().find("." + $(this).data('box')).show();

	$(this).parent().prevAll().removeClass("bAtiva");
	$(this).parent().nextAll().removeClass("bAtiva");
	$(this).parent().addClass("bAtiva");

});

$("#destaque01 .jsNavAbas").each(function(){
	$("li a:eq(0)", this).trigger("click");
});


/********************************************/ 
/* DESTAQUE 02
/********************************************/
function applyButton2(divClass) {    
	$(document).ready(function() {
		$("#destaque02 .categoriasImoveisDestaque .btn").detach().appendTo("#destaque02 .topoNav");
		$("#destaque02 .topoNav .btn").removeClass("visible-xs");
		$("#destaque02 .topoNav .btn").addClass("hidden-xs");
	});
}

$("#destaque02 .jsNavAbas li a").click(function(){

	var page = $(this).data('page');
	var divClass = "#" + $(this).data('box');

	$("#destaque02 .topoNav .btn").hide();

	if(!$(this).hasClass("loaded")){

		$(this).parent().parent().parent().parent().find("#" + $(this).data('box')).html("<div class='loadingDest'></div>");

		if (typeof page != "undefined") {
			$(divClass).load(page, function () {
				applyButton2(divClass);
				
				//Insere icones
				$("#destaque02 .importantes .in_dorm").prepend("<i class='fa fa-bed'></i>");
				$("#destaque02 .importantes .in_suites").prepend("<i class='fa ga-bathroom-02'></i>");
				$("#destaque02 .importantes .in_garagens").prepend("<i class='fa ga-garage-01'></i>");
				
				//Retira textos
				$("#destaque02 .importantes .in_dorm").each(function() {
					$(this).html($(this).html().replace(" dormitórios",""));
				});	
				$("#destaque02 .importantes .in_dorm").each(function() {
					$(this).html($(this).html().replace(" dormitório",""));
				});	
				
				$("#destaque02 .importantes .in_suites").each(function() {
					$(this).html($(this).html().replace(" suítes",""));
				});	
				$("#destaque02 .importantes .in_suites").each(function() {
					$(this).html($(this).html().replace(" suíte",""));
				});	
				
				$("#destaque02 .importantes .in_garagens").each(function() {
					$(this).html($(this).html().replace(" vagas descobertas",""));
				});		
				$("#destaque02 .importantes .in_garagens").each(function() {
					$(this).html($(this).html().replace(" vagas cobertas",""));
				});		
				$("#destaque02 .importantes .in_garagens").each(function() {
					$(this).html($(this).html().replace(" vagas",""));
				});
				$("#destaque02 .importantes .in_garagens").each(function() {
					$(this).html($(this).html().replace(" vaga descoberta",""));
				});		
				$("#destaque02 .importantes .in_garagens").each(function() {
					$(this).html($(this).html().replace(" vaga coberta",""));
				});		
				$("#destaque02 .importantes .in_garagens").each(function() {
					$(this).html($(this).html().replace(" vaga",""));
				});

				function positionDIV(){
					$("#destaque02 .features").each(function(){
						var alturaFeatures = $(this).height();
						var alturaValores = $(this).find(".valoresInfo").height();
						$(this).css("bottom","-" + (alturaFeatures - alturaValores + 25) + "px");
					});
				}

				positionDIV();
				$(window).resize(function(){
					positionDIV();
				});	
			});

	$(this).addClass("loaded");
	
	}

}

$(this).parent().parent().parent().parent().find(".jsHidden").hide();
$(this).parent().parent().parent().parent().find("#" + $(this).data('box')).fadeIn();
$(this).parent().parent().parent().find("." + $(this).data('box')).show();

$(this).parent().prevAll().removeClass("bAtiva");
$(this).parent().nextAll().removeClass("bAtiva");
$(this).parent().addClass("bAtiva");


});

$("#destaque02 .jsNavAbas").each(function(){
	$("li a:eq(0)", this).trigger("click");
});

/********************************************/ 
/* CHAMADA 05
/********************************************/
$("#chamadas05 .chamadaBairros ul li").addClass("color1");

});