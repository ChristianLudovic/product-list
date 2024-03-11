export function CheckBox ({ label, checked, onChange, id }) {
    return (
        <div className="flex items-center gap-2">
            <input
                id={id}
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                className="form-checkbox border border-gray-300 rounded-md p-2"
            />
            <label htmlFor={id} className="text-base">{label}</label>
        </div>
    )
}