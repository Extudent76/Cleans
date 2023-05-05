var li_elements = document.querySelectorAll(".Services-nav ul li");
var item_elements = document.querySelectorAll(".item")
var link_elements = document.querySelectorAll(".Services-nav__item-link");

for (var i = 0; i < li_elements.length; i++) {
    li_elements[i].addEventListener("click", function(){
        li_elements.forEach(function(li){
            li.classList.remove("active");
        })
        link_elements.forEach(function(bb){
            bb.classList.remove("active");
        })
        this.classList.add("active");
        var li_value = this.getAttribute("data-li");
        item_elements.forEach(function(item){
            item.style.display = "none";
        })

        if(li_value == "Кроссовки")
        {
            document.querySelector("." + li_value).style.display = "block";
        }
        if(li_value == "Классическая")
        {
            document.querySelector("." + li_value).style.display = "block";
        }
        if(li_value == "Премиальная")
        {
            document.querySelector("." + li_value).style.display = "block";
        }
        if(li_value == "Сезонная")
        {
            document.querySelector("." + li_value).style.display = "block";
        }
        if(li_value == "Дополнительно")
        {
            document.querySelector("." + li_value).style.display = "block";
        }
        else
        {
            console.log("");
        }
  })
}