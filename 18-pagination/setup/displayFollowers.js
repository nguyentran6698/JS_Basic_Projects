const container = document.querySelector(".container");

const displayFollowers = (people) => {
  container.innerHTML = people
    .map((person) => {
      const { login, avatar_url: img, html_url } = person;
      return `
     <article class='card'>
         <img src="${img}" alt='person' />
           <h4>${login}</h4>
         <a href="${html_url}" class="btn">view profile</a>
       </article>
    `;
    })
    .join("");
};

export default displayFollowers;
