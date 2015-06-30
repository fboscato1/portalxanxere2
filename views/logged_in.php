<!-- if you need user information, just put them into the $_SESSION variable and output them here -->
Ei, <?php echo $_SESSION['user_name']; ?>. Você está logado. Tente fechar esta aba do navegador e abra-o novamente. Ainda logado! ;)

<!-- because people were asking: "index.php?logout" is just my simplified form of "index.php?logout=true" -->
<a href="index.php?logout">Logout</a>
