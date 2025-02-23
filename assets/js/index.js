const viewMore = document.getElementById("view-more");
const viewMoreBtn = document.getElementById("view-more-btn");
const responsiveDesign = document.getElementById("responsive-design");
const essentialJavaScriptConcepts = document.getElementById("essential-javascript-concepts");
const essentialCSSConcepts = document.getElementById("essential-css-concepts");

viewMoreBtn.addEventListener("click", function() {
    responsiveDesign.classList.remove("hidden");
    essentialJavaScriptConcepts.classList.remove("hidden");
    essentialCSSConcepts.classList.remove("hidden");

    viewMore.classList.add("hidden");
});