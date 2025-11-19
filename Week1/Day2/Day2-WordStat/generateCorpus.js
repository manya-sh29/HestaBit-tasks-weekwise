const fs = require('fs');
const { LoremIpsum } = require('lorem-ipsum');

// Create a lorem ipsum generator instance
const lorem = new LoremIpsum({
  sentencesPerParagraph: { max: 8, min: 4 },
  wordsPerSentence: { max: 8, min: 4 },
});

const totalWords = 200000;
const uniqueWords = new Set();

// Keep generating until we have 200,000 unique words
while (uniqueWords.size < totalWords) {
  // Generate 1000 words per batch for efficiency
  const text = lorem.generateWords(1000);
  const batchWords = text.split(/\s+/);

  for (let word of batchWords) {
    // Add a numeric suffix to ensure uniqueness if needed
    if (!uniqueWords.has(word)) {
      uniqueWords.add(word);
    } else {
      uniqueWords.add(word + "_" + uniqueWords.size);
    }

    if (uniqueWords.size >= totalWords) break;
  }
}

// Convert set to string and write to file
const corpus = Array.from(uniqueWords).join(" ");
fs.writeFileSync("corpus.txt", corpus);

console.log(`✅ corpus.txt created with ${uniqueWords.size} unique words`);
