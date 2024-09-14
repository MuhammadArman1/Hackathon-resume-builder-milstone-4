var _a;
function populateCities() {
    var citySelect = document.getElementById('city');
    var countryElement = document.getElementById('country');
    if (!citySelect || !countryElement) {
        console.error('City or country element not found.');
        return;
    }
    var country = countryElement.value;
    citySelect.innerHTML = '<option value="" disabled selected>Select City</option>';
    var cities = [];
    switch (country) {
        case 'Pakistan':
            cities = ['Karachi', 'Lahore', 'Islamabad', 'Faisalabad', "Peshawar"];
            break;
        case 'USA':
            cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Miami'];
            break;
        case 'Canada':
            cities = ['Toronto', 'Vancouver', 'Montreal', 'Ottawa', 'Calgary'];
            break;
        case 'Australia':
            cities = ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide'];
            break;
        case 'UK':
            cities = ['London', 'Manchester', 'Birmingham', 'Liverpool', 'Edinburgh'];
            break;
    }
    cities.forEach(function (city) {
        var option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        citySelect.appendChild(option);
    });
}
function toggleskill() {
    var toggleButton = document.getElementById("toggle-button");
    var toggleskill = document.getElementById("toggle-skill");
    if (toggleskill.style.display === 'none') {
        toggleskill.style.display = 'block';
        toggleButton.textContent = "Hide Skill";
    }
    else {
        toggleskill.style.display = 'none';
        toggleButton.textContent = "Show Skill";
    }
}
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var socialMedia = document.getElementById('socialMedia').value;
    var country = document.getElementById('country').value;
    var city = document.getElementById('city').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var achievements = document.getElementById('achievements').value;
    var languages = Array.from(document.querySelectorAll('input[name="languages"]:checked'))
        .map(function (checkbox) { return checkbox.value; })
        .join(', ');
    document.getElementById('display-name').textContent = name;
    document.getElementById('display-email').textContent = email;
    document.getElementById('display-phone').textContent = phone;
    document.getElementById('display-socialMedia').textContent = socialMedia;
    document.getElementById('display-country').textContent = country;
    document.getElementById('display-city').textContent = city;
    document.getElementById('display-education').textContent = education;
    document.getElementById('display-experience').textContent = experience;
    document.getElementById('display-skills').textContent = skills;
    document.getElementById("display-achievement").textContent = achievements;
    document.getElementById('display-languages').textContent = languages;
    document.getElementById('resume-preview').style.display = 'block';
    var resumeForm = document.getElementById("resume-form");
    var editResume = document.getElementById("editResume");
    if (resumeForm && editResume) {
        resumeForm.style.display = "none";
        editResume.style.display = "inline-block";
    }
});
function editResume() {
    var resumeForm = document.getElementById("resume-form");
    var editResume = document.getElementById("editResume");
    if (resumeForm && editResume) {
        resumeForm.style.display = 'block';
        editResume.style.display = 'none';
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}
