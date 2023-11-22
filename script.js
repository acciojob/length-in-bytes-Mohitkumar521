const byteSize = (str) => {
  // Create a Blob object with the given string
  const blob = new Blob([str]);

  // Use the size property of the Blob to get the size in bytes
  const sizeInBytes = blob.size;

  return sizeInBytes;
};

// Prompt the user to enter a string
const str = prompt("Enter some string.");

// Display the byte size using the alert function
alert(byteSize(str));

