const newsCategory = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch(url);
    const data = await res.json();
    displayCategories(data.data.news_category
    )

};
const displayCategories = categories => {
    const categoriesContainer = document.getElementById('categories-container');
    categories.forEach(category => {

        const categoriesDiv = document.createElement('div');
        // categoriesDiv.classList.add('')
        categoriesDiv.innerHTML = `
        <a class="navbar-brand" href="#">${category.category_name
            }</a>
        `;
        categoriesContainer.appendChild(categoriesDiv);
    });

};
newsCategory()


const newsPost = async () => {
    const url = `https://openapi.programming-hero.com/api/news/category/01`;
    const res = await fetch(url);
    const postData = await res.json();
    displayNews(postData.data);
};

const displayNews = cardPosts => {
    const displayPost = document.getElementById('display-news-post');
    cardPosts.forEach(cardPost => {
        console.log(cardPost)
        const displayPostDiv = document.createElement('div');
        //    displayPostDiv.classList.add('')
        displayPostDiv.innerHTML = `
        <div class="card mb-3">
  <div class="row g-0">
    <div class="col-3">
      <img src="${cardPost.thumbnail_url}" class="img-fluid rounded-start p-3" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${cardPost.title}</h5>
        <p class="card-text">${cardPost.details}</p>

        <div class="d-flex">
        <div>
        <img class="author-img rounded-circle" src="${cardPost.author.img}" alt="">
        </div>
        <div class="ms-3 ">
        <p class="fw-bold pt-3">${cardPost.author.name}</p>
        <p>${cardPost.author.published_date}</p>
        </div>
        </div>

      </div>
    </div>
  </div>
</div>
      
      `;
        displayPost.appendChild(displayPostDiv);
    });


};

newsPost()