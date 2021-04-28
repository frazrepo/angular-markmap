import { Component, OnInit } from '@angular/core';
import {
  Transformer, fillTemplate,
} from 'markmap-lib';
import { Markmap } from 'markmap-view';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-markmap';
  constructor(private http: HttpClient) {
  }
  ngOnInit() {
    // do not put in constructor, put in angular lifecycle
    this.doMarkMap();
  }

  doMarkMap() {
    // Load from URL
    // var markdownUrl = '/assets/node.md';
    // var markdown = await this.http.get(markdownUrl, { responseType : 'text'}).toPromise();

    //Load from string : do not pu leading spaces
    var markdown:string = `
# Node
## Title 0
- SubTitle
- SubTitle
- SubTitle
## Title 1
## Title 2
## Title 3
## Title 4
## Title 5
## Title 6
## Title 7
## Title 8
## Title 9
      `;

    const transformer = new Transformer();
    const { root, features } = transformer.transform(markdown);
    
    Markmap.create('#markmap', undefined, root);
  }
}
