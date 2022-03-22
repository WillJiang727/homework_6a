/*** Object Constructors ***/
function appointment(type, time, location) {
  this.type = type;
  this.time = time;
  this.location = location;
}




/*********** Tartan Testing Calendar ************/
// function openModal(item) {
//     modal.style.display = "block";
// }
setTimeout(() => {
    // Get the modal
    var modala = document.getElementById("Modala");
    var modalb = document.getElementById("Modalb");
    var modalc = document.getElementById("Modalc");
    var modald = document.getElementById("Modald");

    // Get the button that opens the modal
    var btna = document.getElementById("a");
    var btnb = document.getElementById("b");
    var btnc = document.getElementById("c");
    var btnd = document.getElementById("d");

    // Get the <span> element that closes the modal
    var span1 = document.getElementsByClassName("close")[0];
    var span2 = document.getElementsByClassName("close")[1];
    var span3 = document.getElementsByClassName("close")[2];
    var span4 = document.getElementsByClassName("close")[3];


    // When the user clicks the button, open the modal

    btna.onclick = function() {
      modala.style.display = "block";
    }

    btnb.onclick = function() {
      modalb.style.display = "block";
    }

    btnc.onclick = function() {
      modalc.style.display = "block";
    }

    btnd.onclick = function() {
      modald.style.display = "block";
    }


    window.onclick = function(event) {
      if (event.target == modala) {
        modala.style.display = "none";
      }
      if (event.target == modalb) {
        modalb.style.display = "none";
      }
      if (event.target == modalc) {
        modalc.style.display = "none";
      }
      if (event.target == modald) {
        modald.style.display = "none";
      }
    }



    confirm1.onclick = function() {
        // console.log("confirm 1")
        if (localStorage.getItem('location') == null) {
            localStorage.setItem('location', '[]')
        }

        if (localStorage.getItem('time') == null) {
            localStorage.setItem('time', '[]')
        }

        if (localStorage.getItem('type') == null) {
            localStorage.setItem('type', '[]')
        }

        var old_location_data = JSON.parse(localStorage.getItem('location'))
        var old_time_data = JSON.parse(localStorage.getItem('time'))
        var old_type_data = JSON.parse(localStorage.getItem('type'))

        old_location_data.push("TCS Hall (Tata Consultancy Services")
        old_time_data.push("3/7/2022 8:05 AM")
        old_type_data.push("Tartan testing")

        localStorage.setItem("location", old_location_data)
        localStorage.setItem("time", old_time_data)
        localStorage.setItem("type", old_type_data)
    }


    confirm2.onclick = function() {
        // console.log("confirm 2")
        var old_data = JSON.parse(localStorage.getItem('savedApp'))
        old_data.push(["TCS Hall (Tata Consultancy Services", "3/7/2022 8:05 AM", "Tartan testing"])
        localStorage.setItem("savedApp", old_data)
    }

    confirm3.onclick = function() {
        // console.log("confirm 3")
        var old_data = JSON.parse(localStorage.getItem('savedApp'))
        old_data.push(["TCS Hall (Tata Consultancy Services", "3/12/2022 8:05 AM", "Tartan testing"])
        localStorage.setItem("savedApp", old_data)
    }

    confirm4.onclick = function() {
        // console.log("confirm 4")
        var old_data = JSON.parse(localStorage.getItem('savedApp'))
        old_data.push(["TCS Hall (Tata Consultancy Services", "3/6/2022 8:15 AM", "Tartan testing"])
        localStorage.setItem("savedApp", old_data)
    }


    // When the user clicks on <span> (x), close the modal
    span1.onclick = function() {
        modala.style.display = "none";
        modalb.style.display = "none";
        modalc.style.display = "none";
        modald.style.display = "none";
    }

    span2.onclick = function() {
        modala.style.display = "none";
        modalb.style.display = "none";
        modalc.style.display = "none";
        modald.style.display = "none";
    }

    span3.onclick = function() {
        modala.style.display = "none";
        modalb.style.display = "none";
        modalc.style.display = "none";
        modald.style.display = "none";
    }

    span4.onclick = function() {
        modala.style.display = "none";
        modalb.style.display = "none";
        modalc.style.display = "none";
        modald.style.display = "none";
    }


    // var current_loc = localStorage.getItem("location")[0]  //string
    // var current_time = null
    // var current_type = null

    // var info = document.getElementById("info")
    // info.innerHTML = "Tartan Testing: " + current_loc + current_time


}, 1000);


// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }


/*********** Tartan Testing Calendar - confirming appointment ************/


//localStorage.removeItem("savedApp");






var slot1 = JSON.parse(localStorage.getItem('savedApp')






