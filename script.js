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
    ,
    "projects": `<h2>projects</h2>
    <p>Here are some of my recent projects:</p>
    <ul>
        <li><a href="#">Project 1</a>: A responsive portfolio website built with React.</li>
        <li><a href="#">Project 2</a>: An e-commerce site developed using Node.js and Express.</li>
        <li><a href="#">Project 3</a>: A mobile app created with Flutter.</li>
    </ul>`
    ,
    "contact": `<h2>contact</h2>
    <p>You can reach me at:</p>
    <ul>
        <li>Email: <a href="mailto:catherine@example.com">catherine@example.com</a></li>
    </ul>`
};

//whoosh open overlay when a tab is clicked
const overlay = document.getElementById("tab-overlay");
const overlayContent = document.getElementById("tab-overlay-content");
const overlayClose = document.getElementById("tab-overlay-close");

document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", () => {
        const rect = tab.getBoundingClientRect();
        overlay.style.setProperty("--origin-x", `${rect.left + rect.width / 2}px`);
        overlay.style.setProperty("--origin-y", `${rect.top + rect.height / 2}px`);

        const id = tab.dataset.tab;
        overlayContent.innerHTML = TAB_CONTENT[id] ?? `<h2>${id}</h2>`;
        overlayContent.scrollTop = 0;

        overlay.classList.add("open");
        overlay.setAttribute("aria-hidden", "false");
    });
});

// whoosh close overlay when the close button is clicked
overlayClose.addEventListener("click", () => {
    overlay.classList.remove("open");
    overlay.setAttribute("aria-hidden", "true");
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("open")) {
        overlay.classList.remove("open");
        overlay.setAttribute("aria-hidden", "true");
    }
});