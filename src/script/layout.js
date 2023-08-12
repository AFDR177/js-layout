export const createElement = (
  tag,
  className,
  text,
  image,
) => {
  const elem = document.createElement(tag)

  if (className) {
    elem.className = className
  }

  if (text) {
    console.log('===>', text)

    elem.innerHTML = text
  }

  if (image) {
    elem.src = image
    // console.log('=>', elem.src)
  }

  return elem
}

const HEADER_BUTTON_LIST = [
  { width: 24, heigth: 24, src: '/svg/button_back.svg' },
  { width: 24, heigth: 24, src: '/png/avatar.png' },
]

export const createHeader = () => {
  // створюємо тег header з  класом header
  const header = createElement('header', 'header')

  // робимо ітерацію обєектів HEADER_BUTTON_LIST
  // в params приходить обєкт з HEADER_BUTTON_LIST з атрибутами  а саме: width, heigth, src
  HEADER_BUTTON_LIST.forEach((params) => {
    // створюємо тег button з  класом button

    const button = createElement('button', 'button')

    const img = createElement('img')

    // console.log(Object.entries(params))

    Object.entries(params).forEach(([key, value]) => {
      img[key] = value
    })
    // button.append(img)
    button.insertAdjacentElement('beforeend', img)

    // header.append(button)
    header.insertAdjacentElement('beforeend', button)
  })

  return header
}

//===
