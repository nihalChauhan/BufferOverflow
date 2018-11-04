import { IAuthor } from './author.Model';

export interface IQuestion {
    id: string;
    title: string;
    description: string;
    answerCount: number;
    createdAt: Date;
    updatedAt: Date;
    tags: string[];
    images: string[];
    author: IAuthor;
}
