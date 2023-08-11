import { PollItemDto } from "../dtos/poll-item-dto";

export class PollDetails {
    constructor(
      public name: string,
      public items: Array<PollItemDto>,
      public startDate: Date
    ) { }
  }