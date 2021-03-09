import { Component, OnInit } from '@angular/core';
import { Jot } from 'src/app/core/interfaces/jot.interface';
import { JotService } from 'src/app/core/services/jot.service';

@Component({
  selector: 'app-jots',
  templateUrl: './jots.component.html',
  styleUrls: ['./jots.component.scss']
})
export class JotsComponent implements OnInit {

  public jots = [] as Jot[];
  public componentIsLoading = true;

  constructor(private readonly jotService: JotService) {
  }


  public async ngOnInit(): Promise<void> {
    this.loadJots();
  }


  private async loadJots(): Promise<void> {
    const resp = await this.jotService.getJots();

    if (resp.type === 'data') {
      this.jots = resp.data;
      this.componentIsLoading = false;
    }

  }

}
