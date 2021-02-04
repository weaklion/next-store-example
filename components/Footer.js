
const divider = {
  backgroundColor : "#eee",
  flex : 1
}

const Footer = () => (
  <div className="footer">
    <div className="footer-divider">
      <div style={divider}/>
      <div style={{width : ".75rem"}}/>
      <div style={divider}/>
    </div>

    <div className="font-bold mt-6">
      @ 2020 이규한
    </div>
  </div>
)

export default Footer;