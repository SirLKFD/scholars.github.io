function ProfilePicture(){

    const imgUrl = "https://www.w3schools.com/howto/img_avatar.png";
    const handleClick = (e) => e.target.style.display = "none";

    return (
        <div>
            <img onClick={(e) => handleClick(e)}  src={imgUrl} alt="Profile Picture" height="400" />
        </div>
    );
}

export default ProfilePicture;