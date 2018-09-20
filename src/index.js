module.exports = function check(str, bracketsConfig) {
  let counter=0;
let chckbr=true;

	for(let i=0; i<bracketsConfig.length; i++){
		for(let j=0; j<str.length; j++){
			if(str[j]==bracketsConfig[i][0]){
				counter++;
			}
			else if(str[j]==bracketsConfig[i][1]){
			counter--;
}
		 if(counter<0){
			 chckbr=false;
			 break;
		 }
		}
	}
	if(counter>0 || chckbr<0){
		chckbr=false;}
		else {
			chckbr=true;
		}
		return chckbr;
}
