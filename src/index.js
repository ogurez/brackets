module.exports = function check(str, bracketsConfig) {
	let brackets = bracketsConfig.join("").replace(/,/g,'');
	let index=0;
	let stack=[];

	for(let i=0;i<str.length;i++){

		index=brackets.indexOf(str[i]);

        if(index%2==0){
			stack.push(index);
		}
		else {
			
			if(stack.length==0){
			return false;
		}
			if(stack[stack.length-1]+1==index){
				stack.pop();
			}
		}
	}
	if(stack.length!==0){
		return false;
	}
	return stack.length==0;
}
