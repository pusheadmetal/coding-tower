const inputTitle = "How to write a Bubble Sort";
const inputText = "The Bubble Sort is a classic sorting algorithm taught in many Data Structures classes...";
const buttonText = "Read More";

window.addEventListener("load", function(event){
    var getParentClass = document.getElementsByClassName("tutorials-row-boxes");
    var parentCount = getParentClass.length;
    var getChildClass = document.getElementsByClassName("tutorials-row-boxes")[parentCount-1];
    var childCount = (getChildClass.childElementCount);

    if (childCount < 3){
        //We can add the new element in the same row
        var newDiv = document.createElement("div");
        var newHeader = document.createElement("h2");
        var newParagraph = document.createElement("p");
        var newButton = document.createElement("button");
        var headerTextNode = document.createTextNode(inputTitle);
        var bodyTextNode = document.createTextNode(inputText);
        var buttonTextNode = document.createTextNode(buttonText);

        newDiv.appendChild(newHeader);
        newDiv.appendChild(newParagraph);
        newDiv.appendChild(newButton);

        newHeader.appendChild(headerTextNode);
        newParagraph.appendChild(bodyTextNode);
        newButton.appendChild(buttonTextNode);

        newDiv.className = "boxes";

        getChildClass.appendChild(newDiv);

    }else{
        //Container is full, so we need to make a new one
        var newParentDiv = document.createElement("div");
        var newDiv = document.createElement("div");
        var newHeader = document.createElement("h2");
        var newParagraph = document.createElement("p");
        var newButton = document.createElement("button");
        var headerTextNode = document.createTextNode(inputTitle);
        var bodyTextNode = document.createTextNode(inputText);
        var buttonTextNode = document.createTextNode(buttonText);

        newParentDiv.appendChild(newDiv);

        newDiv.appendChild(newHeader);
        newDiv.appendChild(newParagraph);
        newDiv.appendChild(newButton);

        newHeader.appendChild(headerTextNode);
        newParagraph.appendChild(bodyTextNode);
        newButton.appendChild(buttonTextNode);

        newParentDiv.className = "tutorials-row-boxes";

        newDiv.className = "boxes";

        getParentClass[0].appendChild(newParentDiv);
    }

    
});
