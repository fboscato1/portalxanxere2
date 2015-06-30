<!--A Design by W3layouts
Author: W3layout
Author URL: http://w3layouts.com
License: Creative Commons Attribution 3.0 Unported
License URL: http://creativecommons.org/licenses/by/3.0/
-->
<!DOCTYPE HTML>
<html>
	<head>
		<title>Duhoot Bootstarp Website Template | 404 :: w3layouts</title>
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
	</head>
	<body>
		<div class="header">
			<div class="col-sm-8 header-left">
				<div class="logo">
					<a href="index.html"><img src="images/logo.png" alt=""/></a>
				</div>
				<div class="menu">
					<a class="toggleMenu" href="#"><img src="images/nav.png" alt="" /></a>
					<ul class="nav" id="nav">
						<li>
							<a href="index.html">Reality</a>
						</li>
						<li>
							<a href="living.html">Living</a>
						</li>
						<li>
							<a href="education.html">Education</a>
						</li>
						<li>
							<a href="entertain.html">Entertainment</a>
						</li>
						<li class="active">
							<a href="404.html">Mobility</a>
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
						<form id="loginForm">
							<fieldset id="body">
								<fieldset>
									<label for="email">Email Address</label>
									<input type="text" name="email" id="email">
								</fieldset>
								<fieldset>
									<label for="password">Password</label>
									<input type="password" name="password" id="password">
								</fieldset>
								<input type="submit" id="login" value="Sign in">
								<label for="checkbox">
									<input type="checkbox" id="checkbox">
									<i>Remember me</i></label>
							</fieldset>
							<span><a href="#">Forgot your password?</a></span>
						</form>
					</div>
				</div>
				<div class="clearfix"></div>
			</div>
			<div class="clearfix"></div>
		</div>
		<div class="page-not-found">
			<h1>404</h1>
		</div>
		<div class="footer">
			<div class="container">
				<div class="footer_top">
					<h3>Subscribe to our newsletter</h3>
					<form>
						<span> <i><img src="images/mail.png" alt=""></i>
							<input type="text" value="Enter your email" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Enter your email';}">
							<label class="btn1 btn2 btn-2 btn-2g">
								<input name="submit" type="submit" id="submit" value="Subscribe">
							</label> <div class="clearfix"></div> </span>
					</form>
				</div>
				<div class="footer_grids">
					<div class="footer-grid">
						<h4>Ipsum Quis</h4>
						<ul class="list1">
							<li>
								<a href="contact.html">Contact</a>
							</li>
							<li>
								<a href="#">Mirum est</a>
							</li>
							<li>
								<a href="#">placerat facer</a>
							</li>
							<li>
								<a href="#">claritatem</a>
							</li>
							<li>
								<a href="#">sollemnes </a>
							</li>
						</ul>
					</div>
					<div class="footer-grid">
						<h4>Quis Ipsum</h4>
						<ul class="list1">
							<li>
								<a href="#">placerat facer</a>
							</li>
							<li>
								<a href="#">claritatem</a>
							</li>
							<li>
								<a href="#">sollemnes </a>
							</li>
							<li>
								<a href="#">Claritas</a>
							</li>
							<li>
								<a href="#">Mirum est</a>
							</li>
						</ul>
					</div>
					<div class="footer-grid last_grid">
						<h4>Follow Us</h4>
						<ul class="footer_social">
							<li>
								<a href=""> <i class="fb"> </i> </a>
							</li>
							<li>
								<a href=""><i class="tw"> </i> </a>
							</li>
							<li>
								<a href=""><i class="google"> </i> </a>
							</li>
							<li>
								<a href=""><i class="u_tube"> </i> </a>
							</li>
						</ul>
						<div class="copy" id="contact">
							<p>
								&copy; Template by <a href="http://w3layouts.com/" target="_blank">W3layouts</a>
							</p>
						</div>
					</div>
					<div class="clearfix"></div>
				</div>
			</div>
		</div>
	</body>
</html>
