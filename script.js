function isNumberKey(evt)
      {
         var charCode = (evt.which) ? evt.which : event.keyCode
         if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;

         return true;
      }

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
    if(num == 0) return false; 
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num !== 1;
}
