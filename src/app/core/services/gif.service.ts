import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gif.interface';

@Injectable({
  providedIn: 'root',
})
export class GifService {

  private key: string = 'Mp6g2L29ph02z9OMhzdENGLAFkUezjY2'; // MI API KEY
  private apiGiphy: string = 'https://api.giphy.com/v1/gifs';

  public gifList: Gif[] = [];
  private _tagsHistory: string[] = [];

  constructor(private httpClient: HttpClient) {
    this.loadLocalStorage();
  }

  private saveLocalStorage() {
    localStorage.setItem('historial', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage() {
    if (!localStorage.getItem('historial')) return;
    this._tagsHistory = JSON.parse(localStorage.getItem('historial')!);

    if (this._tagsHistory.length === 0) return;
    this.searchTag(this._tagsHistory[0]);
  }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this.tagsHistory.splice(0, 10);
    this.saveLocalStorage();
  }

  public searchTag(tag: string) {
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.key)
      .set('limit', '20')
      .set('q', tag);

    this.httpClient
      .get<SearchResponse>(`${this.apiGiphy}/search`, { params })
      .subscribe((resp) => {
        this.gifList = resp.data;
      });
  }
}
