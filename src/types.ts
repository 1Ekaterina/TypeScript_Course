import {Author} from "./author";

export enum Genre {
  Fantasy,
  Adventure,
  Horror
}

export type Review = [string, number, string]


// остальной код без изменений
export type BookAuthor = Pick<Author, 'firstName' | 'lastName'>
