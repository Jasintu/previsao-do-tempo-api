"use strict"

/*--------------------coletaçao de info api-------------------*/
let key = "5bfba1b82e310a266ce5d6a91be86f71"
/*------------------------------------------------------------*/
$("#buttonSubmit").click(function (e) { 
  e.preventDefault()
  $.ajax({
    type: "get",
    url: `https://api.openweathermap.org/data/2.5/weather?q=${$("#input-info").val()}&units=metric&appid=${key}&lang=pt_br`,
    data: "data",
    success: function (response) {
      console.log(response)
      console.log(response.name)
      console.log(response.main.temp)
      $("#showTemp").text(Math.round(response.main.temp) + "°C")
    }
  })

})