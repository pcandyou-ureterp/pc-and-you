
function onNavElementClick (location) {
    const yOffset = -40; 
    const element = document.querySelector(`#section-${location}`);
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({top: y, behavior: 'smooth'});
}
