
export default function InputButton({ children, handle, value, style, color }) {
  return (
    <div className="input-button" style={style}>
      <input type="button" value={value} onClick={handle} style={{backgroundColor: 'transparent', border: 'none', outline: 'none', color: color}} />
      { children }
    </div>
  )
}
