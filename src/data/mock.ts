export const PROFILE = {
  name: "Akash Singh",
  role: "Senior Software Developer",
  company: "Vyoma Innovus Global Pvt. Ltd.",
  experience: "4 Years",
  bio: "Results-driven Senior Developer with over 4 years of experience in building enterprise-grade web and mobile applications. Proven track record in designing scalable system architectures and leading technical implementations for complex platforms serving millions of users.",
  skills: ["Next.js", "TypeScript", "Node.js", "React", "WebSocket", "MongoDB", "Redux", "Three.js", "Git", "Java", "AWS", "JavaScript", "Angular", "Bootstrap", "React Native", "JQuery", "PHP", "CodeIgniter", "Laravel", "MySQL"],
  email: "manduakash@gmail.com",
  phone: "6202734737",
  location: "Kolkata, India",
  portfolioLink: "https://my-portfolio-two-peach-23.vercel.app/",
  qualifications: [
    { degree: "B.Tech in Computer Science", year: "2018-2022", uni: "MAKAUT, WB (formerly known as West Bengal University of Technology)", link: "https://www.makautexam.net/" },
    { degree: "Advance Java (Data Structure & Algorithm)", year: "2022-23", uni: "Anudip Foundation, Danlop Branch, West Bengal", link: "https://anudip.org/" },
    { degree: "Full Stack Web Development (Angular & Java)", year: "2023", uni: "Anudip Foundation, Danlop Branch, West Bengal", link: "https://anudip.org/" },
  ],
  socials: [
    { name: "Github", link: "https://github.com/manduakash" },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/akash-singh-3349b1184" },
    { name: "Instagram", link: "https://www.instagram.com/_akash_._singh_" },
    { name: "WhatsApp", link: "https://wa.me/6202734737" },
  ]
};

export const PROJECTS = [
  {
    id: 1,
    title: "Yatri Suvidha (Petropole)",
    description: "A digital slot booking platform developed to streamline international passenger movement at ICP Petrapole, ensuring efficient scheduling and faster cross-border clearance.",
    detailed_description: "Yatri Suvidha is a government-facing web application designed to manage and regulate the flow of international passengers at the Integrated Check Post (ICP), Petrapole. The system enables online slot booking, validation, and monitoring, significantly reducing congestion and manual intervention. It supports role-based access, secure data handling, and real-time status tracking to improve operational efficiency and passenger experience.",
    client: "Land Port Authority of India",
    company: "Vyoma Innovus Global Pvt. Ltd.",
    link: "https://yatrisuvidha.wb.gov.in/",
    image: "/gallery/yatri_suvidha/thumnail.png",
    technologies: ["PHP", "CodeIgniter", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap", "JQuery", "SVN (Rabbit)"],
    timeline: "2023 - Present"
  },
  {
    id: 2,
    title: "Passport Verification (WB)",
    description: "A security-focused digital system used by police stations across West Bengal for background verification of passport applicants.",
    detailed_description: "The Passport Verification system provides a centralized and secure platform for police authorities to process passport verification requests. It enables seamless coordination between police stations and supervisory offices, supports real-time status updates, and ensures strict data confidentiality while improving verification accuracy and processing timelines.",
    client: "STF (Special Task Force) & Department of IT",
    company: "Vyoma Innovus Global Pvt. Ltd.",
    link: "https://wbpassportverify.link/",
    image: "/gallery/passport/img_2.png",
    technologies: ["Next.js", "TypeScript", "Node.js", "Redis", "Redux", "Git", "AWS (S3 & EC2)", "ShadCN", "MySQL"],
    timeline: "2025 - Present"
  },
  {
    id: 3,
    title: "E-Sakshya",
    description: "A mobile and web-based digital evidence management system designed to assist police in recording, preserving, and managing evidence in criminal cases.",
    detailed_description: "eSakshya is an ICJS-aligned digital solution developed to modernize evidence collection and management in accordance with the latest criminal laws under the Bharatiya Nyaya Sanhita (BNS). The platform comprises a secure web portal and a mobile application that enables real-time capture of videos and images of evidence and witnesses, ensuring integrity, traceability, and transparency throughout the judicial process.",
    client: "Department of Information & Techology (Govt. of WB)",
    company: "Vyoma Innovus Global Pvt. Ltd.",
    link: "https://wbesakshya.wb.gov.in/",
    image: "/projects/eshakshya.png",
    technologies: ["React.js", "Javascript", "Java", "Spring Boot", "Redux", "Git", "AWS (S3 & EC2)", "MySQL"],
    timeline: "2025 - Present"
  },
  {
    id: 4,
    title: "Taruner Swapno",
    description: "A government initiative aimed at digitally empowering students by integrating technology into the education ecosystem.",
    detailed_description: "Taruner Swapno is a web-based application developed to support the West Bengal Government’s educational reform initiative. The platform enables eligible students to digitally access and complete self-declaration processes, facilitating the distribution of technology-enabled benefits. The system is designed to be user-friendly, secure, and accessible, ensuring wide adoption across the student community.",
    company: "Vyoma Innovus Global Pvt. Ltd.",
    client: "Department of Education (Govt. of WB)",
    link: "https://selfdeclaration.wb.gov.in/",
    image: "/gallery/taruner_swapno/img (3).png",
    technologies: ["Next.js", "TypeScript", "Java", "Spring Boot", "Redux", "Git", "ShadCN", "MySQL"],
    timeline: "2025 - Present"
  },
  {
    id: 5,
    title: "Sanjukta Portal",
    description: "An integrated single sign-on platform developed to unify multiple police applications under a centralized dashboard.",
    detailed_description: "SANGJUKTA is a unified digital platform developed for West Bengal Police to integrate multiple operational applications such as PCC, All Arrest, BDDS, LIMS, and Court Monitoring Systems. The platform provides a centralized dashboard with single sign-on access, enabling seamless data sharing, improved monitoring, and enhanced operational efficiency.",
    company: "Vyoma Innovus Global Pvt. Ltd.",
    client: "West Bengal Police & Department of IT",
    link: "https://superdashboard.wbapplication.link/",
    image: "/projects/superdashboard.png",
    technologies: ["Next.js", "TypeScript", "Java", "Spring Boot", "Redux", "Git", "ShadCN", "MySQL"],
    timeline: "2025 - Present"
  },
  {
    id: 6,
    title: "e-Report (Monthly DO)",
    description: "A digital reporting system developed for generating and reviewing consolidated Monthly District Officer (DO) reports for West Bengal Police.",
    detailed_description: "The e-Report system enables police stations to enter monthly operational data across departments such as Crime, Traffic, CID, IB, and RO. Reports are reviewed and verified at district and higher hierarchical levels, including SP, DIG, IG, and DGP, ensuring standardized reporting, data accuracy, and streamlined administrative oversight.",
    company: "Vyoma Innovus Global Pvt. Ltd.",
    client: "West Bengal Police & Department of IT",
    link: "https://ereport.wb.gov.in/",
    image: "/projects/ereport.png",
    technologies: ["JSP", "Bootstrap", "Java", "Spring Boot", "JQuery", "SVN (Tortoise)", "Javascript", "MySQL"],
    timeline: "2024 - Present"
  },
  {
    id: 7,
    title: "Police Clearance Certificate",
    description: "An official digital system for issuance of Police Clearance Certificates to certify an individual’s criminal background status.",
    detailed_description: "The PCC application enables citizens to apply for Police Clearance Certificates through a secure digital platform. The system facilitates verification by police authorities, ensures compliance with regulatory requirements, and supports certificate issuance for purposes such as immigration, employment, and foreign residency.",
    company: "Vyoma Innovus Global Pvt. Ltd.",
    client: "Department of Information & Techology (Govt. of WB)",
    link: "https://pcc.wb.gov.in/",
    image: "/projects/pcc.png",
    technologies: ["PHP", "Laravel", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap", "JQuery", "SVN (Rabbit)"],
    timeline: "2023 - Present"
  },
  {
    id: 8,
    title: "Webel IT & ITES NOC V1 & V2 (ongoing)",
    description: "A comprehensive online system enabling leasing and renting of WEBEL properties to IT, ITeS, and commercial organizations with UDIN-based certification.",
    detailed_description: "This application facilitates end-to-end digital processing for leasing and renting of WEBEL-owned and leased properties. It supports multiple rental scenarios, secure company login using GSTIN and PAN, online document submission, fee calculation, and approval workflows. All issued certificates, NOCs, and permissions are generated with UDIN of West Bengal, ensuring authenticity, transparency, and auditability.",
    company: "Vyoma Innovus Global Pvt. Ltd.",
    client: "Webel & Department of IT (Govt. of WB)",
    link: "https://anumati-itewb.wb.gov.in/",
    image: "/projects/itites.png",
    technologies: ["PHP", "Laravel", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap", "JQuery", "SVN (Rabbit)"],
    timeline: "2023 - Present"
  },
  {
    id: 9,
    title: "Pending Challan Management System",
    description: "A unified government portal for viewing, managing, and disposing of pending traffic challans.",
    detailed_description: "SANJOG provides a centralized digital platform for citizens and authorities to view pending challans, process payments, and manage disposal workflows. The system improves transparency, reduces manual processing, and enables efficient coordination between enforcement agencies.",
    company: "Vyoma Innovus Global Pvt. Ltd.",
    client: "Department of Transport (Govt. of WB)",
    link: "https://sanjog.wb.gov.in/",
    image: "/projects/sanjog.png",
    technologies: ["JSP", "Bootstrap", "Java", "Spring Boot", "JQuery", "SVN (Tortoise)", "Javascript", "MySQL"],
    timeline: "2023 - Present"
  },
  {
    id: 10,
    title: "Street Vendors (Hawkers)",
    description: "A government-authorized digital certification system for identification and rehabilitation of registered street vendors.",
    detailed_description: "This platform enables Aadhaar-based verification of street vendors identified by authorized agencies. Upon verification and annual fee payment, vendors are issued UDIN-based digital certificates, ensuring authenticity, regulatory compliance, and streamlined rehabilitation under government policies.",
    company: "Vyoma Innovus Global Pvt. Ltd.",
    client: "KMC (Kolkata Municipal Corp.) & Department of IT (WB)",
    link: "https://streetvendor.wb.gov.in/cov",
    image: "/projects/streetvendor.png",
    technologies: ["Next.js", "TypeScript", "Java", "Spring Boot", "Redux", "Git", "ShadCN", "MySQL"],
    timeline: "2025 - Present"
  },
  {
    id: 11,
    title: "All Arrest V2",
    description: "An Aadhaar-based digital arrest register system for real-time management of arrestee records.",
    detailed_description: "The All Arrest system provides police authorities with a centralized platform to digitally record, verify, and manage arrest information. It supports Aadhaar-based validation, real-time reporting, and hierarchical access controls, enhancing accuracy, transparency, and accountability in arrest-related data management.",
    company: "Vyoma Innovus Global Pvt. Ltd.",
    client: "Department of Transport (Govt. of WB)",
    link: "https://allarrest.wb.gov.in/",
    image: "/projects/allarrest.png",
    technologies: ["PHP", "Laravel", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap", "JQuery", "SVN (Rabbit)"],
    timeline: "2025 - Present"
  }
];

export const EXPERIENCE = [
  {
    id: 1,
    type: "Currently Serving",
    company: "Vyoma Innovus Global Pvt. Ltd.",
    role: "Senior Software Developer",
    duration: "2023 - Present",
    site: "https://www.vyomainnovusglobal.com/",
    description:
      "Designing and developing scalable web and mobile applications using Next.js, React.js, React Native, and Node.js. Leading feature development, API integrations, and backend services with Express.js, Spring Boot, and PHP. Actively involved in performance optimization, cloud deployment on AWS, and mentoring junior developers to ensure clean architecture and maintainable codebases.",
    skills: [
      "Next.js",
      "Node.js",
      "React.js",
      "React Native",
      "Express.js",
      "Spring Boot",
      "PHP",
      "AWS",
      "Java"
    ]
  },
  {
    id: 2,
    type: "Internship",
    company: "Anudip Foundations (Dunlop, Kolkata)",
    role: "Full Stack Intern",
    duration: "2022 - 2023 (4 Months)",
    site: "https://anudip.org/",
    description:
      "Worked on full-stack application development using Angular for frontend and Spring Boot for backend services. Built RESTful APIs, integrated JSP-based modules, and managed MySQL databases. Improved application performance by optimizing SQL queries and contributed to internal dashboard development and maintenance.",
    skills: [
      "Angular",
      "Spring Boot",
      "JSP",
      "RESTful API",
      "MySQL",
      "Web Development"
    ]
  },
  {
    id: 3,
    type: "Training",
    company: "Anudip (Kolkata Branch)",
    role: "Advanced Java & Data Structure Trainee",
    duration: "2022 (6 Months)",
    site: "https://anudip.org",
    description:
      "Completed intensive training in Core Java, Advanced Java, and Data Structures with hands-on implementation. Gained practical experience in API development, version control using Git, and foundational web technologies. Strengthened problem-solving skills and understanding of application architecture through real-world coding exercises.",
    skills: [
      "Java Basics",
      "Advanced Java",
      "Data Structure",
      "Git",
      "APIs",
      "HTML",
      "CSS",
      "JavaScript"
    ]
  }
];

export const ACHIEVEMENTS = [
  {
    id: 1,
    title: "Yatri Subidha Portal",
    subtitle: "Land Port Authority of India (LPAI)",
    date: "June-July 2023",
    description: "Digital slot booking system for international passengers at ICP Petrapole, ensuring faster cross-border clearance.",
    detailedStory: "Tasked by the Land Port Authority of India, I developed the 'Yatri Subidha' portal to solve massive congestion at the Indo-Bangladesh border. The system allows passengers to book arrival/departure slots, integrating health and customs checks into a single digital flow. It successfully reduced manual processing time by over 70%.",
    image: "/yatri_suvidha_feature.jpeg",
    tag: "Press Featured",
    gallery: [
      "/gallery/yatri_suvidha/img_1.jpeg", 
      "/gallery/yatri_suvidha/img_2.png",
      "/gallery/yatri_suvidha/img_3.png", 
      "/gallery/yatri_suvidha/img_4.png",
      "/gallery/yatri_suvidha/img_5.png",
      "/gallery/yatri_suvidha/img_6.png",
      "/gallery/yatri_suvidha/img_7.png"
    ],
    videoUrl: null,
    links: [
      { type: "web", url: "https://yatrisuvidha.wb.gov.in/", label: "Official Portal" },
      { type: "news", url: "https://fb.watch/mbI-LFKmaH/?mibextid=HSR2mg", label: "Media Coverage" },
      { type: "facebook", url: "https://fb.watch/mbbxZrriRh/?mibextid=9R9pXO", label: "Media Coverage 2" }
    ],
    stats: { label: "Time Saved", value: "3.5 Hrs" }
  },
  {
    id: 2,
    title: "Passport Verification System",
    subtitle: "West Bengal Police Infrastructure",
    date: "February-March 2025",
    description: "Security-first software utilized by all police stations in West Bengal to process passport applicant background checks.",
    detailedStory: "This mission-critical application was designed for the West Bengal Police to digitize the physical verification process. It connects every police station in the state to a central server, allowing officers to submit verification reports instantly via secure channels, cutting down the passport issuance cycle significantly.",
    image: "/passport_verification_2.png",
    tag: "State Gov-Tech",
    gallery: [
      "/gallery/passport/img_1.png", 
      "/gallery/passport/img_2.png",
      "/passport_verification_2.png"
    ],
    videoUrl: "/gallery/passport/video_1.mp4",
    links: [
      { type: "web", url: "https://wbpassportverify.link/", label: "WB Police Link" }
    ],
    stats: { label: "Police Stations", value: "400+" }
  },
  {
    id: 3,
    title: "Taruner Swapno: Digital Reform",
    subtitle: "Department of Education, West Bengal",
    date: "July-August 2025",
    description: "Massive-scale verification platform for 300,000+ students to receive digital grants for learning devices.",
    detailedStory: "As part of a major educational reform, I engineered the verification engine for 'Taruner Swapno'. The system processed bank and identity credentials for over 3 lakh students to facilitate a ₹10,000 grant. This required high-concurrency architecture to handle massive registration spikes without downtime.",
    image: "/taruner_swapno.jpeg",
    tag: "300k+ Verifications",
    gallery: [
      "/gallery/taruner_swapno/img (1).png",
      "/gallery/taruner_swapno/img (2).png",
      "/gallery/taruner_swapno/img (3).png",
    ],
    links: [
      { type: "web", url: "https://selfdeclaration.wb.gov.in/", label: "Education Portal" },
      { type: "news", url: "https://youtube.com/shorts/fvxk4cpNiNg?si=sBkSdqk5y7L4ppYx", label: "Govt Announcement" },
      { type: "other", url: "https://mywestbengal.com/taruner-swapno-self-declaration/", label: "Scheme Information (on govt. website)" },
      { type: "youtube", url: "https://youtu.be/PEjdKDb8Mgc?si=63ruZWdintmgrj7H", label: "Detailed Video (100k+ views)" }
    ],
    stats: { label: "Students Impacted", value: "300k+" }
  },
  {
    id: 4,
    title: "Durga Puja Bandhu App",
    subtitle: "Official Kolkata Police Companion",
    date: "October 2025",
    description: "High-traffic mobile companion for Bengal’s biggest festival with 50k+ downloads and real-time navigation.",
    detailedStory: "Developed for the Kolkata Police to manage millions of visitors during Durga Puja. The app features real-time pandal crowd updates, emergency SOS buttons, and GPS-based route maps. It maintained 99.9% uptime during the 5-day peak period with over 50k active users.",
    image: "/gallery/puja_bondhu/img_1.png",
    gallery: ["/puja_bandhu.png", "/gallery/puja_bondhu/img_1.png"],
    tag: "Featured in Times of India", 
    links: [
      { type: "playstore", url: "https://play.google.com/store/apps/details?id=com.indranilvyoma.boltexponativewind&hl=en-US", label: "Download App" },
      { type: "news", url: "https://timesofindia.indiatimes.com/city/kolkata/kolkata-police-app-to-spot-pandals-help-navigate-roads-during-puja/articleshow/124005226.cms", label: "The Time of India" },
      { type: "youtube", url: "https://youtu.be/hLU5VTzSnFM?si=9Jl5hLY3XtEd6OUY", label: "Kolkata Police Annoucement" },
      { type: "youtube", url: "https://youtube.com/shorts/-NxEmwevnC0?si=73I2YUw4qT3ft19p", label: "Tech Video (650k+ views)" }
    ],
    stats: { label: "Featured", value: "Times of India" }
  },
  {
    id: 5,
    title: "Dedicated Employee Award",
    subtitle: "Vyoma Innovus Excellence Award",
    date: "April 2024",
    description: "Recognized for technical leadership, architectural excellence, and mentoring teams at Vyoma Innovus.",
    detailedStory: "Received the top honors at Vyoma Innovus Global for consistently delivering high-quality architectural solutions. I was specifically recognized for migrating our core legacy systems to a modern microservices architecture and for mentoring junior engineers into senior roles.",
    image: "/vig_award.jpeg",
    tag: "Excellence Award",
    links: [
      { type: "linkedin", url: "#", label: "Award Post" }
    ],
    stats: { label: "Team Velocity", value: "+40%" }
  }
];

export const HOBBIES = [
  {
    title: "Learning New Technologies",
    icon: "tech",
    description: "Exploring modern tools, frameworks, and best practices to stay up to date in the tech ecosystem.",
    image: "/hobbies/tech.jpg"
  },
  {
    title: "UI/UX Exploration",
    icon: "uiux",
    description: "Designing intuitive interfaces and improving user experience through research and experimentation.",
    image: "/hobbies/uiux.jpg"
  },
  {
    title: "Traveling",
    icon: "travel",
    description: "Visiting new places, understanding different cultures, and gaining fresh perspectives.",
    image: "/hobbies/travel.png"
  },
  {
    title: "Guitar",
    icon: "music",
    description: "Playing guitar to relax, improve creativity, and enjoy music in free time.",
    image: "/hobbies/guitar.png"
  },
  {
    title: "Gym",
    icon: "gym",
    description: "Maintaining physical fitness and discipline through regular workouts and training.",
    image: "/hobbies/gym.jpg"
  },
  {
    title: "Cooking",
    icon: "cooking",
    description: "Experimenting with recipes and flavors to create enjoyable homemade meals.",
    image: "/hobbies/cooking.jpg"
  },
];


