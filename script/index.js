"use strict"

/*--------------------coletaçao de info api-------------------*/
let key = "5bfba1b82e310a266ce5d6a91be86f71"
/*------------------------------------------------------------*/
$("#buttonSubmit").click(function (e) { 
  e.preventDefault()
  //requisiçao ajax ----------------------------------------------
  $.ajax({
    type: "get",
    url: `https://api.openweathermap.org/data/2.5/weather?q=${$("#input-info").val()}&units=metric&appid=${key}&lang=pt_br`,
    data: "data",
    //---------------------------------------------------------------------
    success: function (response) {
      console.log(response)
      //exibiçao de temperatura
      $("#showTemp").text(Math.round(response.main.temp) + "°C")
      //exibiçao nome do pais
      $("#country").text(response.name + ",")
      //exibiçao sigla
      $("#sigle").text(response.sys.country + " 📍")
      //exibiçao 
      $("#weather").text(response.weather[0].main)

      //-----------------------------------------------------------------------------
    }
  })

})


