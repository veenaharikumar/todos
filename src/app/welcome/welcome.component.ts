import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name = ''
  welcomeMessageFromService: string;

  constructor(private route: ActivatedRoute,
    private welcomeDataService: WelcomeDataService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    console.log(this.welcomeDataService.executeHelloWorldBeanService());
    this.welcomeDataService.executeHelloWorldBeanService().subscribe(
      response => this.handleSUccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  getWelcomeMessageWithParameter() {
    this.welcomeDataService.executeHelloWorldWithPathVariable(this.name).subscribe(
      response => this.handleSUccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  handleSUccessfulResponse(response) {
    this.welcomeMessageFromService = response.name;
  }

  handleErrorResponse(error){
    this.welcomeMessageFromService = error.error.message;
  }

}
