import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `<div class="row footer">
                <p>&copy; IGP.com - Intermesh Pvt Ltd. - 2017</p>
            </div>`,
  styles: [`.footer{
              bottom:0;
              text-align: center;
              text-decoration: underline;
              margin: 10px 0 0;
              width:100%;
          }`]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
