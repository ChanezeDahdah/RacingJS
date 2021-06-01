const str = document.getElementsByTagName("div")[2];
for (let i=0; i < str.length; i++);

document.addEventListener('keydown', (display)=>
{
    let event = display.key;
    let write = str.innerHTML.length;

    if (write < 42)
    {
        str.innerHTML += event;
    }
    else
    {
        str.innerHTML += event;
        str.innerHTML = str.innerHTML.slice(1,43);
    }
});
