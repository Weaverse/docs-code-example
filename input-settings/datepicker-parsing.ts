let timestamp = 1704067200000;
let date = new Date(timestamp);

// Parsing the timestamp:

console.log(date.toISOString());  
// => "2024-01-01T00:00:00.000Z"

console.log(date.toISOString().split('T')[0]);  
// => "2024-01-01"

console.log(date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }));  
// => "January 1, 2024"

console.log(date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));  
// => "Jan 1"

console.log(date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }));  
// => "Monday, January 1, 2024"
