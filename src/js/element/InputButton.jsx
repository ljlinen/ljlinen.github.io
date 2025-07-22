
export default function InputButton({ children, handle, value, style, color }) {
  return (
    <div className="input-button" style={style} onClick={handle}>
      <input type="button" value={value} style={{backgroundColor: 'transparent', border: 'none', outline: 'none', color: color}} />
      { children }
    </div>
  )
}
