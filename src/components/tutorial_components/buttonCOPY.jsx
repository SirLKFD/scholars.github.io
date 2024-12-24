import "../../styles/button.scss";


function ButtonTutorialEvent({ children }) {
  return (
    <div className="Button">
        <div className="LabelText">
          {children} 
        </div>
    </div>
  );
}

export default Button;