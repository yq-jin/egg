// trigger the tab roll in animation when page 2 comes into view
const tabsPage = document.getElementById("page-tabs");
const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      tabsPage.classList.add("active");
    } else {
    // reset so the animation replays if the user scrolls back up then down
      tabsPage.classList.remove("active");
    }
  }
}, {
  threshold: 0.5,
});
observer.observe(tabsPage);
``
const TAB_CONTENT = {
    "about me": `<h2>about me</h2>
    <p>I'm a web developer with a passion for creating beautiful and functional websites. I have experience in HTML, CSS, JavaScript, and various frameworks. I love learning new technologies and improving my skills.</p>`
}