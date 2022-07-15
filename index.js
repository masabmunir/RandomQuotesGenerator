let realData = "";

let text = document.getElementById('text');
let author = document.getElementById('author');
let RanQuotes = document.getElementById('RanQuotes');

const RandQuotes = ()=>{
    let rnum = Math.floor(Math.random()* 20)
    quotesdata = realData[rnum];
    text.innerText=`${quotesdata.text}`
    //author.innerText = `${quotesdata.author}`
    quotesdata.author==null
    ?(author.innerText =  "unknow")
    :(author.innerText = `${quotesdata.author}`)
}

const getQuotes = async()=>{
    let apidata = 'https://type.fit/api/quotes';
    try {
        let data = await fetch (apidata)
        realData = await data.json()
        RandQuotes()
        //console.log(realData[0].text)
    } catch (error) {
        
    }

}

RanQuotes.addEventListener("click",getQuotes);

getQuotes()