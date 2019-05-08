const createMap = (vector) => {
    return (condition) => vector.map(condition);
}

const filterVector = (regex) => {
    return (el) => el.innerHTML.match(regex);
} 

// Non-pure function, side-effect
const applyStyle = el => { el.style.display = 'none' };

const data = Array.prototype.slice.call(document.getElementById('threadbits_forum_2').querySelectorAll('tr'));
const filteredVector = createMap(data.filter(filterVector(/vox|pp|psoe|podemos/)));

filteredVector(applyStyl);