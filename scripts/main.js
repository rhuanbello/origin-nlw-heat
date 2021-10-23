const socialMediaData = {
    instagram: 'rhuanbello',
    facebook: '100016322682357',
    youtube: '/channel/UCG_K1CO1YCpxuMrPi5J3bUQ',
    twitter: 'rhuanbello',
    github: 'rhuanbello'
    
}

const changeInfos = () => {
    const newUserName = document.querySelector('.insertName').value
    socialMediaData.github = newUserName

    getGitHubProfileInfos()

}

const changeSocialMediaLinks = () => {
    const userLinks = document.querySelectorAll('.userLinks li a')
    userLinks.forEach(link => {
        let socialMediaName = link.href.split('/')[2].split('.com')[0]

        link.setAttribute('href', `https://${socialMediaName}.com/${socialMediaData[socialMediaName]}`)

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

