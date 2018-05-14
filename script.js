function checkNumber(){
	if(document.getElementById("inputBox").value){
		if(isPrime(document.getElementById("inputBox").value)){
			document.getElementById("answer").innerHTML= "Prime";
		}else{
			document.getElementById("answer").innerHTML= "Not prime";
		}
	}else{
		document.getElementById("answer").innerHTML= "&nbsp";		
	}
}

const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num !== 1;
}

// Listen for input event on numInput.
document.getElementById("inputBox").oninput = function(e) {
    if(!((e.keyCode > 95 && e.keyCode < 106)
      || (e.keyCode > 47 && e.keyCode < 58) 
      || e.keyCode == 8)) {
        return false;
    }
}