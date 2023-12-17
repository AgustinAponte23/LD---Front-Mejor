import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleDriveService {

  private clientId: string = '304421847790-fj1ma70nvjqvgpbdopsmffnhhtlp26dn.apps.googleusercontent.com';
  user:any;

  /*constructor(private gapiService: GoogleDriveService) {
    this.user = gapi.load('client:auth2', () => {
      gapi.client.init({
        clientId: this.clientId,
        scope: 'https://www.googleapis.com/auth/drive.file',
      });
    });
  }

  authenticate():any {
    return gapi.auth.signIn(this.user);
  }



  uploadFile(file: File): Promise<any> {
    debugger
    const metadata = {
      name: file.name,
      mimeType: file.type,
    };

    const form = new FormData();
    form.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
    form.append('file', file);

    return this.gapiService.uploadFile(file).finally();
  }*/
}
