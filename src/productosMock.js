const products = [
        { id: "1", name: "Cebolla", img: "https://hiperlibertad.vtexassets.com/arquivos/ids/176852/CEBOLLA-x-500-g-1-17351.jpg?v=637546273212600000", price: 50, category: "verdura", description: "cebolla chica", stock: 20 },
        { id: "2", name: "Calabaza", img: "https://www.datocms-assets.com/48508/1636769407-l-officiel-mexico-semillas-calabaza.jpg?auto=format%2Ccompress&cs=srgb", price: 60, category: "verdura", description: "grande", stock: 20 },
        { id: "3", name: "Banana", img: "https://images.immediate.co.uk/production/volatile/sites/30/2017/01/Bunch-of-bananas-67e91d5.jpg", price: 100, category: "fruta", description: "madura", stock: 20 },
        { id: "4", name: "Manzana", img: "https://media.justo.mx/products/12637-Manzana_Roja.jpg", price: 120, category: "fruta", description: "roja", stock: 20 },
        
        
]; 
    export const getProducts = () => { 
    
        return new Promise( (resolve, reject) => { 
            if(products.length > 0) {
                setTimeout ( () => { 
                resolve( products )   
                 }, 2000)
            } else {
                reject("No hay productos para mostrar")
            }
        } )
     }