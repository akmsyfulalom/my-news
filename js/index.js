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
    console.log(category)
    const categoriesDiv = document.createElement('div');

    // categoriesDiv.classList.add('')
    categoriesDiv.innerHTML = `
        <a onclick="myPost()" class="navbar-brand" href="#">${category.category_name
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
        <div myPost() class="card mb-3">
  <div class="row g-0">
    <div class="col-3">
      <img src="${cardPost.thumbnail_url}" class="img-fluid rounded-start p-3" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${cardPost.title}</h5>
        <p class="card-text">${cardPost.details}</p>

        <div class="d-flex justify-content-between">

        <div class="d-flex">
        <div>
        <img class="author-img rounded-circle" src="${cardPost.author.img}" alt="">
        </div>
        <div class="ms-3">
        <p class="fw-bold ">${cardPost.author.name}</p>
        <p>${cardPost.author.published_date}</p>
        </div>
        </div>

        <div>
        <p class="fw-semibold"><i class="fa-regular fa-eye"></i> ${cardPost.total_view}</p>
        </div>


        <div>
        <p> <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>

        </div>


        <div>
        <a type="button" class="register-btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i class="fa-solid fa-arrow-right"></i> </a>
        </div>
        <div>
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                    tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header  d-block">
                                <h5 class="modal-title" id="staticBackdropLabel">${cardPost.title}
                                </h5>
                                
                                
                            </div>
                            <div class="modal-body">
                            <img class="img-fluid " src="${cardPost.image_url}" alt="">
                            <p>${cardPost.details}</p>
                                
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
				 </div>
           
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