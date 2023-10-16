// this is code to display the news content(from newsapi) on the browser using Callback functions

const api = "https://newsapi.org/v2/top-headlines?country=us&apiKey=44eca781d6fb4e2da8fd8e7969b3b375";


function getNews(api, callback) {
    fetch(api)
        .then(response => response.json())
        .then(data => callback(data))
        .catch(err => console.log(err))
}

// Note that I am using the template literal to display the news content on the browser
// I am using the tailwindcss framework to style the news content
function callback(data){
    console.log(data);
    let news = data.articles;
    let output = `
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    `;
    news.forEach(news => {
        output += `
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="${news.urlToImage}" class="w-full h-48 object-cover rounded-t-lg" alt="...">
                <div class="p-6">
                    <h5 class="text-lg font-bold mb-2">${news.title}</h5>
                    <p class="text-gray-700 text-base">${news.description}</p>
                    <a href="${news.url}" class="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Read More</a>
                </div>
            </div>
        `;
    });
    output += `
            </div>
        </div>
    `;
    document.getElementById("template").innerHTML = output;
}

getNews(api, callback);