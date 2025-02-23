const box = document.querySelector('.box');
async function getUsers() {
    try {
        const rs = await fetch('https://fakestoreapi.com/products')
        const users = await rs.json()
        console.log(users);
        
        users.forEach(user => {
            // Yaratish
    const card = document.createElement('div'),
    title = document.createElement('h2'),
    category = document.createElement('p'),
    price = document.createElement('p'),
    img = document.createElement('img'),
    rate = document.createElement('p'),
    count = document.createElement('p')

            // Ulash
    card.classList.add('card')
    box.append(card)
    title.innerHTML = (`Title: ${user.title}`)
    category.innerHTML = (`Category: ${user.category}`)
    price.innerHTML = (`Price: ${user.price} USD`)
    rate.innerHTML = (`Rate: ${user.rating.rate} ⭐`)
    count.innerHTML = (`Count: ${user.rating.count}`)
    img.src = `${user.image}`
    console.log(title);
    
    
    card.append(title, price, category, img, rate, count)
        });
    } catch (error) {
        console.error(error.message);
        
    }
}
getUsers()