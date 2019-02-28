import uuid from "uuid/v4";

declare global {
  namespace Express {
    interface Request{
      pictureData: PictureData
    }
  }
}

export class Picture{
  likes: number = 0;
  voters: votes[] = [];
  numberOfComments: number = 0;
  originalSrc: string;
  thumbnailSrc:string;
  constructor(public title:string, public uploadedBy: string, filename: string){
    this.originalSrc = `originals/${filename}`;
    this.thumbnailSrc = `thumbnails/${filename}`;
  }
}
interface votes {
  name: string;
  value: 1 | -1
}
export interface PictureData {
  originalSrc: string;
  thumbnailSrc: string;
  albumName: string;
  pictureTitle:string;
  username: string;
}

export interface Album{
  _id: string,
  numberOfPics: number,
  numberOfComments: number,
  picsSrc: Picture[]
}

export interface commentObject{
  text: string;
  commentId: string;
  commentAuthorUsername: string;
  likes: number;
  voters: string[]; //string of other usernames
}
export class Comment implements commentObject{
  voters = [];
  likes = 0;
  commentId: string;
  constructor( public text:string, public commentAuthorUsername: string ){
      this.commentId = uuid();
    }
}

export class CommentsDocument {
  _id: {albumName: string, pictureTitle: string};
  comments: commentObject[] = [];
  constructor( albumName:string, pictureTitle: string, public pictureUploadedBy: string, public originalSrc: string ){
    this._id = { albumName, pictureTitle };
  }
}