<?php
session_start();
include("conexao.php");

$email = $_POST['email'];
$senha = $_POST['senha'];

$sql = "SELECT * FROM cliente WHERE email = '$email'";
$result = mysqli_query($conexao, $sql);

if (mysqli_num_rows($result) == 1) {
    $usuario = mysqli_fetch_assoc($result);

    if (password_verify($senha, $usuario['senha'])) {
        $_SESSION['cpf'] = $usuario['cpf'];
        echo "Login realizado com sucesso";
    } else {
        echo "Senha incorreta";
    }
} else {
    echo "Usuário não encontrado";
}   