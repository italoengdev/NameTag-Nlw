const linksSocialMedia = {
  github: 'italoengdev',
  youtube: 'UCfmJbrEkZuMCYk0QC0wtvgA',
  facebook: 'italo.saraivagoncalves',
  instagram: 'italosaraiva.dev',
  twitter: 'italo_sg'
}
//DOM document object model

//camelCase
//PascalCase
//snake_case

function changeSocialMediaLinks() {
  // mesma coisa que userName.textContente -->  document.getElementById('userName').textContent = 'Olivia'

  // estrutura for --> for(let i = 0;i <= 10; i++){
  //alert(i)
  //}
  //socialLinks.textContent = socialLinks.children

  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
