const newsCategory = async () => {
  const url = `https://openapi.programming-hero.com/api/news/categories`
  try {
    const res = await fetch(url);
    const data = await res.json();
    displayCategories(data.data.news_category
    );
  }
  catch (error) {
    console.log(error);
  }

};
const displayCategories = (categories) => {
  const categoriesContainer = document.getElementById('categories-container');

  categories.forEach(category => {

    const categoriesDiv = document.createElement('div');

    // categoriesDiv.classList.add('')
    categoriesDiv.innerHTML = `
        <a onclick="newsPost('${category.category_id}')" class="navbar-brand categories-hovers" href="#">${category.category_name}</a>
        `;
    categoriesContainer.appendChild(categoriesDiv);

  });
}

newsCategory()


const newsPost = async (eachPost) => {
  loader(true)
  const url = `https://openapi.programming-hero.com/api/news/category/${eachPost}`;

  try {
    const res = await fetch(url);
    const postData = await res.json();

    displayNews(postData.data);
  }
  catch (error) {
    console.log(error);
  }
};

const displayNews = cardPosts => {
  const displayPost = document.getElementById('display-news-post');

  displayPost.textContent = "";
  cardPosts.forEach(cardPost => {
    const displayPostDiv = document.createElement('div');
    displayPostDiv.innerHTML = `
        <div myPost() class="card mb-3 shadow">
  <div class="row g-0">
    <div class="col-3">
      <img src="${cardPost.thumbnail_url}" class="img-fluid card-img shadow rounded-start p-3 " alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body ">
        <h5 class="card-title">${cardPost.title}</h5>
        <p class="card-text">${cardPost.details.slice(0, 600)}</p>

        <div class="d-flex justify-content-between">

        <div class="d-flex">
        <div>
        <img class="author-img rounded-circle" src="${cardPost.author.img ? cardPost.author.img : 'Not'}" alt="">
        </div>
        <div class="ms-3">
        <p class="fw-bold ">${cardPost.author.name ? cardPost.author.name : 'No name'}</p>
        <p>${cardPost.author.published_date ? cardPost.author.published_date : 'No date info'}</p>
        </div>
        </div>

        <div>
        <p class="fw-semibold"><i class="fa-regular fa-eye"></i> ${cardPost.total_view ? cardPost.total_view : 'no views'}</p>
        </div>


        <div>
        <p> <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>

        </div>


        <div>
        <a type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i class="fa-solid fa-arrow-right"></i> </a>
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
                            <img class="img-fluid card-img" src="${cardPost.image_url}" alt="">
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
</div>`;
    displayPost.appendChild(displayPostDiv);
  });
  const PostFound = document.getElementById('post-found')
  for (let i = 0; i < cardPosts.length; i++) {
    PostFound.value = (i + 1) + ' ' + 'items found for category'
  }
  loader(false)
};
const loader = isLoading => {
  const loadContainer = document.getElementById('loadContainer');
  if (isLoading) {
    loadContainer.classList.remove('d-none')
  }
  else {
    loadContainer.classList.add('d-none')
  }
}
