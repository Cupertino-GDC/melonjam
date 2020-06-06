function scrollToElement(elementName, position) {
    var element = document.getElementById(elementName);
	element.scrollIntoView({behavior: "smooth", block: position, inline: "nearest"});
}

function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function expandFAQ(i) {
    var faq = document.getElementsByClassName('faq')[i];
    var faqText = document.getElementsByClassName('faq-answer')[i];

    if(faq.style.height === "400px") { // compress

        faq.style.height = "auto";
        faq.style.backgroundColor = "initial";
        faqText.style.display = "none";

    } else { // expand

        faq.style.height = "400px";
        faq.style.backgroundColor = "rgba(255, 195, 103, 1.0)";
        faqText.style.display = "block";

    }

}

function enterHoverFAQ(element) {

    if(element.style.height != "400px") {
        element.style.backgroundColor = "rgba(255, 195, 103, 0.5)";
    }

}

function exitHoverFAQ(element) {

    if(element.style.height != "400px") {
        element.style.backgroundColor = "rgba(255, 195, 103, 0)";
    }

}
