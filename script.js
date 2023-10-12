//your code here

const bands = [
    "The Plot in You",
    "The Devil Wears Prada",
    "Pierce the Veil",
    "Norma Jean",
    "The Bled",
    "Say Anything",
    "The Midway State",
    "We Came as Romans",
    "Counterparts",
    "Oh, Sleeper",
    "A Skylit Drive",
    "Anywhere But Here",
    "An Old Dog"
];

// Function to sort the array while excluding articles
function sortBandNames(bandNames) {
    return bandNames.sort((a, b) => {
        const articles = ['a', 'an', 'the'];
        
        const stripArticle = (name) => {
            for (const article of articles) {
                const regex = new RegExp(`^${article}\\s`, 'i');
                name = name.replace(regex, '');
            }
            return name;
        };
        
        const nameA = stripArticle(a).toLowerCase();
        const nameB = stripArticle(b).toLowerCase();

        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    });
}

// Your array of band names

// Sort the array without articles
bandNames = sortBandNames(bands);

// Get the ul element with the id 'band'
const ulElement = document.getElementById('brands');

// Create and append list items
for (const name of bandNames) {
    const liElement = document.createElement('li');
    liElement.textContent = name;
    ulElement.appendChild(liElement);
}
