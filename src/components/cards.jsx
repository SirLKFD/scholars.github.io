import "../styles/cards.css";

function Card(){

    return(
      <div className="card">

        <img className="card-image" src="https://picsum.photos/200" alt="Profile Picture"></img>
        <h2 className="card-title">Lord Kent</h2>
        <p className="card-text">I am a CpE Student and play video games.</p>

      </div>
    );
 
}

export default Card;