export function Input ({ value, placeholder, onChange }) {
  return (  
        <div>
            <input
                type="text"
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
                className="form-control border-none rounded-md p-2 h-11 input-search"
            />
        </div>
    )
}