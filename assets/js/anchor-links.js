document.addEventListener('DOMContentLoaded', function() {
  const headings = document.querySelectorAll('.content h2, .content h3, .content h4, .content h5, .content h6');
  
  headings.forEach(heading => {
    heading.addEventListener('click', function(e) {
      const id = this.getAttribute('id');
      if (id) {
        window.location.hash = id;
      }
    });
  });
}); 