const resume = {
    "name": "Armstrong Seles",
    "contact": {
        "email": "armstrongseles.com",
        "phone": "7846538632"
    },
    "education": [
        {
            "degree": "MCA",
            "institution": "ST.JOSEPH'S COLLEGE TRICHY",
            "year": 2024
        },
        {
            "degree": "B.Sc in Computer Science",
            "institution": "THE AMERICAN COLLEGE",
            "year": 2022
        }
    ],
    "skills": ["JavaScript", "React", "Node.js", "Python"],
    "experience": [
        {
            "jobTitle": "Software Developer",
            "company": "TCS",
            "years": "2020-2022"
        },
        {
            "jobTitle": "Senior Software Developer",
            "company": "GUVI",
            "years": "2022-Present"
        }
    ]
};

// Using for loop
console.log("Using for loop:");
for (let i = 0; i < resume.education.length; i++) {
    console.log(`Degree: ${resume.education[i].degree}, Institution: ${resume.education[i].institution}, Year: ${resume.education[i].year}`);
}

// Using for...in loop
console.log("Using for...in loop:");
for (let key in resume) {
    if (resume.hasOwnProperty(key)) {
        console.log(`${key}: ${JSON.stringify(resume[key], null, 2)}`);
    }
}

// Using for...of loop for skills array
console.log("Using for...of loop:");
for (let skill of resume.skills) {
    console.log(skill);
}

// Using forEach loop for experience array
console.log("Using forEach loop:");
resume.experience.forEach(experience => {
    console.log(`Job Title: ${experience.jobTitle}, Company: ${experience.company}, Years: ${experience.years}`);
});
