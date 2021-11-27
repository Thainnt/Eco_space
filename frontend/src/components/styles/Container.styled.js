import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .item_card {
    display: flex;
    flex-direction: column;
    padding: 1em;
    
    
  }
  .item_content {
    align-self: center;
    margin-top: 1em;
  }
  .item_image {
    width: 350px;
    padding: 0 1rem;
    border-radius: 2rem;
    
    
    // background-color: black;
  }


  .item_freecycle {
    border-style:dotted;
    border-color: #606163;
    border-radius:65px;
    border-width:thick;
  }

  .item_freecycle:hover {
    border-style:ridge;
    border-color:#311db5 ;
    box-shadow: -3px 5px 50px 17px rgba(101,75,191,0.89);
  }

  .name_under_image {
    font-family: 'Oswald', sans-serif;
    text-align:center;
    font-size: 30px;
    text-shadow: 0 0 15px rgba(255,255,255,.5), 0 0 10px rgba(255,255,255,.5), 0px 1px 20px #070707;
  }

}

 
`;

export const Header = styled.h1`
.title {
  font-family: 'Oswald', sans-serif;
  text-align:center;
  font-size: larger;
  text-shadow: 0 0 15px rgba(255,255,255,.5), 0 0 10px rgba(255,255,255,.5), 0px 1px 20px #070707;
}

`


