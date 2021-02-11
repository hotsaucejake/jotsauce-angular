import { Component, OnInit } from '@angular/core';
import { Jot } from 'src/app/core/interfaces/jot.interface';
import { User } from 'src/app/core/interfaces/user.interface';
import { JotService } from 'src/app/core/services/jot.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-jots',
  templateUrl: './jots.component.html',
  styleUrls: ['./jots.component.scss']
})
export class JotsComponent implements OnInit {

  public user: User;
  public jots = [] as Jot[];
  public componentIsLoading = true;

  constructor(private readonly jotService: JotService, private readonly userService: UserService) {
    this.user = {} as User;
  }


  public async ngOnInit(): Promise<void> {

    const resp = await this.userService.getCurrentUser();
    if (resp.type === 'data') {
      this.user = resp.data;
    }

    this.loadJots();
  }


  private async loadJots(): Promise<void> {
    const resp = await this.jotService.getJots();

    if (resp.type === 'data') {
      this.jots = resp.data;
      this.componentIsLoading = false;
      console.log(this.jots);
    }
  }

}
