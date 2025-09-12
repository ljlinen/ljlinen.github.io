
export default function InputButton({ children, handle, value, style, color, className}) {
  return (
    <div className={`input-button ${className}`} style={style} onClick={handle}>
      <input type="button" value={value} style={{backgroundColor: 'transparent', border: 'none', outline: 'none', color: color}} />
      { children }
    </div>
  )
}
