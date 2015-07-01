<?php
// show potential errors / feedback (from login object)
if (isset($login)) {
	if ($login -> errors) {
		foreach ($login->errors as $error) {
			echo $error;
		}
	}
	if ($login -> messages) {
		foreach ($login->messages as $message) {
			echo $message;
		}
	}
}
?>

<head>
	<title>Duhoot Bootstarp Website Template | Home :: w3layouts</title>
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
	<script>
		new WOW().init();
	</script>
</head>

<!-- login form box  original-->
<!--<form method="post" action="index.php" name="loginform">
<label for="login_input_username">Username</label>
<input id="login_input_username" class="form-control" type="text" name="user_name" required />
<label for="login_input_password">Password</label>
<input id="login_input_password" class="form-control" type="password" name="user_password" autocomplete="off" required />
<input  type="submit"  name="login" value="Log in" />
</form>
<a href="register.php">Register new account</a>
<!-- fim original -->
<!--
you can substitue the span of reauth email for a input with the email and
include the remember me checkbox
-->
<div class="col-sm-4 header-left"></div>
<div class="col-sm-4 header-left">
	<div class="row">
		<div class="container_wrap">
			<div class="card card-container">
				<!-- <img class="profile-img-card" src="//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120" alt="" /> -->
				
				<img id="profile-img" class="img-circle" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
				<p id="profile-name" class="profile-name-card"></p>
				<form method="post" class="form-signin" action="index.php" name="loginform">

					<input type="email" id="inputEmail" class="form-control" placeholder="Endereco Email" name="user_name" placeholder="Nome de usuario" required autofocus>
					<input type="password" id="login_input_username" class="form-control" placeholder="Senha" required name="user_password">
					<span id="reauth-pass" class="reauth" type></span>
					<span id="reauth-email" class="reauth-email"></span>
					<div id="remember" class="checkbox">
						<label>
							<input type="checkbox" value="remember-me">
							Remember me </label>
					</div>
					<input  class="btn btn-lg btn-primary btn-block btn-signin" type="submit"  name="login" value="Log in" />
				</form><!-- /form -->
				<a href="#" class="forgot-password"> Forgot the password? </a>
			</div><!-- /card-container -->
		</div><!-- /container -->
	</div>
</div>
<div class="col-sm-4 header-left"></div>