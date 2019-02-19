import {getCollectionFactory} from "./sharedDB";
import {Picture, PictureData, Album} from "../server/customTypes";
let getCollection = getCollectionFactory("albums");

export function addNewPictures(albumName:string, pictureArray:Picture[]) {
  const updateObject = { $inc: {numberOfPics: pictureArray.length}, $push: {picsSrc: {$each: pictureArray}}, $setOnInsert: { numberOfComments: 0 }};

  return getCollection()
         .then(coll => coll.updateOne({_id: albumName}, updateObject, {upsert: true}))
}

const projectionObject = { picsSrc: {$slice: -4} };
export function geAllAlbums():Promise<Album[]> {
  return getCollection()
         .then(coll => coll.find({},{projection: projectionObject}))
         .then(cursor => cursor.toArray())
}
