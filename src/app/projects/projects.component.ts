import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
 Images=[
  {
    src:"../assets/Images/Netflix.jpg",
    h3:"Netflix-Clone",
    p:"I've recently developed a Netflix Clone, incorporating Html And Css for enhanced user engagement. "
  },
  {
    src:"../assets/Images/FISH-Q-logos.jpeg",
    h3:"FISH-Q",
    p:"I've recently developed a Fish-Q Sea Food Website, incorporating Using Html css for enhanced user engagement. "
  },
  {
    src:"../assets/Images/SPY-CHI-logos.jpeg",
    h3:"SPY-CHI",
    p:"I've recently developed a SPY-CHI Resturant Website Sea Food Website, incorporating Using Bootstrap css for enhanced user engagement. <"
  },
  {
    src:"../assets/Images/Protfolio-logos.jpeg",
    h3:"PERSONAL-PROTFOLIO",
    p:"I've recently developed a Personal Protfolio Website, incorporating Using Html css and figma for enhanced user engagement."
  }

 ]
 
}
