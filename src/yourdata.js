// Skills Icons
import awsIcon from "./images/amazonaws.svg"
import apacheIcon from "./images/apache.svg"
import dockerIcon from "./images/docker.svg"
import bashIcon from "./images/gnubash.svg"
import kubernetesIcon from "./images/kubernetes.svg"
import linuxIcon from "./images/linux.svg"
import nginxIcon from "./images/nginx.svg"
import rocketchatIcon from "./images/rocketdotchat.svg"
import terraformIcon from "./images/terraform.svg"



// Social Icon
import githubIcon from "./images/github.svg"
import linkedinIcon from "./images/linkedin.svg"
import tryhackmeIcon from "./images/tryhackme.svg"
import researchgateIcon from "./images/researchgate.svg"
import mediumIcon from "./images/medium.svg"
import instagramIcon from "./images/instagram.svg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Sumo",
  headerTagline: [
    //Line 1 For Header
    "Ethical Hacking,",
    //Line 2 For Header
    "Cloud Computing,",
    //Line 3 For Header
    "DevOps.",
  ],
  //   Header Paragraph
  headerParagraph:
    "If you can dream it, You can do it ;)",

  //Contact Email
  contactEmail: "https://www.linkedin.com/in/sumanth-dodda/",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Trishul", //Project Title - Add Your Project Title Here
      para:
        "Trishul is an ultimate collection framework to do recon", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1487837647815-bbc1f30cd0d2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njl8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/sumo2001/Trishul",
    },
    {
      title: "Intrusion-Detection-System-based-on-anomaly", //Project Title - Add Your Project Title Here
      para:
        "A host-based IDS with rule structure generation and pattern matching algorithm sets the rule structure for the unknown attack by using association rule mining in the map reduce framework", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1605153864431-a2795a1b2f95?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyNTY3ODl8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/sumo2001/Intrusion-Detection-System-based-on-anomaly/blob/main/fianl_cyber.pdf",
    },
    {
      title: "Binding-payload-within-images", //Project Title - Add Your Project Title Here
      para:
        "Hypothesis of a computer virus threat, and how destructive it can be??.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1504083898675-c896ecdae86e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/sumo2001/Binding-payload-within-images/blob/main/final_vapt.pdf",
    },


    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Enthusiastic cybersecurity analyst eager to contribute to team success through hard work, attention to detail, and excellent organizational skills. ",
  aboutParaTwo:
    "A clear understanding, analyzing, and solving a problem makes me motivated to learn, grow and excel in cybersecurity ﬁeld and a motivated Linux system admin with proven knowledge in various open-source operating systems.",
  aboutParaThree:
    "Committed to improving network uptime and system availability,enriching and enhancing myself better everyday",
  aboutImage:
    "https://images.unsplash.com/photo-1646175948191-dd2fcdc68f3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=364&q=81",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: apacheIcon,
      para:
        "Apache HTTP Server is a free and open-source web server that delivers web content through the internet, It is commonly referred to as apache, it quickly became the most popular HTTP client on the web.",
    },
    {
      img: awsIcon,
      para:
        "Amazon Web Services (AWS) is the world’s most comprehensive and broadly adopted cloud platform, offering over 200 fully featured services from data centers globally.",
    },
    {
      img: dockerIcon,
      para:
        "Docker is a set of platform as a service products that use OS level virtualization to deliver software in packages called containers",
    },
    {
      img: bashIcon,
      para:
        "Bash (Bourne Again Shell) is the free and enhanced version of the Bourne shell distributed with Linux and GNU operating systems.",
    },
    {
      img: kubernetesIcon,
      para:
        "Kubernetes is an open-source container orchestration system for automating software deployment, scaling, and managemen",
    },
    {
      img: linuxIcon,
      para:
        "Just like Windows, iOS, and Mac OS, Linux is an operating system. In fact, one of the most popular platforms on the planet, Android, is powered by the Linux operating system.",
    },
    {
      img: nginxIcon,
      para:
        "Nginx, stylized as NGIИX, is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache",
    },
    {
      img: rocketchatIcon,
      para:
        "Rocket. Chat is a fully customizable communications platform for organizations with high standards of data protection",
    },
    {
      img: terraformIcon,
      para:
        "Terraform is our tool of choice to manage the entire lifecycle of infrastructure using infrastructure as code",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Matters !!.",
  promotionPara:
    "You will have massive doubt. One day you will feel strongly about something, then the next day you will wonder if your work and your dream really even matters. It does. But, you have to remind yourself of that all the time. Your work is real. If you stop, if you quit…something is lost forever. Your work makes a difference. Keep going.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/sumo2001" },
    {
      img: linkedinIcon,
      url: "https://www.linkedin.com/in/sumanth-dodda/",
    },
    {
      img: tryhackmeIcon,
      url: "https://tryhackme.com/p/AlLMight",
    },
    {
      img: mediumIcon,
      url: "https://sumododda.medium.com/",
    },
    {
      img: researchgateIcon,
      url: "https://www.researchgate.net/profile/Sumanth-Dodda",
    },
    {
      img: instagramIcon,
      url: "https://www.instagram.com/iamcybermight",
    },
  ],

  // End Contact Section ---------------
}
