function saveAs(dataToDownload,filename) {
 var element = document.createElement('a');
 element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(dataToDownload));
 element.setAttribute('download', filename);
 element.style.display = 'none';
 document.body.appendChild(element);
 element.click();
 document.body.removeChild(element);
}
function download() {
 var text = document.getElementById('downloadMe').innerText;
 var file = '/The Cup Of Life.mp3';
 saveAs(mp3,file,var)
}
