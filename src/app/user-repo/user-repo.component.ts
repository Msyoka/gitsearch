import { Component, OnInit } from '@angular/core';
import { RepoService } from './../repos.service';
import { Repos } from './../mod/repos';

@Component({
  selector: 'app-user-repo',
  templateUrl: './user-repo.component.html',
  styleUrls: ['./user-repo.component.css']
})
export class UserRepoComponent implements OnInit {

  private _repo: Repos[] | undefined;
  public get repo(): Repos[] | undefined {
    return this._repo;
  }
  public set repo(value: Repos[] | undefined) {
    this._repo = value;
  }

  constructor(public repoService: RepoService) { }

  getRepo(searchTerm: string) {
    this.repoService.getRepo(searchTerm).subscribe((data: any[]) => {
      this.repo = data;
      console.log(this.repo);
    })
  }

  ngOnInit(): void {
    this.getRepo('Msyoka');
  }


}
