const sectionMap = {
  'works--button': 'works--section',
  'talents--button': 'talents--section',
  'transactions--button': 'transactions--section'
}

const sectionsArray = ['works--section', 'talents--section', 'transactions--section']
const closeButtons = ['close--sections', 'close--talents', 'close--transations']

function hideAll () {
  sectionsArray.forEach(id => document.getElementById(id).classList.remove('show'))
}

document.getElementById('home--button').addEventListener('click', hideAll)

Object.keys(sectionMap).forEach(key => {
  document.getElementById(key).addEventListener('click', () => {
    hideAll()
    document.getElementById(sectionMap[key]).classList.add('show')
  })
})

closeButtons.forEach(id => {
  document.getElementById(id).addEventListener('click', hideAll)
})

$(document).ready(function () {
  $('#action_menu_btn').click(function () {
    $('.action_menu').toggle()
  })
})

// Articles

const workerGrid = document.querySelector('.grid--work--post')
let isWorkLoad = false

const workers = [

  {
    img: './img/user/f/2.svg',
    name: 'Martina',
    search: 'Busco un especialista en jardines y espacios exteriores.'
  },
  {
    img: './img/user/f/3.svg',
    name: 'Lorena',
    search: 'Hola, estoy buscando un mecánico que pueda revisar mi coche.'
  },
  {
    img: './img/user/f/6.svg',
    name: 'Rogelio',
    search: 'Estoy buscando un front-end que pueda ejecutar mi maqueta.'
  },
  {
    img: './img/user/f/7.svg',
    name: 'Victoria',
    search: 'Necesito que un electricista venga a mi casa en Buenos Aires.'
  },
  {
    img: './img/user/f/8.svg',
    name: 'Diego',
    search: 'Busco costurera con experiencia para reparar mis prendas.'
  },
  {
    img: './img/user/f/9.svg',
    name: 'Angie',
    search: 'Necesito un técnico de reparación de pc.'
  },
  {
    img: './img/user/f/10.svg',
    name: 'Carlos',
    search: 'Busco una persona que sepa reutilizar la madera para hacer muebles.'
  },
  {
    img: './img/user/f/11..svg',
    name: 'Veronica',
    search: 'Necesito un ayudante para pintar mi casa.'
  },
  {
    img: './img/user/f/12.svg',
    name: 'Sofia',
    search: 'Busco persona que sepa cocinar bianditas a diario para el almuerzo.'
  },
  {
    img: './img/user/f/13.svg',
    name: 'Elizabeth',
    search: '¿Quién puede cortarme el césped?'
  },
  {
    img: './img/user/f/14.svg',
    name: 'Morgan',
    search: 'Busco a alguien para pasear a mis perros.'
  },
  {
    img: './img/user/f/15.svg',
    name: 'Michael',
    search: 'Necesito una persona que sepa hacer pasteles deliciosos.'
  }

]

function workerShow () {
  if (isWorkLoad) return

  const workerHTML = workers.map(worker =>

    `<div class="grid--works--item">
    <div class="profile--worker">
        <img src="${worker.img}" alt="Perfil usuario">
        <h3>${worker.name}</h3>
    </div>
        <p>${worker.search}</p>
    </div>`).join('')

  workerGrid.innerHTML += workerHTML
  isWorkLoad = true
}

const workBtn = document.getElementById('works--button')
workBtn.addEventListener('click', workerShow)

const talentGrid = document.querySelector('.grid--talents--section')
let isTalentsLoaded = false

const talents = [

  {
    img: './img/user/m/1.svg',
    name: 'Nicolás',
    search: 'Repare su ordenador con garantía.'
  },
  {
    img: './img/user/m/2.svg',
    name: 'Angel',
    search: 'Soy jardinero especializado en parterres.'
  },
  {
    img: './img/user/m/3.svg',
    name: 'Joseph',
    search: 'Soy podador de árboles.'
  },
  {
    img: './img/user/m/4.svg',
    name: 'Juan',
    search: 'Soluciono todo tipo de problemas de humedad en su hogar.'
  },
  {
    img: './img/user/m/5.svg',
    name: 'Jessica',
    search: 'Peluquería y estilismo a domicilio.'
  },
  {
    img: './img/user/m/6.svg',
    name: 'Manuel',
    search: 'Arreglo tu heladera en el día'
  },
  {
    img: './img/user/m/7.svg',
    name: 'Lucia',
    search: 'Te preparo el almuerzo todos los días!'
  },
  {
    img: './img/user/m/8.svg',
    name: 'Roberto',
    search: 'Hago budines, pan casero con masa integral.'
  },
  {
    img: './img/user/m/9.svg',
    name: 'Roman',
    search: 'Instalo ventanas y puertas.'
  },
  {
    img: './img/user/m/10.svg',
    name: 'Barbara',
    search: 'Hago todo tipo de tartas para cumpleaños y bodas.'
  },
  {
    img: './img/user/m/11.svg',
    name: 'Patricia',
    search: 'Pinto toda tu casa y terrazas'
  },
  {
    img: './img/user/m/12.svg',
    name: 'Christian',
    search: 'Pinto toda tu casa y terrazas'
  }

]

function talentShow () {
  if (isTalentsLoaded) return

  const talentHTML = talents.map(talent => `
  <div class="grid--works--item">
      <div class="profile--worker">
          <img src="${talent.img}" alt="Perfil usuario">
          <h3>${talent.name}</h3>
      </div>
      <p>${talent.search}</p>
  </div>`).join('')

  talentGrid.innerHTML += talentHTML
  isTalentsLoaded = true
}

const talentBtn = document.getElementById('talents--button')

talentBtn.addEventListener('click', talentShow)

// append

const workWindow = document.getElementById('window--work')
const talentWindow = document.getElementById('window--talent')
const registerAccount = document.getElementById('registerWindow')

function post (windowType) {
  if (windowType === 'work') {
    workWindow.classList.add('show')
  } else if (windowType === 'talent') {
    talentWindow.classList.add('show')
  } else if (windowType === 'register') { registerAccount.classList.add('show') }
};

function closePost (windowType) {
  if (windowType === 'work') {
    workWindow.classList.remove('show')
  } else if (windowType === 'talent') {
    talentWindow.classList.remove('show')
  } else if (windowType === 'register') {
    registerAccount.classList.remove('show')
  }
};

function addTalentToSection (sectionSelector, inputNameSelector, inputPriceSelector, inputDescSelector) {
  function getValuesTalent () {
    const inputName = document.querySelector(inputNameSelector).value
    const inputPrice = document.querySelector(inputPriceSelector).value
    const inputDesc = document.querySelector(inputDescSelector).value
    return { name: inputName, price: inputPrice, desc: inputDesc }
  }

  const { name, price, desc } = getValuesTalent()

  if (name && price && desc) {
    const createTalentPost = document.querySelector(sectionSelector)

    const itemTalentDiv = document.createElement('div')
    itemTalentDiv.classList.add('grid--works--item')

    const itemTalentDivProfile = document.createElement('div')
    itemTalentDivProfile.classList.add('profile--worker')

    const itemTalentImg = document.createElement('img')
    itemTalentImg.src = './img/usuario.png'
    itemTalentImg.classList.add('img-styling')

    const itemTalentH3 = document.createElement('h3')
    itemTalentH3.classList.add('h3-styling')
    itemTalentH3.innerText = name

    const itemTalentP = document.createElement('p')
    itemTalentP.classList.add('p-styling')
    itemTalentP.innerText = price

    const itemTalentPDesc = document.createElement('p')
    itemTalentPDesc.classList.add('p-styling')
    itemTalentPDesc.innerText = `ETH ${desc} Per Hour`

    itemTalentDivProfile.appendChild(itemTalentImg)
    itemTalentDivProfile.appendChild(itemTalentH3)
    itemTalentDiv.appendChild(itemTalentDivProfile)
    itemTalentDiv.appendChild(itemTalentP)
    itemTalentDiv.appendChild(itemTalentPDesc)
    createTalentPost.appendChild(itemTalentDiv)

    workWindow.classList.remove('show')
    talentWindow.classList.remove('show')
  } else {
    window.alert('Los campos no pueden estar vacios')
  };
}

document.getElementById('post--work').addEventListener('click', () => {
  addTalentToSection('.grid--work--post', '#postWorkInput-1', '#postWorkInput-2', '#postWorkInput-3')
})
document.getElementById('post--talent').addEventListener('click', () => {
  addTalentToSection('.grid--talents--section', '#postTalentInput-1', '#postTalentInput-2', '#postTalentInput-3')
})

// Message Demo

const backArrow = document.querySelector('.back--arrow')
backArrow.classList.add('hidden')
const chatInbox = document.querySelector('.chat--inbox')
const chatItem = document.querySelectorAll('.chat--inbox--item')
const chatMsg = document.querySelector('.chat--message')

let resizeTimeout

function toggleVisibility () {
  chatItem.forEach(chat => {
    chat.addEventListener('click', () => {
      if (window.innerWidth < 768) {
        chatInbox.classList.add('hidden')
        chatMsg.classList.add('visible')
        backArrow.classList.remove('hidden')
      }
    })
  })

  backArrow.addEventListener('click', () => {
    chatInbox.classList.remove('hidden')
    chatMsg.classList.remove('visible')
    backArrow.classList.add('hidden')
  })
}

function checkArrow () {
  clearTimeout(resizeTimeout)
  resizeTimeout = setTimeout(toggleVisibility, 200)
}

toggleVisibility()

window.addEventListener('resize', checkArrow)
