import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

export interface iTableItem {
  id: string | undefined;
  short_url: string;
  original_url: string;
  user_id: string;
  requests: number;
  unique_requests: number;
}

@Component({
  selector: 'app-overview-table',
  templateUrl: './overview-table.component.html',
  styleUrls: ['./overview-table.component.css'],
})
export class OverviewTableComponent {
  public urlTable: iTableItem[] = [];
  constructor(private http: HttpClient) {
    this.getData().subscribe((data: iTableItem[]) => {
      this.urlTable = data;
    });
  }

  getData(): Observable<iTableItem[]> {
    return this.http
      .get('http://127.0.0.1:8000/')
      .pipe(map((response: any) => response));
  }

  deleteItem(item: iTableItem): void {
    const url: String = 'http://127.0.0.1:8000/delete/' + item.id;
    console.log(url);
    this.http.delete(url.toString()).subscribe();
    window.location.reload();
  }
}
