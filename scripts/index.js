// Take control of elements.
const viewMoreBtn = document.getElementById('view-more-btn')

// Define desktop mode
const desktop = window.matchMedia('(width >= 1085px)')


// Check the current viewport width to adjust accordingly
screenWidthUpdates(desktop)

// Call hideViewMoreBtn function on page load to hide the corresponding button
// if there are no more articles to display.
hideViewMoreBtn()

// Media Query
desktop.addListener(screenWidthUpdates)

function screenWidthUpdates(e){
    if(e.matches){
        showNumBlogPosts(6)
    }

    else{
        showNumBlogPosts(3)
    }
}

function showNumBlogPosts(number){
    const blogPosts = document.querySelectorAll('.blog-posts-grid > a')

    blogPosts.forEach((blogPost, i)=>{
        if(i < number && blogPost.classList.contains('hide-blog-post')){
            blogPost.classList.remove('hide-blog-post')
        }

        else if(i >= number && !blogPost.classList.contains('hide-blog-post')){
            blogPost.classList.add('hide-blog-post')
        }
    })

    hideViewMoreBtn()
}

viewMoreBtn.addEventListener('click', ()=>{
    const hiddenBlogPosts = document.querySelectorAll('.hide-blog-post')

    for(let i=0; i<3; i++){
        if(hiddenBlogPosts[i]){
            hiddenBlogPosts[i].classList.remove('hide-blog-post')
        }

        else{
            break
        }
    }

    hideViewMoreBtn()
})


// Function to hide the button with the text View More if there are no more
// articles that are hidden.
function hideViewMoreBtn(){
    const hiddenBlogPosts = document.querySelectorAll('.hide-blog-post')

    if(hiddenBlogPosts.length === 0){
        viewMoreBtn.style.display = 'none'
    }

    else{
        viewMoreBtn.style.display = 'block'
    }
}