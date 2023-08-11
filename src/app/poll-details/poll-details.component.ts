import { Component, Input, OnInit } from '@angular/core';
import { PollDetails } from '../models/poll-details';
import { PollService } from '../services/poll-service';

@Component({
  selector: 'app-poll-details',
  templateUrl: './poll-details.component.html',
  styleUrls: ['./poll-details.component.scss']
})
export class PollDetailsComponent implements OnInit {
  public poll?: PollDetails;

  constructor(private pollService: PollService) {}

  ngOnInit(): void {
    this.pollService.getPollDetails().subscribe((data: PollDetails) => {
      this.poll = data;
    });
  }
}
