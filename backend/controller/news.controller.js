import News from "../model/news.model.js";

export const getNews = async( req,res)=>{
try {
    const news = await News.find();
    res.status(200).json(news);  
} catch (error) {
    console.error("Error : ",error); 
    res.status(500).json(error);
}
};