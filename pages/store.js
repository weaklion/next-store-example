
import { useState } from "react";
import Container from "../components/Container";
import Popup     from "../components/Popup";

function Store({ posts })  {
  const [popupVisible, setPopupVisible] = useState(false)
  const [popupID, setPopupID] = useState(0)

  const openModal = (id) => {
    setPopupID(id)
    setPopupVisible(true)
  }

  const closeModal = () => {
    setPopupVisible(false)
  }


  return (
    <div>
      <Container title="STORE">
        <div className="flex-center">
          <div className="grid grid-cols-5 gap-3">
            {
              posts.length > 0 ? posts.map((post) => 
                <div 
                  className="brand-thumbnail"
                  style={{ backgroundImage : `url(${post.image}`}}
                  onClick={ () => openModal(post.id)}
                  key={post.id}
                >
                </div>
              ) : <div className="text-center">"No Posts"</div>          }
          </div>
        </div>
        { popupVisible == true ? 
          <Popup
            id={popupID}
            visible={popupVisible}
            onClose ={closeModal}
          /> : '' }
      </Container>
    </div>
  )
}

export async function getStaticProps(context) {
  const res = await fetch("http://localhost:9000/stores");
  const posts = await res.json();

  return {
    props : {
      posts
    }
  };
}

export default Store;