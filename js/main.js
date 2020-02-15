var url = window.location.pathname; // get url till file name
var shareUrl = window.location.href;    // get full url
const params = new URLSearchParams(window.location.search); // object to get query or strings in url
const myparams =params.get('n');
document.getElementById("obj1").innerHTML = myparams + " wishes";
document.getElementById("share").href = "whatsapp://send?text= " + myparams + " wish u *HAPPY INDEPENDANCE DAY*" + shareUrl; 

function get_name() {   // on-click function
        var x = document.getElementById("name").value;
        document.getElementById("obj1").innerHTML = myparams;
        location.replace(url + "?n=" + x);
}