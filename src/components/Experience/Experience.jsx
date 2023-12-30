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
      skills: "Python, NumPy, Pandas, Matplotlib, Seaborn, Data Manipulation, Data Visualization",
      date: "Dec 2019 – Jan 2021",
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
    </div>
  );
};

export default Experience;
