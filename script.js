function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}
let arr = [];
let minEl = 100;
let maxEl = -100;
for (let i = 0; i <= randomInteger(10, 50); i++) {
	arr[i] = randomInteger(-100, 100);
	if (arr[i] < minEl) {
	    minEl=arr[i];
	    }
    else if (arr[i] > maxEl) {
        maxEl=arr[i];
    }
}
$(document).ready(function(){
		let valueM= '<td width="70px"><strong>Значения</strong></td>';
		let idM = '<td width="70px"><strong>ID</strong></td>';
        for (let i = 0; i< arr.length; i++  ) {
            if (arr[i]!==undefined) {
            idM +='<td>'+i+'</td>';
            valueM +='<td>'+arr[i]+'</td>';
            }
        }
        idMass.innerHTML = idM;
        valueMass.innerHTML = valueM;
        max.innerHTML = maxEl;
        min.innerHTML = minEl;
        
});


