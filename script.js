function showGreetingFromURL() {
    
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');

    if (name) {
       
        const newElement = document.createElement('div');
        newElement.innerHTML = `Welcome, ${name}!`; 
        document.body.appendChild(newElement);
    }
}


document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    
    const comment = document.getElementById('comment').value;

    
    const newComment = document.createElement('div');
    newComment.classList.add('comment');
    newComment.innerHTML = comment;

    
    document.getElementById('commentsList').appendChild(newComment);

 
    document.getElementById('comment').value = '';
});


showGreetingFromURL();
