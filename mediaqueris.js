(function () {


    var opciones = document.getElementById("opciones");
    var menu = document.getElementById("menu-hamburguesa");

    menu.addEventListener("click", function () {

        if (opciones.className == "opciones"){


           opciones.classList.add("active");


        }else if (opciones.className == "opciones active"){

            opciones.classList.remove("active");

        }




    });







}) ();