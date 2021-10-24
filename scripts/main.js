const socialMediaData = {
    instagram: `${localStorage.getItem('instagram')}`,
    facebook: `${localStorage.getItem('facebook')}`,
    linkedin: `${localStorage.getItem('linkedin')}`,
    twitter: `${localStorage.getItem('twitter')}`,
    github: `${localStorage.getItem('github')}`
    
}

// My Default Links
if (localStorage.getItem('github') === null) {
    socialMediaData.github = 'rhuanbello'
    socialMediaData.facebook = 'https://www.facebook.com/orhuanbello/'
    socialMediaData.linkedin = 'https://www.linkedin.com/in/rhuanbello/'
    socialMediaData.twitter = 'https://twitter.com/rhuanbello'
    socialMediaData.instagram = 'https://www.instagram.com/rhuanbello/'
    
}

const changeInfos = () => {
    // Storage user input values
    localStorage.setItem('github', document.querySelector('.insertName').value);
    localStorage.setItem('linkedin', document.querySelector('.insertLinkedin').value);
    localStorage.setItem('instagram', document.querySelector('.insertInstagram').value);
    localStorage.setItem('twitter', document.querySelector('.insertTwitter').value);
    localStorage.setItem('facebook', document.querySelector('.insertFacebook').value);

    refresh()
    getGitHubProfileInfos()
    changeSocialMediaLinks()
}

const changeSocialMediaLinks = () => {
    const userLinks = document.querySelectorAll('.userLinks li a')

    userLinks.forEach(link => {
        let socialMediaName = Array.from(link.children).map(child => {
            return child.alt.split(' ')[1]
        })
        
        link.setAttribute('href', `${socialMediaData[socialMediaName]}`)

    })

}

changeSocialMediaLinks()

const turn3d = () => {
    document.querySelector('.front').classList.toggle('turn3d')
    document.querySelector('.back').classList.toggle('turn3d')

}

const getGitHubProfileInfos = () => {

    const url = `https://api.github.com/users/${socialMediaData.github}`;

    // busca url, guarda em uma variavel response em forma de json, e guarda o resultado em um objeto chamado data
    fetch(url).then(response => response.json()).then(data => {

        document.querySelector('.userName').textContent = data.name
        document.querySelector('.userDescription').textContent = data.bio
        document.querySelector('.userGithub').href = data.html_url
        document.querySelector('.userNick').textContent = data.login
        document.querySelector('.avatarImage').src = data.avatar_url
        
    })

}

getGitHubProfileInfos()

const openFormData = () => {
    const openForm = document.querySelector('.ri-menu-line')
    const closeForm = document.querySelector('.ri-close-line')
    const formData = document.querySelector('.formData')
    const btn = document.querySelector('.formData button')

    openForm.addEventListener('click', () => {
        formData.classList.add('active')

    })

    closeForm.addEventListener('click', () => {
        formData.classList.remove('active')

    })

    btn.addEventListener('click', () => {
        formData.classList.remove('active')

    })

    document.addEventListener ('keydown', (event) => {
        if (event.key === "Escape") { 
            formData.classList.remove('active')

        }
    });

}

openFormData()

const refresh = () => window.location.reload(true);