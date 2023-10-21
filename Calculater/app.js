let fetchElementFromDOM = function (element) {
    if(element.charAt(0) === '#'){
        return document.querySelector(element);
    }
    return document.querySelectorAll(element);
}

let viewer = fetchElementFromDOM("#viewer"),
equals = fetchElementFromDOM("#equals"),
nums = fetchElementFromDOM(".num"),
ops = fetchElementFromDOM(".ops");

let currentNum = "",
oldNum = "",
resultNum = "",
operator = "";

const setNum = function (){
    if(resultNum){
        currentNum = this.getAttribute("data-num");
        resultNum = "";
    }else{
        currentNum += this.getAttribute("data-num");
    }

    viewer.innerHTML = currentNum;
}

const perform = function (){
    oldNum = currentNum;
    currentNum = "";
    operator = this.getAttribute("data-ops");
    equals.setAttribute("data-result", "")
}

const display = function () {
    oldNum = parseFloat(oldNum);
    currentNum = parseFloat(currentNum);
    switch (operator) {
        case "plus" :
            resultNum = oldNum + currentNum;
            break;
        case "minus" :
            resultNum = oldNum - currentNum;
            break;
        case "times" :
            resultNum = oldNum * currentNum;
            break;
        case "divided by" :
            resultNum = oldNum / currentNum;
            break;
        
    }
    if(!isFinite(resultNum)){
        if(!isNaN(resultNum)){
            resultNum = "Invalid Input"
        }else {
            resultNum = "Infinite Number";
            fetchElementFromDOM("#calculator").classList.add("broken");

           fetchElementFromDOM("#reset").classList.add("show");
        }
    }

    viewer.innerHTML = resultNum;
    equals.setAttribute("data-result", resultNum);
    oldNum = 0;
    currentNum = resultNum;
}


const clearAll = function () {
    oldNum = "";
    currentNum = "";
    viewer.innerHTML = "0";
}

fetchElementFromDOM("#clear").onclick = clearAll;

for(let i = 0; i < nums.length; i++) {
    nums[i].onclick = setNum;
}
for(let i = 0; i < ops.length; i++) {
    ops[i].onclick = perform;
}

const resetCal = function () {
    window.location = window.location;
}

equals.onclick = display;
fetchElementFromDOM("#reset").onclick = resetCal;