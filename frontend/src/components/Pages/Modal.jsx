import { withRouter } from 'react-router-dom';


const  Modal = (props) => {

  return (
    <div 
    className="modal-wrapper"
    onClick={() => props.history.goBack()}
    >
      <div 
      className="modal"
      onClick={event => event.stopPropagation()}
      >

        <p>Content</p>
      </div>
    </div>
  )
}

export default withRouter(Modal);