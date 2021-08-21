import { Component, OnInit } from '@angular/core';
import { FormElement } from 'src/app/core/interfaces/form-element.interface';
import { FormElementService } from 'src/app/core/services/form-element.service';

@Component({
  selector: 'app-jot-create',
  templateUrl: './jot-create.component.html',
  styleUrls: ['./jot-create.component.scss']
})
export class JotCreateComponent implements OnInit {

  public formElements = [] as FormElement[];
  public componentIsLoading = true;

  constructor(private readonly formElementService: FormElementService) { }

  public async ngOnInit(): Promise<void> {
    this.loadFormElements();
  }

  private async loadFormElements(): Promise<void> {
    const resp = await this.formElementService.getFormElements();

    console.log(resp);

    if (resp.type === 'data') {
      this.formElements = resp.data;
      this.componentIsLoading = false;
    }

  }

}
