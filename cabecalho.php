<!DOCTYPE HTML>
<html>
	<head>

		<title>Portal Xanxerê</title>
		<meta charset="UTF-8"  />
		<link href="css/bootstrap.css" rel='stylesheet' type='text/css' />

		<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
		<!-- Custom Theme files -->
		<link href="css/style.css" rel='stylesheet' type='text/css' />
		<!-- Custom Theme files -->
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<script type="application/x-javascript">
			addEventListener("load", function() {
				setTimeout(hideURLbar, 0);
			}, false);
			function hideURLbar() {
				window.scrollTo(0, 1);
			}
		</script>
		<!--webfont-->
		<link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
		<script type="text/javascript" src="js/jquery-1.11.1.min.js"></script>
		<script type="text/javascript" src="js/login.js"></script>
		<script src="js/jquery.easydropdown.js"></script>
		<!--Animation-->
		<script src="js/wow.min.js"></script>
		<link href="css/animate.css" rel='stylesheet' type='text/css' />
		<link rel="stylesheet" href="/font-awesome-4.3.0/css/font-awesome.min.css">
		<link rel="stylesheet" href="font-awesome-4.3.0/css/font-awesome.css">
		<script>
			new WOW().init();
		</script>
	</head>
	<body>
		<!--Inicio do Cabeçalho-->
		<div class="header">
			<div class="col-sm-8 header-left">
				<div class="logo">
					<a href="index.html"><img src="images/logo.png" alt=""/></a>
				</div>
				<div class="menu">
					<a class="toggleMenu" href="#"><img src="images/nav.png" alt="" /></a>
					<ul class="nav" id="nav">
						<li class="active">
							<a href="index.php">Home</a>
						</li>
						<li>
							<a href="emprego.php">Empregos</a>
						</li>
						<li>
							<a href="#">Culinaria</a>
						</li>
						<li>
							<a href="#">Entreterimento</a>
						</li>
						<li>
							<a href="vendas.php">Vendas</a>
						</li>
						<div class="clearfix"></div>
					</ul>
					<script type="text/javascript" src="js/responsive-nav.js"></script>
				</div>
				<!-- start search-->
				<div class="search-box">
					<div id="sb-search" class="sb-search">
						<form>
							<input class="sb-search-input" placeholder="Enter your search term..." type="search" name="search" id="search">
							<input class="sb-search-submit" type="submit" value="">
							<span class="sb-icon-search"> </span>
						</form>
					</div>
				</div>
				<!----search-scripts---->
				<script src="js/classie.js"></script>
				<script src="js/uisearch.js"></script>
				<script>
					new UISearch(document.getElementById('sb-search'));
				</script>
				<!----//search-scripts---->
				<div class="clearfix"></div>
			</div>

			<div class="col-sm-4 header_right">
				<div id="loginContainer">
					<a href="#" id="loginButton"><img src="images/login.png"><span>Login</span></a>
					<div id="loginBox">
						<form id="loginForm" method="post" action="logar.php" name="loginform">
							<fieldset id="body">
								<fieldset>
									<label for="email">Email Address</label>
									<input type="text"  id="email" name="user_name" required autofocus>
								</fieldset>
								<fieldset>
									<label for="password">Password</label>
									<input type="password"  id="password"name="user_password" requiredx>
								</fieldset>
								<input class="btn btn-lg btn-primary btn-block btn-signin" type="submit" name="login" id="login" value="Sign in">

								<label for="checkbox">
									<input type="checkbox" id="checkbox">
									<i>Remember me</i></label>
							</fieldset>
							<span><a href="#">Esqueceu sua senha?</a></span>

						</form>
					</div>
				</div>
				<div class="clearfix"></div>
			</div>
			<div class="clearfix"></div>
		</div>

		<div class="banner">

			<!--Barra de Pesquisa -->
			<!--<div class="container_wrap">
			<h1>What are you looking for?</h1>
			<div class="dropdown-buttons">
			<div class="dropdown-button">
			<select class="dropdown" tabindex="9" data-settings='{"wrapperClass":"flat"}'>
			<option value="0">Dubai</option>
			<option value="1">Australia</option>
			<option value="2">Sri Lanka</option>
			<option value="3">Newziland</option>
			<option value="4">Pakistan</option>
			<option value="5">United Kingdom</option>
			<option value="6">United states</option>
			<option value="7">Russia</option>
			<option value="8">Mirum</option>
			</select>
			</div>
			<div class="dropdown-button">
			<select class="dropdown" tabindex="9" data-settings='{"wrapperClass":"flat"}'>
			<option value="0">Education</option>
			<option value="1">tempor</option>
			<option value="2">congue</option>
			<option value="3">mazim </option>
			<option value="4">mutationem</option>
			<option value="5">hendrerit </option>
			<option value="5"></option>
			<option value="5"></option>
			</select>
			</div>
			</div>
			<form>
			<input type="text" value="Keyword, name, date, ..." onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Keyword, name, date, ...';}">
			<div class="contact_btn">
			<label class="btn1 btn-2 btn-2g">
			<input name="submit" type="submit" id="submit" value="Search">
			</label>
			</div>
			</form>
			<div class="clearfix"></div>
			</div> -->
		</div>
		<div class="content_top">
			<div class="container">
				<div class="col-md-4 bottom_nav">

					<div class="content_menu">
						<ul>
							<li class="active">
								<a href="#">Recommended</a>
							</li>
							<li>
								<a href="#">Latest</a>
							</li>
							<li>
								<a href="#">Highlights</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="col-md-4 content_dropdown1">
					<div class="content_dropdown">
						<!--	<select class="dropdown" tabindex="10" data-settings='{"wrapperClass":"metro"}'>
						<option value="0">Dubai</option>
						<option value="1">tempor</option>
						<option value="2">congue</option>
						<option value="3">mazim </option>
						<option value="4">mutationem</option>
						<option value="5">hendrerit </option>
						<option value="5"></option>
						<option value="5"></option>
						</select>-->
					</div>
					<div class="content_dropdown">
						<!--<select class="dropdown" tabindex="10" data-settings='{"wrapperClass":"metro"}'>
						<option value="0">Show Map</option>
						<option value="1">tempor</option>
						<option value="2">congue</option>
						<option value="3">mazim </option>
						<option value="4">mutationem</option>
						<option value="5">hendrerit </option>
						<option value="5"></option>
						<option value="5"></option>
						</select>-->
					</div>
				</div>
				<div class="col-md-4 filter_grid">
					<!--	<ul class="filter">
					<li class="fil">
					Filter :
					</li>
					<li>
					<a href=""> <i class="icon1"> </i> </a>
					</li>
					<li>
					<a href=""> <i class="icon2"> </i> </a>
					</li>
					<li>
					<a href=""> <i class="icon3"> </i> </a>
					</li>
					<li>
					<a href=""> <i class="icon4"> </i> </a>
					</li>
					<li>
					<a href=""> <i class="icon5"> </i> </a>
					</li>
					</ul>-->
				</div>
			</div>
		</div>
