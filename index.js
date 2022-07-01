const cheerio = require('cheerio');
const request = require('request-promise');
const fs = require('fs-extra');

    const writeStream = fs.createWriteStream('data.csv');

   async function init (){
        const $ =  await  request({
            uri: 'https://www.eluniversal.com.mx/estados',
            transform: body => cheerio.load(body),

        });

        writeStream.write('Estado|Mundo|Tags\n');
        $('.ce3-Tipo3').each((i, el) => {
            const news = $(el).find('p').text();
            console.log(news);
            const tags = [];
            $(el).find('.tags a.tag').each((i, el) => tags.push($(el).text()));
            writeStream.write(`${news}}|${tags}\n`);

        })
        $('.ce3-Tipo1').each((i, el)=>{
            const titlenews = $(el).find('p').text();
            console.log(titlenews);
        })
    }
    init();