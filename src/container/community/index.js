import {
  createElement,
  createHeader,
} from '../../script/layout'

const page = document.querySelector('.page')

const header = createHeader()

page.append(header)

const title = createElement('h1', 'title', 'Коммьюніті')

page.append(title)

//==

const TABS = [
  { tab: 'База знань', viewed: true },
  { tab: 'Інформація', viewed: false },
]

const creatTabs = () => {
  const tabs = createElement('nav', 'tabs')
  TABS.forEach((tabsData) => {
    const tab = createElement(
      'a',
      tabsData.viewed ? 'tab tab--veiwed' : 'tab',
      tabsData.tab,
    )
    tabs.append(tab)
  })
  return tabs
}

const tabs = creatTabs()
page.append(tabs)

const image = createElement(
  'img',
  'hero_image',
  false,
  '/png/hero.png',
)

page.append(image)

const description = createElement('div', 'description')

const titleSmall = createElement(
  'h2',
  'title title__small',
  'Що таке база знань?',
)

const descriptionText = createElement(
  'p',
  'description__text',
  `База знаний — база данных, содержащая правила вывода и информацию о человеческом
  опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит
  информацию, являющуюся результатом решения предыдущих задач.`,
)
description.append(titleSmall, descriptionText)

page.append(description)

const buttonGo = createElement(
  'button',
  'button button__go',
  `Перейти до ком'юніті у Телеграм`,
)

page.append(buttonGo)
