import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Jot } from 'src/app/core/interfaces/jot.interface';
import { JotService } from 'src/app/core/services/jot.service';

@Component({
  selector: 'app-jotting',
  templateUrl: './jotting.component.html',
  styleUrls: ['./jotting.component.scss']
})
export class JottingComponent implements OnInit {

  public slug: string;
  public jot = {} as Jot;
  public componentIsLoading = true;

  constructor(private readonly jotService: JotService, private readonly activedRoute: ActivatedRoute, private readonly router: Router) {
    this.slug = this.activedRoute.snapshot.params.slug;
  }

  ngOnInit(): void {
    this.loadJot();
  }

  private async loadJot(): Promise<void> {
    const resp = await this.jotService.getJot(this.slug);

    if (resp.type === 'data') {
      this.jot = resp.data;
      this.componentIsLoading = false;
      console.log(this.jot);
    } else {
      if (resp.status === 404) {
        this.router.navigate(['/auth/404'], { replaceUrl: true });
      }
    }
    console.log(resp);
  }

}
