import './App.css'
import {Input} from './components/forms/input'
import {CheckBox} from './components/forms/checkBox'
import {ProductCategoryRow} from './components/products/productCategoryRow'
import {ProductRow} from './components/products/productRow'
import {useState} from 'react'


const PRODUCTS = [  
  {category: "FRUITS", price: "$1", stocked: true, name: "Pomme"},  
  {category: "FRUITS", price: "$1", stocked: true, name: "Fruit du dragon"},  
  {category: "FRUITS", price: "$2", stocked: false, name: "Fruit de passion"},  
  {category: "VEGETABLES", price: "$2", stocked: true, name: "Epinards"},  
  {category: "VEGETABLES", price: "$4", stocked: false, name: "Citrouille"},  
  {category: "VEGETABLES", price: "$1", stocked: true, name: "Petits pois"}  
]

function App() {

  const [showOnlyStocked, setShowOnlyStocked] = useState(false)
  const [search, setSearch] = useState('')

  const visibleProducts = PRODUCTS.filter(product => {
    if (showOnlyStocked && !product.stocked){
      return false
    }
    if (search && !product.name.toLowerCase().includes(search.toLowerCase())){
      return false
    }
    return true
  })

  return (
      <div className="custom-width">
        <div className="card-header">
          <h1 className="text-black font-bold text-xl">Filtrer les produits</h1>
        </div>
        <div className="card-body flex flex-col gap-4 items-start">
          <SearchBar 
            showOnlyStocked={showOnlyStocked} 
            onOnlyStockedChange={setShowOnlyStocked}
            search={search}
            onSearchChange={setSearch}
          />
          <ProductTable products={visibleProducts} />
        </div>
      </div>
  )
}

function SearchBar({showOnlyStocked, onOnlyStockedChange, search, onSearchChange}){
  return (
    <div className='searchBar flex flex-col gap-2'>
      <Input 
        value={search} 
        placeholder="Rechercher un produit..." 
        onChange={onSearchChange} 
      />
      <CheckBox 
        id="stocked" 
        label="N’afficher que les produits en stock" 
        checked={showOnlyStocked} 
        onChange={onOnlyStockedChange} 
      />
    </div>
  )
}

function ProductTable({products}){

  const rows = []

  let lastCategory = null

  for (let product of products){
    if (product.category !== lastCategory){
      rows.push(
        <ProductCategoryRow name={product.category} key={product.category}/>
      )
    }
    lastCategory = product.category
    rows.push(
      <ProductRow product={product} key={product.name}/>
    )
  }

  return (
    <table >
      <thead>
        <tr>
          <th className='product-title-row text-start border-y border-slate-200'>PRODUITS</th>
          <th className='price-title-row text-start border-y border-slate-200'>PRIX</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}

export default App
