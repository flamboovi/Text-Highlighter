function getSelectionText()
{
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    }
    return text;
}
document.getElementById('ip').addEventListener('mouseup',function(e)
{
        var txt=this.innerText;
        console.log(txt);
        var selectedText = getSelectionText();
        console.log(selectedText);
        var start = txt.indexOf(selectedText);
        var end = start + selectedText.length;
        if (start >= 0 && end >= 0){
    	    console.log("start: " + start);
    	    console.log("end: " + end);
        }
});
function highlight() {
    var text = getSelectionText();
    var inputText = document.getElementById("ip");
    var innerHTML = inputText.innerHTML;
    var index = innerHTML.indexOf(text);
    if (index >= 0) { 
     innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
     inputText.innerHTML = innerHTML;
    }
  }
  document.getElementById('ip').addEventListener('mouseup',function(e)
{
        var txt=this.innerText;
        console.log(txt);
        var selectedText = getSelectionText();
        highlight(selectedText);
  });