export default class Section {
    constructor({ items, renderer }, selector) {}

    renderItems () {
      this._items.forEach((item) => 
        this._renderer(item))
      }
   
    addItem (itemHtml) {
        this._container.prepend(itemHtml)
      }
    } 
    
    function renderCard (cardData) {
        const cardElement = createCard(cardData)
        section.addItem (cardElement)
    }

    const section = new Section({items: [], renderer: renderCard}, '.card__list')
    section.renderItems()
