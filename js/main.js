const about = document.querySelector('#about')
const aboutContent = document.querySelector('#about-content')
const contact = document.querySelector('#contact')
const contactContent = document.querySelector('#contact-content')
const podcasts = document.querySelector('#podcasts')
const podcastsContent = document.querySelector('#podcasts-content')

about.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'About Me',
    // modal: true,
    width: '400px',
    height: '400px',
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: aboutContent,
    onfocus: function () {
      this.setBackground('#ccc')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

contact.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'Contact Me',
    width: '400px',
    height: '400px',
    top: 150,
    right: 50,
    bottom: 50,
    left: 250,
    mount: contactContent,
    onfocus: function () {
      this.setBackground('#ccc')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

podcasts.addEventListener('click', () => {
  const podcastsBox = new WinBox({
    title: 'My Favorite Podcasts',
    width: '400px',
    height: '400px',
    top: 150,
    right: 50,
    bottom: 50,
    left: 250,
    mount: podcastsContent,
    onfocus: function () {
      this.setBackground('#ccc')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})
