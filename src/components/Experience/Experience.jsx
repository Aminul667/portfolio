const Experience = () => {
  const professionalExperience = [
    {
      id: 1,
      companyPosition:
        "Statistical Programmer II, Shafi Consultancy, Sylhet, Bangladesh",
      skills: "SAS, Python, SQL, Clinical Database, NONMEM",
      date: "Jun 2023 - Present",
    },
    {
      id: 2,
      companyPosition:
        "Statistical Programmer I, Shafi Consultancy, Sylhet, Bangladesh",
      skills: "SAS, Python, R, Clinical Trials",
      date: "Feb 2022 - May 2023",
    },
    {
      id: 3,
      companyPosition:
        "Trainee Statistical Programmer, Shafi Consultancy, Sylhet, Bangladesh",
      skills: "SAS, Clinical Trials, Clinical Database",
      date: "Aug 2021 – Jan 2022",
    },
    {
      id: 4,
      companyPosition:
        "Python Instructor (Part-Time), Sofwebs Academy, Bandar Sunway, Malaysia",
      skills:
        "Python, NumPy, Pandas, Matplotlib, Seaborn, Data Manipulation, Data Visualization",
      date: "Dec 2019 – Jan 2021",
    },
  ];

  const teachingExperience = [
    {
      id: 1,
      companyPosition:
        "Python Instructor (Part-Time), Happy Coders, Dhaka, Bangladesh",
      skills: "Python Data Type and Data Structure, Conditional Statements, Loops, Functions, lambda expression, zip, filter, map",
      date: "Dec 2022 – Apr 2023",
    },
    {
      id: 2,
      companyPosition:
        "Mentor of C program, Euclid Programming Club, Department of Mathematics, SUST",
      skills: "Introduction to C, Data Type, Conditional Statements, Function, Loops, Data Structure and Algorithm",
      date: "Mar 2015 – Aug 2019",
    },
    {
      id: 3,
      companyPosition:
        "Mentor of Mathematics (Part-Time), UCC academic and admission care (Private), Sylhet, Bangladesh",
      skills: "teaching a curriculum equivalent to 'A level",
      date: "Apr 2015 – Nov 2019",
    },
    {
      id: 4,
      companyPosition:
        "Mentor of ICT (Part-Time), Ambition Coaching Home (Private), Sylhet, Bangladesh",
      skills: "I worked as a part-time ICT (Information and Communication Technology) teacher",
      date: "Oct 2015 – Aug 2019",
    },
  ];

  return (
    <div className="px-8 lg:px-24 mt-10 font-playfair" id="experience">
      <h2 className="font-normal mb-3 text-3xl lg:text-5xl">Experience</h2>
      <div className="ml-5">
        <h3 className="text-2xl mb-4 font-medium">Professional Experience</h3>
        {professionalExperience.map((professional) => (
          <div
            key={professional.id}
            className="border-l-2 border-orange-400 px-4 py-1 mb-5"
          >
            <p className="text-2xl font-semibold">{professional.date}</p>
            <p className="text-lg font-semibold">
              {professional.companyPosition}
            </p>
            <p className="text-lg font-semibold">
              Skills: {professional.skills}
            </p>
          </div>
        ))}
      </div>

      <div className="ml-5">
        <h3 className="text-2xl mb-4 font-medium">Teaching Experience</h3>
        {teachingExperience.map((teaching) => (
          <div
            key={teaching.id}
            className="border-l-2 border-orange-400 px-4 py-1 mb-5"
          >
            <p className="text-2xl font-semibold">{teaching.date}</p>
            <p className="text-lg font-semibold">
              {teaching.companyPosition}
            </p>
            <p className="text-lg font-semibold">
              Skills: {teaching.skills}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
