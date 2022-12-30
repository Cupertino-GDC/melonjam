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

function clearModals() {
    var modals = document.getElementsByClassName('event-modal');

    for(var i = 0; i < modals.length; i++) {
        modals[i].style.display = "none";
    }
}

function openModal(modalName) {
    clearModals();
    var modal = document.getElementById(modalName);
    modal.style.display = "block";
}

function closeModal(modalName) {
    var modal = document.getElementById(modalName);
    modal.style.display = "none";
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

// len: length of time units in terms of milliseconds
// convert: function to convert 'count' # of this unit to a string
const units = {
    ms: {len: 1, convert: function(count) {
        return count + " ms";
    }},
    sec: {len: 1000, convert: function(count) {
        return count + " Second" + (count == 1 ? "" : "s");
    }},
    min: {len: 60*1000, convert: function(count) {
        return count + " Minute" + (count == 1 ? "" : "s");
    }},
    hr: {len: 60*60*1000, convert: function(count) {
        return count + " Hour" + (count == 1 ? "" : "s");
    }},
    day: {len: 24*60*60*1000, convert: function(count) {
        return count + " Day" + (count == 1 ? "" : "s");
    }},
    week: {len: 7*24*60*60*1000, convert: function(count) {
        return count + " Week" + (count == 1 ? "" : "s");
    }}
}
function convertTimeToText(time, options = {roundUp: false, display: ["sec","min","hr","day"]}) {
    var results = []; 
    
    // ascending order in terms of ms length
    options.display.sort((a, b) => { return units[a].len - units[b].len });

    for (var i = options.display.length - 1; i >= 0; i--) {
        var unit = units[options.display[i]];
        var remainder = time % unit.len;
        var count = Math.max((time - remainder) / unit.len, 0);
        if (options.roundUp && i == 0 && remainder > 0) {
            count++;
        }
        time = remainder;
        results.push(unit.convert(count));
    }
    return results.join(", ");
}

setInterval(function() {
    for (var element of document.getElementsByClassName("timer")) {
        element.innerHTML = convertTimeToText(element.getAttribute("time") - new Date().getTime());
    }
}, 1000);