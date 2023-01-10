let today = new Date();
let thisYear = today.getFullYear();

setInterval(function() {
  var currentHour = new Date().getHours();
  var currentMinute = new Date().getMinutes();
  var currentSecond = new Date().getSeconds();

  // Convert the hour to 12-hour format
  var ampm = currentHour >= 12 ? 'PM' : 'AM';
  currentHour = currentHour % 12;
  currentHour = currentHour ? currentHour : 12; // 0 becomes 12

  // Get the current date and month
  var currentDate = today.getDate();
  var currentMonth = today.getMonth();

  // Convert the month to a word
  var monthNames = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December'
  ];
  var currentMonthName = monthNames[currentMonth];

  // Format the time string
  var currentTime = currentHour + ':' + currentMinute + ':' + currentSecond + ' ' + ampm;

  let footer = document.querySelector('footer');
  let copyright = document.createElement('p');
  let date = document.createElement('p');

  // Set the innerHTML of the footer element
  document.querySelector("footer").innerHTML = "&nbsp;&nbsp;&copy; Vadim Dmitrochenko";
  date.innerHTML = currentDate + " " + currentMonthName + " , " + thisYear + " " + currentTime;

  // Append the date element to the footer
  footer.appendChild(date);
}, 1000);

/* Skills */
let skills = ['REACT.JS', 'HTML', 'CSS', 'JavaScript', 'Git/Github', 'Google Services', 'VS-Code', 'Debugging'];
let skillsSection = document.getElementById('skills');
let skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.innerHTML = `${skills[i]}`;
    skillsList.appendChild(skill);
}
/* List of messages display */
let messageSection = document.querySelector('#messages');
let messageList = messageSection.querySelector('ul');
let messageForm = document.querySelector('[name = "leave_message"]');
/* New Message Submission */
messageForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let name = event.target.name;
    let email = event.target.email;
    let message = event.target.message;
    let newMessage = document.createElement('li');

    newMessage.innerHTML = "<a href='mailto:" + email.value + "'>" + name.value + "</a><span>  wrote: " + message.value + "</span>   ";
    /* Remove button */
    let removeButton = document.createElement('button');
    removeButton.innerText = "Remove";
    /* removeButton.innerText = "remove"; */
    removeButton.setAttribute("type", "button");
    removeButton.addEventListener('click', (event) => {
        let entry = removeButton.parentNode;
        entry.remove();
        messagesSectionShowHide();
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    console.log(name.value, email.value, message.value);
    messageForm.reset();
});

function messagesSectionShowHide() {
    if (messageList.childElementCount != 0) {
        messageSection.style.display = "block";
    } else {
        messageSection.style.display = "none";
    }
};
//Fetch GitHub Repositories//
/*let githubRequest = new XMLHttpRequest();
  githubRequest.open("GET" , "https://api.github.com/users/VadimDmitr/repos");
  githubRequest.send ();
//Handle Response from Server//
githubRequest.onreadystatechange = function () {
    if (githubRequest.readyState === 4) {
        let repositories = JSON.parse(githubRequest.responseText);
        console.log(repositories);
//Display Repositories//
        let projectSection = document.getElementById("projects");
        let projectList = projectSection.querySelector ("ul");
    
        for (let i=0; i<repositories.length; i++) {
            let project = document.createElement('li');
            let repoLink = document.createElement('a');
              repoLink.href = repositories[i].html_url;
              repoLink.innerHTML = repositories[i].name;
              project.appendChild(repoLink);
              projectList.appendChild(project);
          
        }
    }
};*/
// Fetch API //
fetch('https://api.github.com/users/VadimDmitr/repos')
  .then((res) => res.json())
  // .then((data) => console.log(data))//
  .then((data) => {
    const repositories = data;
    const projectSection = document.getElementById('projects');
    const projectList = projectSection.querySelector('div');
    for (let i = 0; i < repositories.length; i +=1) {
      let project = document.createElement('div');
      project.classList.add('project-container', 'project-card');
      // project.innerHTML = repositories[i].name;
      project.innerHTML =
      `<a href="${repositories[i].html_url}"
      target="_blank" class="project-link link link--no-color">
      <img
      src="image/webdev.png"
      width="250"
      alt="project"
      loading="lazy"
      class="project-pic"
      />
      <h3 class="project-title">${repositories[i].name}</h3>
      <p class="project-details">
      Code the Dream software courses: REACT.JS, HTML, CSS, Javascript, AJAX, API fetch, Git/GitHub
      </p>
      Check it Out</a>`;
      projectList.appendChild(project);
    };
  })
  .catch(error => console.log('Looks like there was a problem', error))
    