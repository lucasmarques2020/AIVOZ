$(document).ready(function(){
    $('input[@type="text"], textarea').keyup(update).mousedown(update).mousemove(update).mouseup(update);
});
(function addLocal(e, texto){
    $('.CodeMirror').replaceSelection(texto);
    e.preventDefault();
});
function update(e) {
var range = $(this).getSelection();
}
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
            GetVl = editor.getValue("value");
            switch(resultSpeak.toLowerCase()){
                case 'modo escuro':
                    editor.setOption("theme", "ambiance");
                    break;
                case 'modo claro':
                    editor.setOption("theme", "eclipse");
                    break;
                case 'estrutura básica html':
                    editor.setOption("value", GetVl+"<!doctype html>\n\n <html>\n\n <head>\n\n <title>Default</title>\n\n </head>\n\n <body>\n\n <div>\n\n <h1>Olá Mundo!</h1>\n\n </body>\n\n </html>");
                    break;
                case 'adicionar div':
                    $(this).addLocal("<div></div>");
                    break;
                case 'botão simples':
                    editor.setOption("value", GetVl+"<input type = 'buttom' value = 'Botão'>");
                    break;
                case 'rock lee versus gaara':
                    window.location.href = 'https://www.youtube.com/watch?v=VgDgWzBL7s4';
                    break;
                case 'google':
                    window.location.href = 'https://www.google.com';
                    break;
                case 'launchertech':
                    window.location.href = 'https://www.launchertech.com';
                    break;
            }
            
    
        },false);
        
        
        myRecognition.addEventListener('error', function(){
            resultSpeaker.innerHTML = "Se você disse alguma coisa, não ouvi muito bem!";
        }, false);
    }else{
        resultSpeaker.innerHTML = "Seu navegador não suporta a tecnologia!";
    }
})();