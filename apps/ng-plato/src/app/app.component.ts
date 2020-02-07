import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@ranke/api-interfaces';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { YesNoService, yesNoValidator } from '@ranke/directives';

@Component({
  selector: 'ranke-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  formGroup: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder, private yestNoService: YesNoService) {
    this.formGroup = this.fb.group({
      yes: ['', [Validators.required]],
      no: ['']
    }, {asyncValidators: [yesNoValidator(this.yestNoService)]})
  }
}
