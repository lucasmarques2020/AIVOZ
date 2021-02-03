function salvar(){
    let codigo = editor.getValue('value');
    let blob = new Blob([codigo],
    {
            type: "html/plain;charset=utf-8"
    });
    saveAs(blob, "index.html");
}
