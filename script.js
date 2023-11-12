document.addEventListener("DOMContentLoaded", function() {
    var colors = ["#F8F9FA", "#DAE0E2", "#E9ECEF", "#CED4DA", "#FFF", "#FFC0CB", "#008080", "#FFA500", "#800080", "#00FFFF"];
    var textColors = ["#F8F9FA", "#DAE0E2", "#E9ECEF", "#CED4DA", "#FFF", "#FFC0CB", "#008080", "#FFA500", "#800080", "#00FFFF"]; // Add corresponding text colors
    var currentIndex = 0;
  
    var body = document.querySelector("body");
    var heading = document.querySelector("h1"); // Assuming you want to change the heading text color
  
    body.addEventListener("click", function() {
      currentIndex = (currentIndex + 1) % colors.length;
      body.style.backgroundColor = colors[currentIndex];
      heading.style.color = textColors[currentIndex]; // Change text color along with background color
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function() {
      document.body.classList.toggle('color-change');
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function() {
      // Generate a random color
      var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
      
      // Apply the random color to all text
      var allTextElements = document.querySelectorAll('body *');
      allTextElements.forEach(function(element) {
        element.style.color = randomColor;
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function() {
      document.body.classList.toggle('glass-effect');
    });
  });
  
  
  