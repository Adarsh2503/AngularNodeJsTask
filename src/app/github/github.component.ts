import { Component, OnInit } from "@angular/core";
import { GithubService } from "../github-services/github.service";

@Component({
  selector: "app-github",
  templateUrl: "./github.component.html",
  styleUrls: ["./github.component.css"],
  providers: [GithubService]
})
export class GithubComponent implements OnInit {
  user: any[];
  repos: any[];
  userName: string;
  alluser: any[];
  selectedUser: any[];

  constructor(private githubService: GithubService) {
    this.githubService.getUser().subscribe(user => {
      this.user = user;
    });

    this.githubService.getAllUser().subscribe(alluser => {
      this.alluser = alluser;
      console.log("all user", alluser);
    });

    this.githubService.getRepos().subscribe(repos => {
      this.repos = repos;
    });
  }

  UserClicked() {
    this.selectedUser = this.alluser;
    console.log(this.selectedUser);
  }

  findProfile() {
    this.githubService.updateUser(this.userName);

    this.githubService.getUser().subscribe(user => {
      this.user = user;
    });

    this.githubService.getRepos().subscribe(repos => {
      this.repos = repos;
    });
  }

  ngOnInit() {}
}
