window.onload = () => {

    let result = countWords();

    console.log("Top 3 most common words:");

    console.log(result);
};


function countWords() {

    // Given text
    let text = "JavaScript is easy and JavaScript is powerful.";

    // Remove comma and period
    text = text.replace(/[.,]/g, "");

    // Convert all words to lowercase
    text = text.toLowerCase();

    // Convert text into words
    const wordArray = text.split(" ");

    // Object to store word count
    const wordCount = {};

    // Count each word
    wordArray.forEach((item) => {

        if (wordCount[item] == null) {
            wordCount[item] = 1;
        }
        else {
            wordCount[item]++;
        }

    });

    // Convert object into array
    let myArray = Object.entries(wordCount);

    // Sort based on word frequency
    let bArray = myArray.sort(function (a, b) {
        return b[1] - a[1];
    });

    // Get first 3 most common words
    bArray = bArray.slice(0, 3);

    return bArray;
}


// Don't change this line
if (typeof module !== "undefined") {
    module.exports = countWords;
}