const developerData = [
  {
    image: 'https://imgix.ranker.com/user_node_img/77/1528625/original/mark-zuckerberg-all-people-photo-u11?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&bg=fff&h=333&w=333',
    name: 'Mark Elliot Zuckerberg',
    position: 'is an American technology entrepreneur',
    description: ' He also co-founded and is a board member of the solar sail spacecraft ',
  },
  {
    image: 'https://imgix.ranker.com/user_node_img/30/585095/original/bill-gates-recording-artists-and-groups-photo-u40?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&bg=fff&h=333&w=333',
    name: 'Bill Gates',
    position: 'William Henry Gates III (born October 28, 1955) is an American',
    description: 'He is best known as the principal founder of Microsoft Corporation. Durin',
  },
  {
    image: 'https://imgix.ranker.com/user_node_img/71/1413360/original/larry-ellison-photo-u5?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&bg=fff&h=333&w=333',
    name: 'Larry Ellison',
    position: 'is an American businessman, entrepreneur, and philanthropist who is',
    description: 'which later became the worlds largest information technology company by',
  },
  {
    image: 'https://imgix.ranker.com/user_node_img/105/2098603/original/steve-wozniak-photo-u8?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&bg=fff&h=333&w=333',
    name: 'Steve Wozniak',
    position: 'is an American inventor, electronics engineer, programmer, philanthropist,',
    description: 'Notable Family Members: son of Edward Zuckerberg son of Karen Kempner',
  },
  {
    image: 'https://imgix.ranker.com/user_node_img/71/1413781/original/larry-page-photo-u10?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&bg=fff&h=333&w=333',
    name: 'Larry Page',
    position: 'is an American computer scientist and Internet entrepreneur who co-founded',
    description: 'After stepping aside as Google CEO in August 2001, in favor of Eric Schmidt',
  },
  {
    image: 'https://imgix.ranker.com/node_img/73/1452170/original/linus-torvalds-writers-photo-1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&bg=fff&h=333&w=333',
    name: 'Linus Torvalds',
    position: 'is a Finnish-American software engineer who is the creator and, his',
    description: 'He also created the distributed version control system Git and the scuba',
  }
];

function topDeveloper() {
  const heading = document.createElement('h2');
  heading.innerHTML = 'Top Developer';
  heading.className = 'top-developer'
  const horzintalLine = document.createElement('hr');
  horzintalLine.className = ('developer-line');
  const developerSection = document.querySelector('.developer');
  developerSection.appendChild(heading);
  developerSection.appendChild(horzintalLine);
  const contentDiv = document.createElement('div');
  contentDiv.className = 'main-div';

  for (let i = 0; i < developerData.length; i += 1) {
    const cardDiv = document.createElement('div')
    cardDiv.className = 'developer-card';
    cardDiv.classList.add('flex-item');
    const devImage = document.createElement('img');
    devImage.className = 'dev-image';
    const devInfo = document.createElement('div');
    devInfo.className = 'dev-info';
    const devName = document.createElement('h3');
    devName.className = 'dev-name';
    const devPosition = document.createElement('small');
    devPosition.className = 'dev-position';
    const lineBreak = document.createElement('br');
    const devLine = document.createElement('hr');
    devLine.className = 'hr-line';
    const devDescription = document.createElement('p');
    devDescription.className = 'dev-description';

    if (window.innerWidth < 768) {
      if (i > 1) {
        cardDiv.classList.add('hide-show-more');
      }
    }
  
    devImage.src = `${developerData[i].image}`;
    devName.innerHTML = `${developerData[i].name}`;
    devPosition.innerHTML = `${developerData[i].position}`;
    devDescription.innerHTML = `${developerData[i].description}`;
  
    devInfo.appendChild(devName);
    devInfo.appendChild(devPosition);
    devInfo.appendChild(lineBreak);
    devInfo.appendChild(devLine);
    devInfo.appendChild(devDescription);
    cardDiv.appendChild(devImage);
    cardDiv.appendChild(devInfo);
    contentDiv.appendChild(cardDiv);
    developerSection.appendChild(contentDiv);
  }
  // const showMoreBtn = document.createElement('button');
  // showMoreBtn.className = 'show-more';
  // showMoreBtn.innerText = 'See more';
  // contentDiv.appendChild(showMoreBtn);
  // showMoreBtn.addEventListener('click', () => {
  //   const cardDiv = document.querySelectorAll('.flex-item');
  //   Array.from(cardDiv).slice(2).forEach((cardDiv) => cardDiv.classList.toggle('hide-show-more'));
  //   showMoreBtn.innerText = showMoreBtn.innerText === 'See more' ? 'Show Less' : 'See more';
  // });
}
topDeveloper();