import { Component, OnInit } from '@angular/core';
import { ReposService } from './../repos.service';
import { Repos } from './../mod/repos';

@Component({
  selector: 'app-user-repo',
  templateUrl: './user-repo.component.html',
  styleUrls: ['./user-repo.component.css']
})
export class UserRepoComponent implements OnInit {

  repos!: Repos[];

  constructor(public reposService: ReposService) { }

  getRepo(searchTerm: string) {
    this.reposService.getRepo(searchTerm).subscribe((data: any[]) => {
      this.repos = data;
      console.log(this.repos);
    })
  }

  ngOnInit(): void {
    this.getRepo('Msyoka');
  }


}
