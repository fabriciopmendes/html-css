<?php
// Conectar ao banco de dados (substitua os valores pelos seus próprios)
$servername = "127.0.0.1";
$username = "root";
$password = "";
$dbname = "Local_instance_MySQL80";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}

// Consulta para obter os dados do banco de dados (por exemplo)
$sql = "SELECT nome, email FROM tabela";

$result = $conn->query($sql);

// Verificar se a consulta retornou resultados
if ($result->num_rows > 0) {
    // Saída dos dados para o seu site (vamos usar uma tabela neste exemplo)
    echo "<table>";
    echo "<tr><th>Nome</th><th>E-mail</th></tr>";

    while ($row = $result->fetch_assoc()) {
        echo "<tr><td>" . $row["nome"] . "</td><td>" . $row["email"] . "</td></tr>";
    }

    echo "</table>";
} else {
    echo "Nenhum dado encontrado.";
}

$conn->close();
?>