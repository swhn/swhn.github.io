AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector(".techstack-box");
const techStack = [
  {
    langImage: "assets/images/techstack-page/house-wiring.png",
    langName: "House Wire Installation",
    langDesc: "<li>I worked for freelance House Wiring for 6 months and was stastified by 23 customers. </li>",
  },
  {
    langImage: "assets/images/techstack-page/electrician.png",
    langName: "Electrical Maintenace",
    langDesc: "<li>I worked for Electrical Maintenance at every workspace I worked. </li>",
  },
  {
    langImage: "assets/images/techstack-page/design.png",
    langName: "Electrical Design",
    langDesc: "<li>I worked with solar panel design, X-Ray room layout and able to read blueprint to smooth the workflow.</li>",
  },
  {
    langImage: "assets/images/techstack-page/solar-panel.png",
    langName: "Solar Power Energy",
    langDesc: "<li>I worked with solar panel for over a year and interest in renewable green energy. I've installed solar home systems, on-grid and off-grids. </li>",
  },
  {
    langImage: "assets/images/techstack-page/x-rays.png",
    langName: "X-Rays",
    langDesc: "<li>I've experience in X-Ray machines, Detectors, Imager and other accessories and I can install and maintenance for that.</li>",
  },
  {
    langImage: "assets/images/techstack-page/ultrasound.png",
    langName: "Ultrasound",
    langDesc: "<li>I've experience in ultrasound machines in different platforms and I can Install and maintenance for that.</li>",
  },
  {
    langImage: "assets/images/techstack-page/autocad.png",
    langName: "AutoCAD",
    langDesc: "<li>i can draw AutoCAD 2D designs, wiring plans, layout plans and understand the electrical designs.</li>",
  },
  {
    langImage: "assets/images/techstack-page/office.png",
    langName: "Microsoft Office",
    langDesc: "<li>I can use various Microsoft Office Softwares very well and familier with reports, paper works and presentations.</li>",
  },
  {
    langImage: "assets/images/techstack-page/google.png",
    langName: "Google Workspace",
    langDesc: "<li>I can use Google Workspace softwares and have a good knowledge with Data Sharing, Permissions and analysing.</li>",
  },
  {
    langImage:"assets/images/techstack-page/wordpress.png",
    langName:"Wordpress",
    langDesc:"<li>I have created multiples websites that are built on Wordpress platform and understand on themes, plugins and coding. </li>"
  },
];

const displayTechStacksCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};
// displayTechStacksCards(techStack)
document.addEventListener("DOMContentLoaded", displayTechStacksCards);
