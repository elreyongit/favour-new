import Fahyvor from '../assets/ME.png';

const experienceArray = [
    {
        duration: "Oct. 2024 - Till Date",
        company: "Djeffs Source",
        position: "FullStack Developer",
        description: "Works as a Full Stack Developer, where I am responsible for developing end-to-end web applications. I contribute to both front-end and back-end development, ensuring seamless user experiences and efficient system performance. Additionally, I play a critical roles in enhancing the functionality and scalability of products"
    },
    {
        duration: "Feb. 2025 - Apr. 2026",
        company: "CaseflowAI, U.S.A",
        position: "FullStack Developer",
        description: "Assumed full-stack responsibilities to deliver end-to-end features, optimize complex document-processing pipelines, and build intuitive user interfaces. Scaled backend infrastructure using Python and Django to ingest, parse, and format heavy legal documents for AI analysis while ensuring low latency and high system reliability."
    },
    {
        duration: "August. 2025 - Till Date",
        company: "Terraskills Learning Systems, F.C.T, Nigeria",
        position: "Junior Facilitator / Full Stack Developer",
        description: "Works as a Full Stack Developer, where I am responsible for developing end-to-end web applications. I contribute to both front-end and back-end development, ensuring seamless user experiences and efficient system performance. Additionally, I play a critical roles in enhancing the functionality and scalability of products"
    },
    {
        duration: "May. 2024 - Jan. 2025",
        company: "Legum Limited",
        position: "Frontend Developer",
        description: "Works as a Frontend Developer, where I am responsible for developing scalable web interfaces."
    },
    {
        duration: "July. 2024",
        company: "Tech4Dev",
        position: "Tech Instructor",
        description: "Worked as a Tech Instructor, where I am responsible for enlightening the Civil Servants of Abia State Government on how to enhance their work place productivity with Information Technology."
    },
    {
        duration: "Feb. - April 2024",
        company: "Ashnity Synergy Limited",
        position: "FullStack Developer",
        description: "Worked as a Full Stack Developer, where I was responsible for developing frontend web applications and smart contracts. I contribute to both front-end and back-end development, ensuring seamless user experiences and efficient system performance. Additionally, I play a critical roles in also writing smart contracts"
    },
    {
        duration: "Nov. 2023 - Feb. 2024",
        company: "Homly, LLC",
        position: "FullStack Developer",
        description: "Worked as a Full Stack Developer, where I was responsible for developing end-to-end web applications. I contribute to both front-end and back-end development, ensuring seamless user experiences and efficient system performance. Additionally, I play a critical roles in enhancing the functionality and scalability of products"
    },
    {
        duration: "Jul. - Dec. 2023",
        company: "Doncodes Tech. Limited",
        position: "Frontend Developer",
        description: "Worked as a Frontend Developer, where I am responsible for developing end-to-end web applications. I contribute to both front-end and back-end development, ensuring seamless user experiences and efficient system performance."
    },
    {
        duration: "Sept. 2015 - Dec. 2022",
        company: "Innolink Integrated Services",
        position: "Senior Graphics Designer",
        description: "Worked as a Senior Graphics Designer at, where I led the design team in creating impactful visual content for digital and print media. I was responsible for conceptualizing and executing high-quality designs that aligned with the company's branding and marketing strategies. My role included overseeing projects from ideation to completion, mentoring junior designers, and ensuring consistency and excellence in all creative deliverables"
    },
]

const skillsArray = [
    {
      skill: "HTML",
      proficiency: "Experienced"
    },
    {
      skill: "CSS",
      proficiency: "Experienced"
    },
    {
      skill: "JavaScript",
      proficiency: "Experienced"
    },
    {
      skill: "TailwindCSS",
      proficiency: "Experienced"
    },
    {
      skill: "Bootstrap",
      proficiency: "Experienced"
    },
    {
      skill: "ReactJs",
      proficiency: "Experienced"
    },
    {
      skill: "NextJs",
      proficiency: "Experienced"
    },
    {
      skill: "VueJs",
      proficiency: "Basic"
    },
    {
      skill: "Ionic React",
      proficiency: "Experienced"
    },
    {
      skill: "React Native",
      proficiency: "Intermediate"
    },
    {
      skill: "CorelDRAW",
      proficiency: "Experienced"
    },
    {
      skill: "Photoshop",
      proficiency: "Intermediate"
    },
    {
      skill: "Solidity",
      proficiency: "Experienced"
    },
    {
      skill: "NodeJs",
      proficiency: "Intermediate"
    },
    {
      skill: "ExpressJs",
      proficiency: "Intermediate"
    },
    {
      skill: "MongoDB",
      proficiency: "Experienced"
    },
    {
      skill: "PostgreeSQL",
      proficiency: "Intermediate"
    },
    {
      skill: "PHP",
      proficiency: "Basic"
    },
    {
      skill: "Python",
      proficiency: "Basic"
    },
    {
      skill: "Docker",
      proficiency: "Experienced"
    },
    {
      skill: "AWS",
      proficiency: "Experienced"
    },
    {
      skill: "Git",
      proficiency: "Experienced"
    },
    {
      skill: "DevOps",
      proficiency: "Intermediate"
    }
  ]

const Credentials = () => {
  return (
    <div className="pt-28 w-full flex lg:flex-row md:flex-row flex-col gap-16 lg:px-20 md:px-12 px-6 py-6 pb-10">
        <div className="bg-dark-favour rounded-3xl p-6 lg:w-1/3 md:w-2/4 w-full h-3/4 lg:sticky md:sticky top-28">
            <img src={Fahyvor} alt='' className='w-full rounded-xl h-[20rem]' />

            <p className="text-3xl font-semibold text-center mt-5">Favour Okafor</p>
            <p className='text-center text-gray-400'>@fahyvor</p>
        </div>

        <div className="lg:w-2/3 md:w-2/4 w-full">
            <div className="flex flex-col gap-4">
                <p className='font-semibold text-xl'>ABOUT ME</p>

                <p className='text-justify leading-relaxed'>
                    A reliable, consistent, hardworking Computer Science graduate with strong attention to details and eagerness
                    to learn about new technologies. I am also able to work well both on my own and as part of a team under
                    little or less supervision. I am able to offer extensive knowledge of software development, programming
                    and extraordinary communication skills.
                </p>
            </div>

            <div className="mt-12">
                <p className='font-semibold text-xl'>EXPERIENCE</p>

                {experienceArray.map((experience, index) => (
                    <div key={index} className="flex flex-col my-4">
                        <p className='text-gray-600 text-lg'>{experience.duration}</p>
                        <p className='text-blue-800 text-xl font-semibold'>{experience.position}</p>
                        <p className='text-gray-600 text-sm'>{experience.company}</p>
                        <p className='text-justify'>{experience.description}</p>
                    </div>
                ))}
            </div>

            <div className="mt-20">
                <p className='font-semibold text-xl'>SKILLS</p>
                
                <div className='grid grid-cols-2 gap-8 py-6'>
                    {skillsArray.map((skills, index) => (
                        <div key={index} className='flex flex-col gap-2'>
                            <p className='font-bold text-xl'>{skills.skill}</p>
                            <p className='text-gray-600'>{skills.proficiency}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Credentials