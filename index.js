for(let i = 0; i < document.querySelectorAll(".musicOptions").length; i++)
{
    document.querySelectorAll(".musicOptions")[i].addEventListener("click", function() 
    {
        document.querySelector("audio").setAttribute("src", this.id + ".mp3");
        document.querySelector("#nowMusic").innerHTML = this.innerHTML;

        document.querySelector("body").setAttribute("class", "");
        document.querySelector("body").classList.add(this.id);

        document.querySelector("img").setAttribute("src", + this.id + ".gif");
    });
}