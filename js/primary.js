function scrollToElement(elementName, position) {
    var element = document.getElementById(elementName);
	element.scrollIntoView({behavior: "smooth", block: position, inline: "nearest"});
}

function expandFAQ(element) {

    if(element.style.height === "500px") {
        element.style.height = "auto";
        element.style.backgroundColor = "initial";
    } else {
        element.style.height = "500px";
        element.style.backgroundColor = "rgba(255, 195, 103, 1.0)";
    }

}

function enterHoverFAQ(element) {

    if(element.style.height != "500px") {
        element.style.backgroundColor = "rgba(255, 195, 103, 0.5)";
    }

}

function exitHoverFAQ(element) {

    if(element.style.height != "500px") {
        element.style.backgroundColor = "rgba(255, 195, 103, 0)";
    }

}
