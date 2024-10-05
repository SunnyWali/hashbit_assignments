function createNewDiv(width,height,text)
{

    var newDiv=document.createElement('div');
    newDiv.style.width=width+'px';
    newDiv.style.height=height+'px';
    newDiv.textContent=text;

    document.getElementById('container').appendChild(newDiv);

}
Window.createDiv=createNewDiv(120,40,'Hello World');

