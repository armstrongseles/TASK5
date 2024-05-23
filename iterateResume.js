const resume = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    skills: ["JavaScript", "HTML", "CSS", "React"],
    experience: [
      {
        company: "Company A",
        role: "Frontend Developer",
        years: 2
      },
      {
        company: "Company B",
        role: "Full Stack Developer",
        years: 3
      }
    ]
  };
  
// Using a 'for' loop
console.log("Using 'for' loop:");
for (let i = 0; i < resume.skills.length; i++) {
  console.log(resume.skills[i]);
}

// Using 'for...in' loop
console.log("\nUsing 'for...in' loop:");
for (let key in resume) {
  if (resume.hasOwnProperty(key)) {
    console.log(${key}: ${resume[key]});
  }
}

// Using 'for...of' loop
console.log("\nUsing 'for...of' loop:");
for (let skill of resume.skills) {
  console.log(skill);
}

// Using 'forEach' loop
console.log("\nUsing 'forEach' loop:");
resume.skills.forEach(skill => {
  console.log(skill);
});