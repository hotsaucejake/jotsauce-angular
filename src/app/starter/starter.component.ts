import { Component, OnInit } from '@angular/core';
import { Jot } from '../core/interfaces/jot.interface';
import { User } from '../core/interfaces/user.interface';
import { JotService } from '../core/services/jot.service';
import { UserService } from '../core/services/user.service';
@Component({
  templateUrl: './starter.component.html'
})
export class StarterComponent implements OnInit {

  public subtitle: string;

  public user: User;
  public jots = [] as Jot[];

  constructor(private readonly jotService: JotService, private readonly userService: UserService) {
    this.user = {} as User;
    this.subtitle = 'This is some text within a card block.';
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
      console.log(resp);
      this.jots = resp.data;
      console.log(this.jots);
    }
  }
}
