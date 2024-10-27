import mongoose from "mongoose"

const newsSchema = new mongoose.Schema({
  headline: String,
  writer: String,
  date: Date,
  image: String,
  content: String,
  contentType: String

},{timestamps: true});


 const News = mongoose.model("News",newsSchema);

 export default News;