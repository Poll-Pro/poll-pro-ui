import { Injectable } from '@angular/core';
import { PollDetailsDto } from '../dtos/poll-dto';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor(
  ){}

  getPollDetails(): Observable<PollDetailsDto> {

    const poll: PollDetailsDto = {
      name: 'Dummy Poll Name',
      items: [
        {
          id: "550e8400-e29b-41d4-a716-446655440000",
          name: 'Test Item 1'
        },
        {
          id: "e89209bf-4dc4-4969-a0e6-01a4122c18c8",
          name: 'Test Item 2'
        },
        {
          id: "5bd90a8a-3d17-47ba-8408-ffa1d6f0c55b",
          name: 'Test Item 3'
        }
      ],
      startDate: new Date('2023-06-13')
    };

    return of(poll);
  }
}
