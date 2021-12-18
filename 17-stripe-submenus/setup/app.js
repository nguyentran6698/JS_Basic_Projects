import sublinks from "./data.js";

const toggleBtn = document.querySelector(".toggle-btn");
const closeBtn = document.querySelector(".close-btn");
const sidebarWrapper = document.querySelector(".sidebar-wrapper");
const sidebar = document.querySelector(".sidebar-links");

const linkBtns = [...document.querySelectorAll(".link-btn")];
const subMenu = document.querySelector(".submenu");
const nav = document.querySelector(".nav");
const hero = document.querySelector(".hero");
// hide/shpw sidebar

toggleBtn.addEventListener("click", () => {
  sidebarWrapper.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  sidebarWrapper.classList.remove("show");
});

sidebar.innerHTML = sublinks
  .map((item) => {
    const { links, page } = item;
    return `<article >
<h4>${page}</h4>
<div class="sidebar-sublinks">
${links
  .map((link) => {
    return `<a href="${link.url}"><i class="${link.icon}"></i>${link.label}</a>`;
  })
  .join("")}
</div>
</article>`;
  })
  .join("");

linkBtns.forEach((btn) => {
  btn.addEventListener("mouseover", function (e) {
    // get position of the button
    const text = e.currentTarget.textContent;
    const tempBtn = e.currentTarget.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    const tempPage = sublinks.find(({ page }) => page === text);
    if (tempPage) {
      const { page, links } = tempPage;
      subMenu.classList.add("show");
      subMenu.style.left = `${center}px`;
      subMenu.style.top = `${bottom}px`;
      let columns = "col-2";
      if (links.length === 3) {
        columns = "col-3";
      }
      if (links.length > 3) {
        columns = "col-4";
      }
      subMenu.innerHTML = `
        <section>
        <h4>${page}</h4>
        <div class="submenu-center ${columns}">
        ${links
          .map((link) => {
            return `<a href="${link.url}"> <i class="${link.icon}"></i> ${link.label}</a>`;
          })
          .join("")}
        
        </div>
        </section>
        `;
    }

    // get the middle by (left + right) / 2
  });
});
hero.addEventListener("mouseover", function (e) {
  subMenu.classList.remove("show");
});
nav.addEventListener("mouseover", function (e) {
  if (!e.target.classList.contains("link-btn"))
    subMenu.classList.remove("show");
});
