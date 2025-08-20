// Script to update the year on the footer, so it is always the current year.
const date = new Date()

const footer = document.querySelector('footer')

footer.innerHTML =
`
<div class="container">
    <div class="company-name-txt no-margin-txt">My Learning Journal</div>
    <p class="copyright-txt">Copyright ©${date.getFullYear()}</p>
</div>
`