/*$(document).ready(function(){
    $('input[@type="text"], textarea').keyup(update).mousedown(update).mousemove(update).mouseup(update);
});
(function addLocal(e, texto){
    $('.CodeMirror').replaceSelection(texto);
    e.preventDefault();
});
function update(e) {
var range = $(this).getSelection();
}*/

(function(){
    var speakBtn = document.querySelector('#speakbt');
    var resultSpeaker = document.querySelector('#resultSpeak');
    
    if(window.SpeechRecognition || window.webkitSpeechRecognition){
        var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
        var myRecognition = new SpeechRecognition();
        myRecognition.lang = 'pt-BR';
        
        speakBtn.addEventListener('click', function(){
            try{
                myRecognition.start();
                resultSpeaker.innerHTML = "Estou te ouvindo...";
                
            }catch(erro){
                alert('erro: '+ erro.message);
            }
            
        },false);
        
        myRecognition.addEventListener('result', function(evt){
            var resultSpeak = evt.results[0][0].transcript;
            var GetVl = '';
            console.log(resultSpeak);
            resultSpeaker.innerHTML = resultSpeak;
            GetVl = editor.getValue();
            switch(resultSpeak.toLowerCase()){
                    //comando layout
                case 'modo escuro':
                    editor.setOption("theme", "ambiance");
                    break;
                case 'modo claro':
                    editor.setOption("theme", "eclipse");
                    break;
                    //comando estrutura
                case 'estrutura html':
                    editor.setOption("value", GetVl+"\n<!doctype html>\n\n <html>\n\n <head>\n\n <title>Default Struct HTML</title>\n\n </head>\n\n <body>\n\n <div>\n\n <h1>Olá Mundo!</h1>\n\n </div>\n\n</body>\n\n </html>");
                    break;
                    //comando criar
                case 'criar div':
                    editor.setOption("value", GetVl+"\n<div></div>");
                    break;
                case 'criar botão':
                    editor.setOption("value", GetVl+"\n<button>BOTÃO</button>");
                    break;
                case 'criar parágrafo':
                    editor.setOption("value", GetVl+"\n <p>Lorem inpusu</p>");
                    break;
                    //comando adicionar

                    //comando remover
                case 'remover tudo':
                    editor.setOption("value", "");
                    break; 
                    //comando buscar
                case 'rock lee versus gaara':
                    window.location = 'https://www.youtube.com/watch?v=VgDgWzBL7s4', '_blank';
                    break;
                case 'google':
                    window.location = 'https://www.google.com', '_blank';
                    break;
                case 'launchertech':
                    window.location = 'https://www.launchertech.com', '_blank';
                    break;
            }
            
    
        },false);
        

        myRecognition.addEventListener('error', function(){
            resultSpeaker.innerHTML = "Não entendi muito bem!";
        }, false);
    }else{
        resultSpeaker.innerHTML = "Seu navegador não suporta a tecnologia!";
    }
})();