import "../../styles/button.scss";


function ButtonTutorialEvent({ children, onDoubleClick }) {
  return (
    <div className="Button" onClick={onDoubleClick}>
        <div className="LabelText">
          {children} 
        </div>

    </div>
  );
}

export default ButtonTutorialEvent;