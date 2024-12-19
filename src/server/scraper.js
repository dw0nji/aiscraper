import dotenv from 'dotenv';
import axios from 'axios';
import { load } from 'cheerio';
import OpenAI from "openai";
dotenv.config();



const openai = new OpenAI({
    apiKey: process.env['OPENAI_API_KEY']
});

//const fs = require("fs");
class Scraper{


    constructor(url){
        this.url = url;

    }

    async scrapeURL(){
        console.log("scraping url");
        try{

            const {data} = await axios.get(this.url);
            console.log("scraped with axios on proxy server!");

            const $ = load(data);

            const listItems = $("p");

            this.texts = listItems.map((idx, el) => $(el).text()).get().toString(); // Get an array of texts
            //this.texts = this.checkLength(this.texts);
            console.log(this.texts);
            return;

        }catch(err){
            console.error(err);
            return;
        }

    }
    async processAI(){
        if(this.texts.length > 0){
            console.log("sent to ai model");
            try{
            const completion = await openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: [
                  {
                    "role": "system",
                    "content": [
                      {
                        "type": "text",
                        "text": "You help find information for cover letters and you are given the job description page of a company, identify key words from website that would be good in a cover letter and don't add your own, make a list of these keywords. Additionally give some advice about the company they are applying for but don't make a cover letter."
                      }
                    ]
                  },
                  {
                    "role": "user",
                    "content": [
                      {
                        "type": "text",
                        "text": this.texts
                      }
                    ]
                  }
                ]
              });
              console.log(completion.choices[0].message.content);
              console.log("finished with ai");
              return completion.choices[0].message.content;
            }catch(err){
                console.log(err);
            }
            
            

        }else{
            console.log("scrape a url first");
            return null;
        }
        

    
    }
    checkLength(text){
        if(text.length > 750){
            text = this.cutData(text); 
        }
        return text;
    }
    cutData(text){
        console.log("length exceeded");
        return text;
    }


}
export default Scraper;