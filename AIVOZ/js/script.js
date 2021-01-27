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
            console.log(resultSpeak);
            resultSpeaker.innerHTML = resultSpeak;
            switch(resultSpeak.toLowerCase()){
                case 'modo escuro':
                    editor.setOption("theme", "ambiance");
                    break;
                case 'modo claro':
                    editor.setOption("theme", "eclipse");
                    break;
                case 'estrutura básica html':
                    editor.setOption("value", "<!doctype html>\n\n <html>\n\n <head>\n\n <title>Default</title>\n\n </head>\n\n <body>\n\n <div>\n\n <h1>Olá Mundo!</h1>\n\n </body>\n\n </html>");
                    break;
                case 'adicionar div':
                    editor.setOption("value", "<div></div>");
                    break;
                case 'botão simples':
                    editor.setOption("value", "<input type = 'buttom' value = 'Botão'>");
                    break;
                case 'rock lee versus gaara':
                    window.location.href = 'https://www.youtube.com/watch?v=VgDgWzBL7s4';
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