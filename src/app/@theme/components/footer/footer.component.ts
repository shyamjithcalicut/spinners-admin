import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
    {{'Footer.DesignDevelopedBy' | translate}} <b><a href="https://4codesystem.com" target="_blank">{{'Footer.CompanyName' | translate}}</a></b> © {{'Footer.CopyrightYear' | translate}}
    </span>
   
  `,
})
export class FooterComponent {
}
