//Cree esta funcion aparte ya que cuando me cargaba el servidor no reconocia el slider
$(function(){
  $('.galeria').bxSlider({  //se usa el metodo bxslider del pluggin instalado
    mode: 'fade',      //modo de transicion 
    captions: true,    //si se muestra el caption 
    slideWidth: 1200,   //tamaño de la foto 
    responsive: true,
    pager: true   //es para q aparescan los 3 puntos debajo de la imagen 
  });
});


$(document).ready(function(){

  //slider    //objeto json
  if(window.location.href.indexOf('index') > -1){   //puedo comprabar si existe index , si es q existe index q sea mayor q -1 entonces q cargue
    $('.galeria').bxSlider({  //se usa el metodo bxslider del pluggin instalado
        mode: 'fade',      //modo de transicion 
        captions: true,    //si se muestra el caption 
        slideWidth: 1200,   //tamaño de la foto 
        responsive: true,
        pager: true   //es para q aparescan los 3 puntos debajo de la imagen 
      });
    }


  //posts  elementos json q se añadiran 
  if(window.location.href.indexOf('index') > -1){
      var posts = [  //creando un array de json
          {
              title: 'Prueba de titulo 1',  
              date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),  //usamos la libreria moment.js
              content: 'Este es un pagina con articulos y esto es un texto de prueba para usarlo de ejemplo. Ejemplo  ejemplo ejemplo ejemplo ejemplo.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.'
          },
          { 
              title: 'Prueba de titulo 2',
              date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
              content: 'Este es un pagina con articulos y esto es un texto de prueba para usarlo de ejemplo. Ejemplo  ejemplo ejemplo ejemplo ejemplo.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.'
          },
          {
              title: 'Prueba de titulo 3',
              date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
              content: 'Este es un pagina con articulos y esto es un texto de prueba para usarlo de ejemplo. Ejemplo  ejemplo ejemplo ejemplo ejemplo.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.'
          },
          {
              title: 'Prueba de titulo 4',
              date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
              content: 'Este es un pagina con articulos y esto es un texto de prueba para usarlo de ejemplo. Ejemplo  ejemplo ejemplo ejemplo ejemplo.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.'
          },
          {
              title: 'Prueba de titulo 5',
              date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
              content: 'Este es un pagina con articulos y esto es un texto de prueba para usarlo de ejemplo. Ejemplo  ejemplo ejemplo ejemplo ejemplo.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.'
          },   
        ];
/*con posts se añadiran los archivos json */
        posts.forEach((item,index) => {   //foreach de los objetos posts
          var post =`
              <article class="post">
                  <h2>${item.title}</h2>
                  <span class="date">${item.date}</span>   <!--o parrafo -->
                  <p>
                      ${item.content}
                  </p>
                  <a href="#" class="button-more">Leer mas</a>
              </article>
          `;

          $("#posts").append(post);  /*se utiliza el metodo append para añadir un post */
        });
        }

  /*
  <article class="post">
                    <h2>Prueba del titulo</h2>
                    <span class="date">Fecha de Publicacion</span>   <!--o parrafo -->
                    <p>
                        Este es un pagina con articulos y esto es un texto de prueba para usarlo
                        de ejemplo. Ejemplo  ejemplo ejemplo ejemplo ejemplo.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <a href="#" class="button-more">Leer mas</a>
                </article>
|*/

    //selector de tema :capturar el evento para cambar de tema
    var theme = $("#theme");  //la hoja de estilo con id=theme en html index

    $("#to-green").click(function(){   //captura el evento green y al dar click
      theme.attr("href", "css/green.css");
    });

    $("#to-red").click(function(){
      theme.attr("href", "css/red.css");
    });

    $("#to-blue").click(function(){
      theme.attr("href", "css/blue.css");
    });


    // scroll arriba de la web 
    $('.subir').click(function(e){  //cuando se produsca el evento click en la clase subir
      e.preventDefault();   // q se ejecute la funcionalidad sin q nos redirija a otra parte 
   
      $('html, body').animate({  //evento animate sobre html  en body 
        scrollTop: 0   //subir hacia el pixel 0 hacia el principio 
      },500);   //se vera la animacion en 500 milisegundos
      
      return false;
      });

      // Login falso

      $("#login form").submit(function(){
        var form_name = $("#form_name").val(); //se crea la variable

        localStorage.setItem("form_name", form_name); //se guarda en la localstorage y se llamara form_name el indice del localstorage q vamos a guardar y le vamos a pasar la variable gform_name para guardarla

      });
  
      var form_name = localStorage.getItem("form_name");  //cuando se recarge la pantalla se crea una variable form_name q recogera el valor del local storage  
      
      if(form_name != null && form_name !="undefined"){  //si fornm name es diferente a null y es difenrte a undefined
        var about_parrafo = $("#about p");
        
        about_parrafo.html("<br><strong>Bienvenido, " +form_name+"</strong>"); //se concatena 
        //$("#login").hide();  //se oculta la caja login
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesion</a>");

        $("#login").hide();

        $("#logout").click(function(){
          localStorage.clear();    //se borra las variables guardadas en la sesion o en la localstorage 
          location.reload();   //para q se limpie al darle click y lo redirija al formulario 
        });
      }
      //acordeon
      if(window.location.href.indexOf('about') > -1){
        $("#acordeon").accordion();
      }

      //Reloj
      if(window.location.href.indexOf('reloj') > -1){
        
        setInterval(function(){     //nos permite ejecutar un bucle cada cierto tiempo q se le indique un cierto tipo de instrucciones
                var reloj = moment().format("hh:mm:ss");
                $('#reloj').html(reloj);
        }, 1000);
        
      }

      //Validacion
      if(window.location.href.indexOf('contact') > -1){

        $("form input[name='date']").datepicker({ //Todos los campos de formulario cuyo name sea igual a date va tener un datepicker
          dateFormat: 'dd-mm-yy'
        });
          
          $.validate({   //cuando se haga submit si hay algun error en el formulario nos va llevar arriba y nos mostrara todos los errores
              lang : 'es',
              errorMessagePosition: 'top',
              scrollTopOnError: true
            });
          } 

});

$('.galeria').bxSlider({  //se usa el metodo bxslider del pluggin instalado
  mode: 'fade',      //modo de transicion 
  captions: true,    //si se muestra el caption 
  slideWidth: 1200,   //tamaño de la foto 
  responsive: true,
  pager: true   //es para q aparescan los 3 puntos debajo de la imagen 
});

