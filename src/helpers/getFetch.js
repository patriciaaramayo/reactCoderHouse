let productos = [
    { id: '1', nombre: 'Alysum', categoria: 'Primavera', descripcion: 'Semillas de Flores', precio: '500', stock: '5', foto: 'https://www.petalrepublic.com/wp-content/uploads/2021/05/Ultimate-Guide-to-Alyssum-Flowers.jpeg' },
    { id: '2', nombre: 'Zinnia', categoria: 'Primavera', descripcion: 'Semillas de Flores', precio: '500', stock: '8', foto: 'https://media.istockphoto.com/photos/assortment-of-pinkshaded-zinnias-in-a-flower-patch-picture-id155285202?k=20&m=155285202&s=612x612&w=0&h=y4cOH9rl2HDOE6dqzrqkgAbvrYl0klQP6UkzA4zLtKo=' },
    { id: '3', nombre: 'Cosmos', categoria: 'Primavera', descripcion: 'Semillas de Flores', precio: '500', stock: '4', foto: 'https://media.istockphoto.com/photos/cosmos-flowers-picture-id1195066019?b=1&k=20&m=1195066019&s=170667a&w=0&h=qYAUIEixV2pfDGmzB1IxtrIct4Nu272TLS21f7jKQ2M=' },
    { id: '4', nombre: 'Dalia', categoria: 'Primavera', descripcion: 'Semillas de Flores', precio: '500', stock: '20', foto: 'https://p0.pxfuel.com/preview/319/220/10/dahlia-pink-flower-blossom.jpg' },
    { id: '5', nombre: 'Pensamiento', categoria: 'Primavera', descripcion: 'Semillas de Flores', precio: '500', stock: '10', foto: 'https://images.all-free-download.com/images/graphiclarge/garden_pansy_pansies_flower_224885.jpg' }
]

export const getFetch = () => {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 3000)
    })
}
