import { Component } from '@angular/core';
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
export class AppComponent {
  title = 'angular-markmap';
  constructor(private http: HttpClient) {
    this.doMarkMap();
  }

  async doMarkMap() {
    var markdownUrl = '/assets/node.md';
    var markdown = await this.http.get(markdownUrl, { responseType : 'text'}).toPromise();

    const transformer = new Transformer();
    const { root, features } = transformer.transform(markdown);
    
    Markmap.create('#markmap', null, root);
  }
}
