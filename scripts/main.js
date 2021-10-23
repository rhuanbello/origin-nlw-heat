const userLinks = document.querySelectorAll('.userLinks li a')

const socialMediaData = {
    instagram: 'rhuanbello',
    facebook: '100016322682357',
    youtube: '/channel/UCG_K1CO1YCpxuMrPi5J3bUQ',
    twitter: 'rhuanbello',
    
}

const changeSocialMediaLinks = () => {
    userLinks.forEach(link => {
        let socialMediaName = link.href.split('/')[2].split('.com')[0]

        link.setAttribute('href', `https://${socialMediaName}.com/${socialMediaData[socialMediaName]}`)

    })


}

changeSocialMediaLinks()