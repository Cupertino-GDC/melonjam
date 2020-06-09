function scrollToElement(elementName, position) {
    var element = document.getElementById(elementName);
	element.scrollIntoView({behavior: "smooth", block: position, inline: "nearest"});
}

function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function readMore() {
    var moreText = document.getElementById("about-more-text");
    var btnText = document.getElementById("read-more-button");

    if (moreText.style.display === "inline") {
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

function expandFAQ(i) {
    var faq = document.getElementsByClassName('faq')[i];
    var faqText = document.getElementsByClassName('faq-answer')[i];

    if(faqText.style.display === "block") { // compress

        faqText.style.display = "none";
        faq.style.height = "auto";
        faq.style.backgroundColor = "initial";

    } else { // expand

        faqText.style.display = "block";
        faq.style.height = "auto";
        faq.style.backgroundColor = "rgba(255, 195, 103, 1.0)";

    }

}

function enterHoverFAQ(i) {

    if(document.getElementsByClassName('faq-answer')[i].style.display != "block") {
        document.getElementsByClassName('faq')[i].style.backgroundColor = "rgba(255, 195, 103, 0.5)";
    }

}

function exitHoverFAQ(i) {

    if(document.getElementsByClassName('faq-answer')[i].style.display != "block") {
        document.getElementsByClassName('faq')[i].style.backgroundColor = "rgba(255, 195, 103, 0)";
    }

}
