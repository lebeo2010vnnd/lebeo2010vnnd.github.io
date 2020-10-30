function doF(doC) 
{
  var cdo = doC;
  var fdo = cdo * 9 / 5 + 32;
  var message = cdo+'\xB0C -> ' + fdo + ' \xB0F.';
    console.log(message);
}

function doC(doF)
{
    var fdo = doF;
    var cdo = (fdo - 32) * 5 / 9;
    var message = fdo+'\xB0F -> ' + cdo + '\xB0C.';
    console.log(message);
}


function viethoadaucau(str) 
{
    
    str = str.split(" ");
    

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1).toLowerCase();
    }

    return str.join(" ");
}
function theky(nam){
    let theky = Math.ceil(nam/100);
    console.log(theky);
}
function catchuoi(x){
    let y;
    if (typeof x == "string") {
        y = x;
    }
    else{
        y = x.toString();
    }
    return y.substring(0,10) + "...";
}


