
/*
  function myFunction() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
  }

*/

function myFunction() {
  var textToCopy = document.getElementById("myInput").value;

  // Create a temporary textarea element
  var tempTextarea = document.createElement("textarea");

  // Set the value of the textarea to the text you want to copy
  tempTextarea.value = textToCopy;

  // Append the textarea to the document
  document.body.appendChild(tempTextarea);

  // Select the text inside the textarea
  tempTextarea.select();

  // Copy the selected text
  document.execCommand("copy");

  // Remove the temporary textarea from the document
  document.body.removeChild(tempTextarea);

  // Alert the user that the text has been copied
  alert("Copied the text: " + textToCopy);
}




  
