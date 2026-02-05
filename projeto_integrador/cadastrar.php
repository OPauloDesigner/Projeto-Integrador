<?php
include("conexao.php");

$cpf = $_POST['cpf'];
$nome = $_POST['nome'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];
$senha = password_hash($_POST['senha'], PASSWORD_DEFAULT);

$sql = "INSERT INTO cliente (cpf, nome, email, telefone, senha)
        VALUES ('$cpf', '$nome', '$email', '$telefone', '$senha')";

if (mysqli_query($conexao, $sql)) {
    echo "Cadastro realizado com sucesso";
} else {
    echo "Erro ao cadastrar";
}