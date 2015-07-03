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
<?php
    include "cabecalho.php";
	include "rodape.php";
?>