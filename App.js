$(document).ready(function () {

    console.log("Hello World!");
    var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200) {

     console.log(this.responseText);

    }

  };

  xhttp.open("GET", "D:\Newton school\Myntra-Clone---React-Project---pw6th899sfbm\Product.json", true);

  xhttp.send();
    
    });
