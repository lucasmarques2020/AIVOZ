function Select() {
    var input = document.getElementsByClassName()
}

function recur(resultSpeak) {
    let Vetor = resultSpeak.toLowerCase().split(' ');
    let r = '';
    let aux = '';
    let auxValor = [];
    let auxAtr = [];
    let cont = 0;
    for (let i = Vetor.length; i >= 0; i--) {
        //comando tags
        if (Vetor[i] == 'div' || Vetor[i] == 'divi') {
            r = '<div' + aux + '>\n\t' + r + '\n</div>';
            aux = '';
        } else if (Vetor[i] == 'parágrafo') {
            r = '<p' + aux + '>\n\t' + r + '\n</p>';
            aux = '';
        } else if (Vetor[i] == 'link') {
            r = '<a' + aux + '>\n\t' + r + '\n</a>';
            aux = '';
        } else if (Vetor[i] == 'h1') {
            r = '<h1' + aux + '>\n\t' + r + '\n</h1>';
            aux = '';
        } else if (Vetor[i] == 'h2') {
            r = '<h2' + aux + '>\n\t' + r + '\n</h2>';
            aux = '';
        } else if (Vetor[i] == 'h3') {
            r = '<h3' + aux + '>\n\t' + r + '\n</h3>';
            aux = '';
        } else if (Vetor[i] == 'h4') {
            r = '<h4' + aux + '>\n\t' + r + '\n</h4>';
            aux = '';
        } else if (Vetor[i] == 'h5') {
            r = '<h5' + aux + '>\n\t' + r + '\n</h5>';
            aux = '';
        } else if (Vetor[i] == 'h6') {
            r = '<h6' + aux + '>\n\t' + r + '\n</h6>';
            aux = '';
        } else if (Vetor[i] == 'imagem') {
            r = '<img' + aux + r + '>';
            aux = '';
        } else if (Vetor[i] == 'input') {
            r = '<input' + aux + r + '>';
            aux = '';
        } else if (Vetor[i] == 'label') {
            r = '<label' + aux + '>\n\t' + r + '\n</label>';
            aux = '';
        } else if (Vetor[i] == 'formulário') {
            r = '<form' + aux + '>\n\t' + r + '\n</form>';
            aux = '';
        }
        //comando auxiliar 
        else if (Vetor[i] == 'com') {
            for (let j = 0; j < cont; j++) {
                aux += ' ' + auxAtr[j] + '="' + auxValor[j] + '"';
            }
            cont = 0;
            auxValor = [];
            auxAtr = [];
        }
        //comando atributo 
        else if (Vetor[i] == 'classe') {
            auxAtr[cont] = 'class';
            cont++;
        } else if (Vetor[i] == 'identificador') {
            auxAtr[cont] = 'id';
            cont++;
        } else if (Vetor[i] == 'placeholder') {
            auxAtr[cont] = 'placeholder';
            cont++;
        } else if (Vetor[i] == 'caminho') {
            auxAtr[cont] = 'src';
            cont++;
        } else if (Vetor[i] == 'tipo') {
            auxAtr[cont] = 'type';
            cont++;
        } else if (Vetor[i] == 'action') {
            auxAtr[cont] = 'action';
            cont++;
        } else {
            auxValor[cont] = Vetor[i];
        }
    }
    return r;
}
(function() {
    var speakBtn = document.querySelector('#speakbt');
    var resultSpeaker = document.querySelector('#resultSpeak');

    if (window.SpeechRecognition || window.webkitSpeechRecognition) {
        var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
        var myRecognition = new SpeechRecognition();
        myRecognition.lang = 'pt-BR';

        speakBtn.addEventListener('click', function() {
            try {
                myRecognition.start();
                resultSpeaker.innerHTML = "Estou te ouvindo...";

            } catch (erro) {
                alert('erro: ' + erro.message);
            }

        }, false);

        myRecognition.addEventListener('result', function(evt) {
            var resultSpeak = evt.results[0][0].transcript;
            var GetVl = '';
            var input = document.getElementsByClassName("resultSpeak");
            console.log(resultSpeak);
            resultSpeaker.innerHTML = resultSpeak;
            GetVl = editor.getValue();
            let cursor = editor.cursorCoords();
            console.log(cursor);
            switch (resultSpeak.toLowerCase()) {
                //comando layout
                case 'modo escuro':
                    editor.setOption("theme", "ambiance");
                    break;
                case 'modo claro':
                    editor.setOption("theme", "eclipse");
                    break;
                    //comando estrutura
                case 'estrutura html':
                    editor.replaceSelection("\n<!DOCTYPE html>\n\n<html lang='pt-br'>\n\n<head>\n\n    <title>Default Struct HTML</title>\n\n</head>\n\n<body>\n\n    <div>\n\n    <h1>Olá Mundo!</h1>\n\n    </div>\n\n</body>\n\n</html>");
                    break;
                case 'estrutura bootstrap':
                    editor.replaceSelection("<!DOCTYPE html> \n \n \n<html lang='pt-br'> \n \n \n<head> \n \n \n    <meta charset='utf-8'> \n \n \n    <meta http-equiv='X-UA-Compatible' content='IE=edge'>\n \n \n    <meta name='viewport' content='width=device-width, initial-scale=1'> \n \n \n    <title>Bootstrap 101 Template</title>\n \n \n    <link href='css/bootstrap.min.css' rel='stylesheet'>\n \n \n</head>\n \n \n<body>\n \n \n    <h1>Olá, mundo!</h1>\n \n \n    <script src='https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js'></script>\n \n \n    <script src='js/bootstrap.min.js'></script>\n \n \n</body>\n \n \n</html>");
                    break;
                    //comando criar
                case 'criar div':
                    editor.replaceSelection("\n    <div class = 'div'></div>");
                    break;
                case 'criar h1':
                    editor.replaceSelection("\n    <h1>Seu texto h1 aqui!</h1>");
                    break;
                case 'criar h2':
                    editor.replaceSelection("\n    <h2>Seu texto h2 aqui!</h2>");
                    break;
                case 'criar h3':
                    editor.replaceSelection("\n    <h3>Seu texto h3 aqui!</h3>");
                    break;
                case 'criar h4':
                    editor.replaceSelection("\n    <h4>Seu texto h4 aqui!</h4>");
                    break;
                case 'criar h5':
                    editor.replaceSelection("\n    <h5>Seu texto h4 aqui!</h5>");
                    break;
                case 'criar h6':
                    editor.replaceSelection("\n    <h6>Seu texto h4 aqui!</h6>");
                    break;
                case 'criar botão':
                    editor.replaceSelection("\n    <button class = 'btn'>BOTÃO</button>");
                    break;
                case 'criar link':
                    editor.replaceSelection("\n    <a href = '#' target='_blank'>Seu link!</a>");
                    break;
                case 'criar formulário':
                    editor.replaceSelection("\n    <form action='acao-da-pagina' method='post'>\n\n    <label class = 'label'>Nome:</label>\n    <input class 'input' placeholder = 'informe seu nome'>\n    <label class = 'label'>Senha:</label>\n    <input class 'input' placeholder = 'informe sua senha'>\n\n    </form>");
                    break;
                case 'criar input':
                    editor.replaceSelection("\n    <input class 'input' placeholder = 'seu input'>");
                    break;
                case 'criar label':
                    editor.replaceSelection("\n    <label class = 'label'>Sua label aqui!</label>");
                    break;
                case 'criar parágrafo':
                    editor.replaceSelection("\n    <p>Seu paragráfo aqui!</p>");
                    break;
                case 'criar rodapé':
                    editor.replaceSelection("\n<footer>\n    <p>Author: AIVOZ Refsnes</p>\n    <p><a href='AIVOZ:aivoz@example.com'>aivoz@example.com</a></p>\n</footer>");
                    break;
                    //comando alterar
                    //teste

                    //comando remover
                case 'remover tudo':
                    editor.setValue("");
                    break;
                case 'remover seleção':
                    editor.replaceSelection("");
                    break;
                    //comando estilo
                case 'estilo novo':
                    editor.replaceSelection("\n<style>\n*{\n    justify-content: center;\n    align-content: center;\n    object-position: center;\n    position: absolute;\n}\nbody{\n    margin:0px; \n    padding: 0px; \n}\n</style>\n");
                    break;
                case 'estilo botão':
                    editor.replaceSelection("\n.btn{\n    background: rgb(0, 140, 255); \n    padding: 10px;\n    width: 100px;\n    color: white; \n    border-radius: 10px;\n    border: none; \n \n}\n\n.btn:hover{\n    background: rgb(0, 183, 255); \n    color: white;\n}\n");
                    break;
                    //comando buscar
                case 'rock lee versus gaara':
                    window.location = 'https://www.youtube.com/watch?v=VgDgWzBL7s4', target = '_blank';
                    break;
                case 'google':
                    window.location = 'https://www.google.com', target = '_blank';
                    break;
                case 'launchertech':
                    window.location = 'https://www.launchertech.com', target = '_blank';
                    break;
                    //nivel 2 da aplicação
                default:
                    editor.replaceSelection("\n" + recur(resultSpeak));
                    break;
            }
        }, false);


        myRecognition.addEventListener('error', function() {
            resultSpeaker.innerHTML = "Não entendi muito bem!";
        }, false);
    } else {
        resultSpeaker.innerHTML = "Seu navegador não suporta a tecnologia!";
    }
})();