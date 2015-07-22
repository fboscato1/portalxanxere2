<?php
include "cabecalho.php";
?>
<div class="col-md-12 wow fadeInLeft" data-wow-delay="0.4s">
	<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
		<!-- Indicators -->
		<ol class="carousel-indicators">
			<li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
			<li data-target="#carousel-example-generic" data-slide-to="1"></li>
			<li data-target="#carousel-example-generic" data-slide-to="2"></li>
		</ol>

		<!-- Wrapper for slides -->
		<div class="carousel-inner" role="listbox">
			<div class="item active">
				<img src="images/_imoveis/pic1.jpg" alt="...">
				<div class="carousel-caption">
					...
				</div>
			</div>
			<div class="item">
				<img src="..." alt="...">
				<div class="carousel-caption">
					...
				</div>
			</div>
			...
		</div>

		<!-- Controls -->
		<a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev"> <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span> <span class="sr-only">Previous</span> </a>
		<a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next"> <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span> <span class="sr-only">Next</span> </a>
	</div>

</div>
<div class="living_middle">
	<div class="container">
		<h2 class="title block-title">Area de Vendas</h2>
		<?php
		include 'precos.php';
		?>
		<?php
		include '/vendas/fernando.php';
		?>
		<?php
		include '/vendas/juliane.php';
		?>
		<?php
		include '/vendas/isabella.php';
		?>
	</div>
</div>

<?php
include "rodape.php";
?>
