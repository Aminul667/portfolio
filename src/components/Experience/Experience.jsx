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
  ];

  return (
    <div className="px-8 lg:px-24 mt-10 font-playfair" id="experience">
      <h2 className="font-normal mb-4 text-3xl lg:text-5xl">Experience</h2>
      <div className="ml-5">
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
        {/* <div className="border-l-2 border-orange-400 px-4 py-1 mb-5">
          <p className="text-2xl font-semibold">Feb 2022 - May 2023</p>
          <p className="text-lg font-semibold">
            Statistical Programmer I, Shafi Consultancy, Sylhet, Bangladesh
          </p>
          <p className="text-lg font-semibold">
            Skills: SAS, Python, R, Clinical Trials
          </p>
        </div>
        <div className="border-l-2 border-orange-400 px-4 py-1 mb-5">
          <p className="text-2xl font-semibold">Aug 2021 - Jan 2022</p>
          <p className="text-lg font-semibold">
            Trainee Statistical Programmer, Shafi Consultancy, Sylhet,
            Bangladesh
          </p>
          <p className="text-lg font-semibold">
            Skills: SAS, Clinical Trials, Clinical Database
          </p>
        </div>
        <div className="border-l-2 border-orange-400 px-4 py-1 mb-5">
          <p className="text-2xl font-semibold">
            Dec 2019 - Jan 2021 (Part Time)
          </p>
          <p className="text-lg font-semibold">
            Python Instructor, Sofwebs Academy
          </p>
          <p className="text-lg font-semibold">
            Skills: Python, NumPy, Pandas, Matplotlib, Seaborn, Data
            Manipulation, Data Visualization
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Experience;
