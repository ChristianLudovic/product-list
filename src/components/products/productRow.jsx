export function ProductRow ({ product }) {

    const style = product.stocked ? undefined : {color: 'red'}

    return (
        <tr className="product-row">
            <td className="productName-row border-y border-slate-200" style={style}>{product.name}</td>
            <td className="productPrice-row border-y border-slate-200" >{product.price}</td>
        </tr>
    )
}