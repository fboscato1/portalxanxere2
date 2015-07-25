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
		<div class="col-md-3 wow fadeInLeft" data-wow-delay="0.4s">
			<div class="living_box">

				<a href="#"> <img class="img-responsive" src="images/l3.jpg" alt=""> <span class="sale-box"> <span class="sale-label">Apartamento</span> </span> </a>
				<div class="living_desc">
					<h3><a href="#">Project Name</a></h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.
					</p>
				</div>
				<table border="1" class="propertyDetails">
					<tbody>
						<tr>
							<td><img src="images/area.png" alt="" style="margin-right:7px;">2,412m</td>
							<td><img src="images/bed.png" alt="" style="margin-right:7px;">6 Beds</td>
							<td><img src="images/drop.png" alt="" style="margin-right:7px;">3 Baths</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>


		<div class="col-md-4 wow fadeInLeft" data-wow-delay="0.3s">
			<div class="living_box">
				<a href="#"> <img src="images/l1.jpg" class="img-responsive" alt=""/> <span class="sale-box"> <span class="sale-label">Apartamento</span> </span> </a>
				<div class="living_desc">
					<h3><a href="#">aliquam volutp</a></h3>
					<p>
						Lorem ipsum consectetuer adipiscing
					</p>
					<a href="#" class="btn3">Detalhes</a>
					<p class="price">
						$687,000
					</p>
				</div>
				<table border="1" class="propertyDetails">
					<tbody>
						<tr>
							<td><img src="images/area.png" alt="" style="margin-right:7px;">48.400,00m</td>
							<td><img src="images/bed.png" alt="" style="margin-right:7px;">6 Dormitorios</td>
							<td><img src="images/drop.png" alt="" style="margin-right:7px;">3 Quartos</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>

<?php
include "rodape.php";
?>
