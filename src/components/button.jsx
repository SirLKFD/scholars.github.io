import "../styles/button.scss"; 


function Button({ children }) {
  return (
    <div className="Button">
        <div className="LabelText">
          {children} 
        </div>
    </div>
  );
}

export default Button;