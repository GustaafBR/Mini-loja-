var idade = 0
var nome = "Desconhecido"
        function cliquecadastro() {
            nome = window.prompt(`Digite o seu nome:`)
            idade = Number(window.prompt(`Digite a sua idade, ${nome}:`))
            window.alert(`Dados Salvos!`)
        }
        function cliqueperfil() {
            window.alert(`Dados do usuário \nNome: ${nome} \nIdade: ${idade}`)
        }
        function login() {
            if (nome == "Desconhecido") {
                if (idade == 0) {
                    window.alert(`Você precisa ainda realizar o seu cadastro`)
                }
            } else {
                window.location.href = "Menu.html"
            }
        }
        function Resetar() {
            idade = 0
            nome = "Desconhecido"
        }