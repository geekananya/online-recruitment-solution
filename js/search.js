//candidate data
const candidates = [
  { id: 0, name: "Terry Medhurst", location: "Delhi", jobRole: "Data Analyst" },
  { id: 1, name: "Sheldon Quigley", location: "Mumbai", jobRole: "UX Designer" },
  { id: 2, name: "Jane Brown", location: "Bangalore", jobRole: "Data Analyst" },
  { id: 3, name: "Alison Reichart", location: "Bangalore", jobRole: "Software Engineer" },
  { id: 4, name: "Eleanora Price", location: "Mumbai", jobRole: "Product Manager" },
  { id: 5, name: "Jaymes Arthur", location: "Mumbai", jobRole: "Software Engineer" },
  { id: 6, name: "Lenn Renner", location: "Delhi", jobRole: "Graphic Designer" },
  { id: 7, name: "Piper Schowalter", location: "Bangalore", jobRole: "UX Designer" },
];

  // Get references to HTML elements
  const searchForm = document.getElementById('searchForm');
  const resultsContainer = document.getElementById('results');
  const savedCandidatesContainer = document.getElementById('savedCandidates');

  // Handle search form submission
  searchForm.addEventListener('submit', function (event) {
    console.log("SUBMITTED");
    event.preventDefault(); // Prevent form submission

    // Get search criteria   
    const locationInput = document.getElementById('location');
    const jobRoleInput = document.getElementById('jobRole');
    const location = locationInput.value.trim();
    let jobRole = jobRoleInput.value.trim();

    if(jobRole === "All")   jobRole = ''
    
    // Filter candidates based on search criteria
    const filteredCandidates = candidates.filter(candidate =>
      candidate.location.toLowerCase().includes(location.toLowerCase()) &&
      candidate.jobRole.toLowerCase().includes(jobRole.toLowerCase())
    );

    // Display filtered candidates
    displayCandidates(filteredCandidates, resultsContainer);
  });

  // Display candidates in the provided container
  function displayCandidates(candidates, container) {
    // Clear previous results
    container.innerHTML = '';

    // Notify if no results found
    if(candidates.length === 0)
    {
      let msg = document.createElement("p");
      msg.appendChild(document.createTextNode("No Candidates found!"));
      msg.classList.add("center");
			container.appendChild(msg)
      return;
    }

    // Display each candidate
    candidates.forEach(candidate => {
      const candidateElement = document.createElement('div');
      candidateElement.innerHTML = `
        <h3>${candidate.name}</h3>
        <p>Location: ${candidate.location}</p>
        <p>Job Role: ${candidate.jobRole}</p>
        <button onclick="saveCandidate('${candidate.name}', '${candidate.location}', '${candidate.jobRole}')" class="button">Save</button>
      `;
      container.appendChild(candidateElement);
    });
  }

  // Save candidate for later evaluation
  function saveCandidate(candidateName, location, role) {

    // Check if the candidate is already saved
    const savedCandidates = Array.from(savedCandidatesContainer.children);
    const isCandidateAlreadySaved = savedCandidates.some(candidate => candidate.textContent === `${candidateName}, ${location}, ${role}`);
  
    if (isCandidateAlreadySaved) {
      return;
    }
    
    // Display saved candidate in the saved candidates section
    const savedCandidateElement = document.createElement('li');
    savedCandidateElement.textContent = `${candidateName}, ${location}, ${role}`;
    savedCandidatesContainer.appendChild(savedCandidateElement);
  }
