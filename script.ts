function populateCities(){
    
    const citySelect = document.getElementById('city') as HTMLSelectElement | null;
    const countryElement = document.getElementById('country') as HTMLSelectElement | null;

    if (!citySelect || !countryElement) {
        console.error('City or country element not found.');
        return;
    }

    const country = countryElement.value;
    citySelect.innerHTML = '<option value="" disabled selected>Select City</option>';

    let cities: string[] = [];
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
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        citySelect.appendChild(option);
    });
}

function toggleskill(){
    const toggleButton = document.getElementById("toggle-button") as HTMLButtonElement
    const toggleskill = document.getElementById("toggle-skill") as HTMLElement
    
        if (toggleskill.style.display === 'none') {
            toggleskill.style.display = 'block';
            toggleButton.textContent = "Hide Skill"
        } else {
            toggleskill.style.display = 'none';
            toggleButton.textContent = "Show Skill"

        }
        }
    
document.getElementById('resume-form')?.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const socialMedia = (document.getElementById('socialMedia') as HTMLInputElement).value;
    const country = (document.getElementById('country') as HTMLSelectElement).value;
    const city = (document.getElementById('city') as HTMLSelectElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;
    const achievements = (document.getElementById('achievements') as HTMLInputElement).value;

    const languages = Array.from(document.querySelectorAll('input[name="languages"]:checked'))
        .map(checkbox => (checkbox as HTMLInputElement).value)
        .join(', ');

    document.getElementById('display-name')!.textContent = name;
    document.getElementById('display-email')!.textContent = email;
    document.getElementById('display-phone')!.textContent = phone;
    document.getElementById('display-socialMedia')!.textContent = socialMedia;
    document.getElementById('display-country')!.textContent = country;
    document.getElementById('display-city')!.textContent = city;
    document.getElementById('display-education')!.textContent = education;
    document.getElementById('display-experience')!.textContent = experience;
    document.getElementById('display-skills')!.textContent = skills;
    document.getElementById("display-achievement")!.textContent = achievements;
    document.getElementById('display-languages')!.textContent = languages;
    document.getElementById('resume-preview')!.style.display = 'block';

    const resumeForm = document.getElementById("resume-form")
    const editResume = document.getElementById("editResume") 

    if(resumeForm && editResume){
        resumeForm.style.display = "none";
        editResume.style.display = "inline-block";
    }
    
});

function editResume(): void {
    const resumeForm = document.getElementById("resume-form")
    const editResume = document.getElementById("editResume") 
    if (resumeForm && editResume) {
        resumeForm.style.display = 'block';
        editResume.style.display = 'none';
    }
}