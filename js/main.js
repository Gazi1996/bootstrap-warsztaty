$(document).ready(function()
{
    alert();
    karuzela();
});
                  
function karuzela()
{
    $('#carousel-example-generic').carousel(
    {
        interval: 1000,
    });
}

/*//$windows.resize
function changeColor()
{
    $('div').css('background-color', 'blue');
}*/