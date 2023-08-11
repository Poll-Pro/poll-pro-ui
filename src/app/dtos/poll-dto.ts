import { PollItemDto } from "./poll-item-dto";

export interface PollDetailsDto {
    name: string;
    items: Array<PollItemDto>;
    startDate: Date
}