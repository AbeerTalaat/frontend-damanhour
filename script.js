document.getElementById('infoBtn').addEventListener('click', function() {
    const fact = document.getElementById('fact');
    fact.textContent = "Did you know? CSS was first released in 1996, and JavaScript was created in just 10 days!";
    fact.classList.remove('hidden');
  });

  document.getElementById('alertBtn').addEventListener('click', function() {
    alert("Hello! You're learning front-end development 🚀");
  });

  document.getElementById('alertBtn').addEventListener('click', function() {
    alert("Front-End Dev is fun and powerful! 🚀 Learn something new every day.");
  });
  