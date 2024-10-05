function swapTheme()
{
    var appDiv=document.getElementById('app');
    var button=document.getElementById('swap');

    if(appDiv.classList.contains('day'))
    {
        appDiv.classList.remove('day');
        appDiv.classList.add('night');
        button.classList.add('button_night');
        button.classList.remove('button_day');
    }

    else
    {
        appDiv.classList.add('day');
        appDiv.classList.remove('night');
        button.classList.add('button_day');
        button.classList.remove('button_night');
    }
}
