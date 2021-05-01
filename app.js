const contain=document.getElementById('contain')

const readJson = async () => {
    const res = await fetch('./portfolio.json')
    const file = await res.json()
    cretaeCard(file)
}
readJson()

const cretaeCard=(files)=>{
    const fragment = document.createDocumentFragment()
    for(const file of files){
        const card=document.createElement('div')
        card.classList.add('card')

        const imageArea=document.createElement('div')
        imageArea.classList.add('imagearea')

        const img=document.createElement('img')
        img.src=file.img
        imageArea.appendChild(img)

        const description=document.createElement('div')
        description.classList.add('description')

        const name=document.createElement('p')
        name.innerHTML=`<p>名前：<span>${file.name}</span></p>`
        description.appendChild(name)

        const repository=document.createElement('p')
        repository.innerHTML=`<p>リポジトリURL：<a href=${file.url}>${file.url}</a></p>`
        description.appendChild(repository)

        const technology=document.createElement('p')
        technology.innerHTML=`<p>使用技術：<span>${file.technology.join(',')}</span></p>`
        description.appendChild(technology)

        card.appendChild(imageArea)
        card.appendChild(description)
        fragment.appendChild(card)
    }
    contain.appendChild(fragment)
}