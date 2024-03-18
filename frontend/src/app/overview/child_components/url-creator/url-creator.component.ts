import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface iShortenedRequestItem {
  original_url: string;
  user_id: string;
}

@Component({
  selector: 'app-url-creator',
  templateUrl: './url-creator.component.html',
  styleUrls: ['./url-creator.component.css'],
})
export class UrlCreatorComponent {
  public requestItem: iShortenedRequestItem;
  constructor(private http: HttpClient) {
    this.requestItem = { original_url: '', user_id: '' };
  }

  createUrl(longUrl: string): void {
    const new_item: iShortenedRequestItem = {
      original_url: longUrl,
      user_id: 'unauthorized',
    };
    this.http.post('http://127.0.0.1:8000/add/', new_item).subscribe();
    window.location.reload();
  }
}
