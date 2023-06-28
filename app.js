// 19958a62a3204432900904ad59bd8630

let sources = 'the-times-of-india';
let apikey = '19958a62a3204432900904ad59bd8630';
// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

const xhr = new XMLHttpRequest();

xhr.open('GET',`https://newsapi.org/v2/top-headlines?sources=${sources}&apiKey=${apikey}`,true);

xhr.onload = function (){
    if(this.status === 200){
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
        let news = `<div class="accordion-item">
                    <h2 class="accordion-header" id="heading${index}">
                <button class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapseOne">
 <span class="red">Breaking News ${index +1}-</span><b>${element["title"]}</b>
                </button>
              </h2>
              <div id="collapse${index}" class="accordion-collapse collapse collapsed" aria-labelledby="heading${index}" data-bs-parent="newsAccordion">
                <div class="accordion-body">
                 ${element["description"]} ${element["content"]} .<a href="${element['url']}" target="_blank">Read more here</a>
                </div>
              </div>
</div>`
    newsHtml += news ;
});
    newsAccordion.innerHTML = newsHtml;
        
    }
    else{
        console.log('error');
    }
}
xhr.send();
