<?php
$host = "sql100.infinityfree.com";
$user = "if0_41016480";
$senha = "kZ4uwFQijizCbr";
$banco = "if0_41016480_bancoseguro";

$conexao = mysqli_connect($host, $user, $senha, $banco);

if (!$conexao) {
    die("Erro na conexão");
}
