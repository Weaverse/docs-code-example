// Get the `timestamp` from Weaverse Component props
let timestamp = 1704067200000;
let date = new Date(timestamp);

// Parsing examples:
console.log(date.toISOString().split('T')[0]);  // => "2024-01-01"
console.log(date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }));  // => "January 1, 2024"
