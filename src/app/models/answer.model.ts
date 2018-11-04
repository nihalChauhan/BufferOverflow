import { IAuthor } from './author.model';

export interface IAnswer {
    id: string;
    author: IAuthor;
    questionID: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    upCount: number;
    downCount: number;
    upVoted: boolean;
    downVoted: boolean;
}
