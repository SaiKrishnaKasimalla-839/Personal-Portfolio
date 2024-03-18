import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  Images = [
    {
      src: '../assets/Images/Html.png',
      h3: 'Web Designing',
      p: 'HTML is the standard markup language used to create and design web pages. It provides the basic structure and content of a webpage by using a system of tags and attributes. These tags define various elements such as headings, paragraphs, images, links, and more.'
    },
    {
      src: '../assets/Images/css.png',
      h3: 'Web Development',
      p: 'CSS is a stylesheet language used to control the presentation and layout of HTML documents. It enables developers to style the elements of a webpage, such as fonts, colors, spacing, and positioning, to create visually appealing and user-friendly interfaces.'
    },
    {
      src: '../assets/Images/ANGULAR.png',
      h3: 'Web Framework',
      p: 'Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.'
    },
    {
      src: '../assets/Images/java.png',
      h3: 'Programming',
      p: 'Java is a high-level, object-oriented programming language originally developed by Sun Microsystems and released in 1995. It\'s designed to be platform-independent, meaning that Java programs can run on any device or operating system that has a Java Virtual Machine (JVM) installed.'
    },
    {
      src: '../assets/Images/python.png',
      h3: 'Programming',
      p: 'Python is a high-level, interpreted programming language known for its simplicity readability, and versatility. It was created by Guido van Rossum and first released in1991. Python emphasizes code readability and productivity, making it a popular choice for beginners and experienced developers alike.'
    },
    {
      src:'../assets/Images/figma.png',
      h3:'Designing',
      p:'Figma is a collaborative interface design tool used by designers, developers, and otherstakeholders to create, prototype, and collaborate on user interface (UI) and userexperience (UX) designs for websites, web applications, mobile apps, and other digitalproducts.'
    },
    {
      src: 'https://d1.awsstatic.com/asset-repository/products/amazon-rds/1024px-MySQL.ff87215b43fd7292af172e2a5d9b844217262571.png',
      h3: 'Database',
      p: 'MySQL is a popular open-source relational database management system (RDBMS) known for its reliability, scalability, and ease of use. It allows users to efficiently store, organize, and retrieve data using structured query language (SQL) '
    },
    {
      src:'../assets/Images/github.png',
      h3:'Version Control',
      p:'GitHub is a web-based platform and version control system used by developers to host,manage, and collaborate on software projects. It provides a wide range of features andtools that facilitate code sharing, collaboration, and project management'
    }

    
  ];
}
