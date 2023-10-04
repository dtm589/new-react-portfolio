const logotext = "DTM";
const meta = {
    title: "Derek Marchese",
    description: "I’m Derek Marchese Full stack devloper, currently working in Florida",
}; 

const introdata = {
    title: "I’m Derek Marchese",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "I give back",
    },
    description: "Dedicated, ambitious, problem solver that utilizes critical thinking to create apps and websites from ideation to deployment.",
    your_img_url: "https://d.img.vision/derek/final.png",
};

const dataabout = {
    title: "A little about my self",
    aboutme: "I have always had a passion for creating meaningful experiences for people. That is what led me to become a chef. I have spent many years working as a chef, and honing my skills to create unforgettable experiences. However, as much as I enjoyed cooking, I felt a pull towards the world of web and software development. I have always been fascinated by technology and the way it can transform our lives, and I wanted to be a part of that transformation. So, I decided to make a career change and pursue my passion for web development.  As a web Developer, I enjoy using my obsessive attention to details, my passion for making things, and my goal oriented work ethic to literally impact the world.",
};
const worktimeline = [
    {
        jobtitle: "Volunteer",
        where: "Orlando DataDive Event",
        date: "10/2024",
    },
];

const skills = [{
    name: "JavaScript",
    value: 80,
},
{
    name: "MongoDB",
    value: 75,
},
{
    name: "SQL",
    value: 80,
},
{
    name: "React",
    value: 60,
},
{
    name: "Jquery",
    value: 65,
},
{
    name: "Java",
    value: 20,
},
{
    name: "Python",
    value: 25,
},
];

const services = [
    {
        title: "Back End Development",
        description: "I specialize in architecting and implementing the core systems of applications, focusing on server-side logic, databases, and ensuring seamless performance, scalability, and data security..",
    },
    {
        title: "Web Development",
        description: "Architect web solutions that focuses security, seamless deployment, scalability, and user-friendly maintenance.",
    },
    {
        title: "Mobile Apps",
        description: "Develop applications that exhibit scalability, seamless installation, and dynamic responsiveness.",
    },
];

const dataportfolio = [{
    img: "https://raw.githubusercontent.com/jalarcon95/Fresh-Paws/main/client/src/assets/Servicespic.jpg",
    description: "The app was built with GraphQL, a React front end, MongoDB database, and Node.js/Express.js server, queries and mutations to fetch and modify data.",
    link: "https://freshpaws-6177244a2a25.herokuapp.com/",
},

{
    img: "https://github.com/dtm589/social-network-api/raw/main/assets/Capture.jpg",
    description: "This project harnesses the power of Node.js, Express, MongoDB, Mongoose, and Validator to showcase the implementation of fundamental CRUD",
    link: "https://github.com/dtm589/social-network-api",
},
{
    img: "https://github.com/dtm589/book-engine/raw/main/assets/demo-01.gif",
    description: "The app was built using the MERN stack, with a React front end, MongoDB database, and Node.js/Express.js server and API.",
    link: "https://mighty-retreat-07184-f8fbfd6353e9.herokuapp.com/",
},
{
    img: "https://github.com/dtm589/blog-site/raw/main/assets/screenshot.png",
    description: "This app follows the MVC model that uses technologies like handlebars, node.js, mysql, sequelize and other npm packages.",
    link: "https://github.com/dtm589/blog-site",
},
{
    img: "https://github.com/dtm589/professional-social-media/raw/main/assets/Greenshot%202023-08-03%2019.23.26.png",
    description: "Utilizing Express, MySQL, Sequelize, and Handlebars to create a locational based social media.",
    link: "https://github.com/dtm589/professional-social-media",
},
{
    img: "https://raw.githubusercontent.com/its-jefe/Note-Taker/main/images/1.png",
    description: " Utilizing express.js back end, this application contains multiple get and post routes to save the notes that are written to a json file. ",
    link: "https://github.com/dtm589/note-taker",
},
];

const contactConfig = {
    YOUR_EMAIL: "derekmarchese1@gmail.com",
    YOUR_FONE: "(704)701-4287",
    description: "Please feel free to reach out with any questions. I'm always looking to work on cool projects and help others!",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_cp5i2pk",
    YOUR_TEMPLATE_ID: "template_ml8i1ax",
    YOUR_USER_ID: "U_zC3viltWoEFtq6o",
};

const socialprofils = {
    github: "https://github.com/dtm589",
    facebook: "https://facebook.com/derek.marchese.9/",
    linkedin: "https://linkedin.com/in/derek-marchese-083bb9187/",
    twitter: "https://twitter.com/DerekMarchese",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};