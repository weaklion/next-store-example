import Nav from "./Nav";
import Footer from "./Footer";

const divider = {
  backgroundColor : "#464ea3",
  flex : 1
}


const Container = props => (
  <div className="w-full h-full">
    <Nav/>
    <div className="content flex flex-col">
      <div className="page-header">
        <div className="page-header-title">
          {props.title}
        </div>
        <div className="page-header-divider">
          <div style={divider}/>
          <div style={{width : ".75rem"}}/>
          <div style={divider}/>
        </div>
      </div>

      <div className="page-contents">
        <div className="page-contents-title">
          {props.title}
        </div>
        {props.children}
      </div>
    </div>  
    <Footer/>
  </div>
);

export default Container;