import { useEffect, useState } from "react";



function Popup( {id, visible, onClose} ) {
  const [popupData, setPopupData] = useState({});

  async function fetchUrl() {
    const res = await fetch(`http://localhost:9000/stores/${id}`);
    const user = res.json();
    setPopupData(user);
  }


  useEffect(() => {
    fetchUrl();
  },[]);

  return (
    <div className="modal-overlay">
      { visible ? (
        <div className="modal-wrapper">
          <span className="close" onClick={onClose}>
            &times;
          </span>       
          <div className="modal-image">
          </div>   
          <div className="modal-contents pl-6">
            <div className="xl-bold mt-8 mb-12">
              {popupData.name}
            </div>

            <div className="modal-description mb-8">
              {popupData.description}
            </div>

            <a 
              className="modal-url text-gray-600"
              href={popupData.url}
            >
              {popupData.url}
            </a>
          </div>
        </div>
      ) : null}
      <style jsx>
        {`
          .modal-overlay { 
            display : ${visible ? 'block' : 'none'} ;
            position: fixed;
            padding :2rem;
            z-index: 1;
            left :0;
            top : 0;
            width : 100%;
            height: 100%;
            overflow : auto;
            background-color: rgba(0,0,0,0.4);
          }
          
          .modal-wrapper { 
            border-radius : .25rem;
            background : #fff;
            position:relative;
            box-shadow : 0 1rem 2rem 0 rgba(0,0,0,.3);
            display:flex;
            height: 100vh;
            width:100%;
            max-height: 55rem;
            max-width : 120rem;
            overflow: hidden;
          }
          
          .close {
            color : #aaa;
            position : absolute;
            right:0;
            top : 0;
            font-size : 34px;
            margin-right : 1rem;
            font-weight: bold;
          }

          .modal-image {
            position: relative;
            display : block;
            box-sizing : border-box;
            width: 40%;
            background-image: url(${popupData.image ? popupData.image : ''});
            background-position: center;
            background-size : cover;
          }

          .modal-contents {
            align-items: flex-start;
            display : flex;
            flex-direction : column;
            padding-right : 2rem;
            height : 50%;
            width  : 60%;
          
          }

          .modal-description {
            font-weight :400;
            font-size :.8rem;
            width : 100%;
            line-height: 166%;
          }

          .modal-url {
            text-decoration : none;

          }
          
          .close:hover,
          .close:focus {
            color : black;
            text-decoration: none;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  )
}



export default Popup;


