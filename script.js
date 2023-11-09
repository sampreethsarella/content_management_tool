document.getElementById('blogForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get user input values
    var title = document.getElementById('titleInput').value;
    var text = document.getElementById('textInput').value;
    var image = document.getElementById('imageInput').files[0];
  
    // Create post container
    var postContainer = document.createElement('div');
    postContainer.classList.add('post');
  
    // Add title to post
    var titleElement = document.createElement('h2');
    titleElement.textContent = title;
    postContainer.appendChild(titleElement);
  
    // Add text to post
    var textElement = document.createElement('p');
    textElement.textContent = text;
    postContainer.appendChild(textElement);
  
    // Add image to post
    if (image) {
      var imageElement = document.createElement('img');
      imageElement.src = URL.createObjectURL(image);
      postContainer.appendChild(imageElement);
    }
  
    // Add post container to the posts container
    var postsContainer = document.getElementById('postsContainer');
    postsContainer.appendChild(postContainer);
  
    // Reset form fields
    document.getElementById('titleInput').value = '';
    document.getElementById('textInput').value = '';
    document.getElementById('imageInput').value = '';
  });
  