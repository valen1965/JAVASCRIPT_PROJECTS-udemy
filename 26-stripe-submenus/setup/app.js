import subLinks from "./data.js";
import get from "./modules/getElement.js";

const toggleBtn = get(".toggle-btn");
const closeBtn = get(".close-btn");
const sidebarWrapper = get(".sidebar-wrapper");
const sidebar = get(".sidebar-links");
const linkBtns = [...document.querySelectorAll(".link-btn")];
const submenu = get(".submenu");
const hero = get(".hero");
const nav = get(".nav");

toggleBtn.addEventListener("click", () => {
  sidebarWrapper.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  sidebarWrapper.classList.remove("show");
});

// set sidebar
sidebar.innerHTML = subLinks
  .map((item) => {
    const { links, page } = item;
    return `<article>
    <h4>${page}</h4>
    <div class="sidebar-sublinks">
    ${links
      .map((link) => {
        const { label, icon, url } = link;
        return `<a href="${url}">
        <i class="${icon}"></i>${label}</a>`;
      })
      .join("")}
    </div> 
    </article>`;
  })
  .join("");

linkBtns.forEach((btn) => {
  btn.addEventListener("mouseover", function (e) {
    const text = e.currentTarget.textContent;
    const tempBtn = e.currentTarget.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 5;

    const tempPage = subLinks.find(({ page }) => page === text);
    if (tempPage) {
      const { page, links } = tempPage;
      submenu.classList.add("show");
      submenu.style.left = `${center}px`;
      submenu.style.top = `${bottom}px`;
      const col = links.length;
      submenu.innerHTML = `
      <section>
      <h4>${page}</h4>
      <div class="submenu-center col-${col}">
${links
  .map((link) => {
    return `<a href="${link.url}">
        <i class="${link.icon}"></i>${link.label}
        </a>`;
  })
  .join("")}
      </div>
      </section>
      `;
    }
  });
});

hero.addEventListener("mouseover", function (e) {
  submenu.classList.remove("show");
});

nav.addEventListener("mouseover", function (e) {
  if (!e.target.classList.contains("link-btn")) {
    submenu.classList.remove("show");
  }
});
