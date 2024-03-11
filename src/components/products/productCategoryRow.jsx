export function ProductCategoryRow({name}) {
    return (
        <tr>
            <td colSpan="2" className="category"><strong>{name}</strong></td>
        </tr>
    )
}