var value = 52;

if (value >= 2) {
    value += 8;
}
else {
    value -= 47;
}

value += "52";

var array = [];
var i = 0;

for (i=0; i<value.length; i++) {
    array.push(value.charAt(i));
}

// Remove first and last values
array.shift();
array.pop();

var backwards = "";

// Count backwards, starting at the last object in the array until you reach the first
for (i=array.length-1; i>=0; i--) {
    backwards += array[i];
}

value = parseInt(value);
backwards = parseInt(backwards);

value += backwards;

if(value > 7352){
    value = 4;
} else if(value == 6102){
    value = 54;
} else {
    value = 28;
}

i = 5;

while(i>0){
    value++;
    i--;
}

//step 11

function myFunc(val){
    val = val.toString();
    if(val.length > 1){
        // Remove the first character (val[0])
        val = val.substring(1);
    }
    return val;
}

value = myFunc(value);

console.log(value);

var lable = document.getElementById("answer");