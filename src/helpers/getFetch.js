let productos = [
    { id: '1', nombre: 'Alysum', categoria: 'FloresOtonio', descripcion: 'Mix colores', descripcionLarga: "Alysum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet condimentum mi. Vestibulum pharetra facilisis viverra. Mauris lacinia, lectus eget sollicitudin efficitur, nibh erat ultricies nisl, ut pellentesque neque", precio: '400', stock: '5', foto: 'https://www.petalrepublic.com/wp-content/uploads/2021/05/Ultimate-Guide-to-Alyssum-Flowers.jpeg' },
    { id: '2', nombre: 'Zinnia', categoria: 'FloresVerano', descripcion: 'Mix de colores', descripcionLarga: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet condimentum mi. Vestibulum pharetra facilisis viverra. Mauris lacinia, lectus eget sollicitudin efficitur, nibh erat ultricies nisl, ut pellentesque neque", precio: '500', stock: '8', foto: 'https://media.istockphoto.com/photos/assortment-of-pinkshaded-zinnias-in-a-flower-patch-picture-id155285202?k=20&m=155285202&s=612x612&w=0&h=y4cOH9rl2HDOE6dqzrqkgAbvrYl0klQP6UkzA4zLtKo=' },
    { id: '3', nombre: 'Jacinto', categoria: 'BulbosInvierno', descripcion: 'Mix de colores', descripcionLarga: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet condimentum mi. Vestibulum pharetra facilisis viverra. Mauris lacinia, lectus eget sollicitudin efficitur, nibh erat ultricies nisl, ut pellentesque neque", precio: '500', stock: '10', foto: 'https://t2.ev.ltmcdn.com/es/posts/7/1/8/cuidados_de_los_jacintos_2817_orig.jpg' },
    { id: '4', nombre: 'Dalia', categoria: 'BulbosPrimavera', descripcion: 'Rosadas', descripcionLarga: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet condimentum mi. Vestibulum pharetra facilisis viverra. Mauris lacinia, lectus eget sollicitudin efficitur, nibh erat ultricies nisl, ut pellentesque neque", precio: '500', stock: '20', foto: 'https://www.lysaflores.com/blog/wp-content/uploads/2016/11/Dalia.jpg' },
    { id: '5', nombre: 'Pensamiento', categoria: 'FloresOtonio', descripcion: 'Mix de colores', descripcionLarga: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet condimentum mi. Vestibulum pharetra facilisis viverra. Mauris lacinia, lectus eget sollicitudin efficitur, nibh erat ultricies nisl, ut pellentesque neque", precio: '450', stock: '10', foto: 'https://t2.ev.ltmcdn.com/es/posts/2/4/4/flor_pensamiento_cuidados_2442_1_600.jpg' },
    { id: '6', nombre: 'Cosmos', categoria: 'FloresPrimavera', descripcion: 'Rosadas', descripcionLarga: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet condimentum mi. Vestibulum pharetra facilisis viverra. Mauris lacinia, lectus eget sollicitudin efficitur, nibh erat ultricies nisl, ut pellentesque neque", precio: '400', stock: '4', foto: 'https://media.istockphoto.com/photos/cosmos-flowers-picture-id1195066019?b=1&k=20&m=1195066019&s=170667a&w=0&h=qYAUIEixV2pfDGmzB1IxtrIct4Nu272TLS21f7jKQ2M=' },
    { id: '7', nombre: 'Gladiolo', categoria: 'BulbosPrimavera', descripcion: 'Rosadas', descripcionLarga: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet condimentum mi. Vestibulum pharetra facilisis viverra. Mauris lacinia, lectus eget sollicitudin efficitur, nibh erat ultricies nisl, ut pellentesque neque", precio: '600', stock: '4', foto: 'https://www.lubera.com/images/600/Gladiolen-Novak.jpg' },
    { id: '8', nombre: 'Violeta de los Alpes', categoria: 'FloresInvierno', descripcion: 'Rosadas', descripcionLarga: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet condimentum mi. Vestibulum pharetra facilisis viverra. Mauris lacinia, lectus eget sollicitudin efficitur, nibh erat ultricies nisl, ut pellentesque neque", precio: '500', stock: '4', foto: 'https://jaime-jardiner.ouest-france.fr/wp-content/uploads/2015/03/Cyclamen-Wikipedia-1500.jpg' }
]

// export const getFetch = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(productos)
//         }, 2000)
//     })
// }

export const getFetch = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (id) {
                resolve(productos.find(prod => prod.id === id))
            } else {
                resolve(productos)
            }
        }, 2000)
    })
}

export const getFetchCategoria = (categoriaId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (categoriaId) {
                resolve(productos.filter(producto => producto.categoria === categoriaId))
            } 
        }, 2000)
    })
}

let producto = { id: '4', nombre: 'Dalia', categoria: 'BulbosPrimavera', descripcion: 'Rosadas', descripcionLarga: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet condimentum mi. Vestibulum pharetra facilisis viverra. Mauris lacinia, lectus eget sollicitudin efficitur, nibh erat ultricies nisl, ut pellentesque neque", precio: '500', stock: '20', foto: 'https://www.lysaflores.com/blog/wp-content/uploads/2016/11/Dalia.jpg' }

export const getFetchOne = () => {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(producto)
        }, 2000)
    })
}

