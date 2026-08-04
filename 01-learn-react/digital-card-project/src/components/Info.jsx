export default function Info() {
    return (
        <>
        <div className="info-card">
            <img className="profile-photo" src="..\src\assets\hance-prof.jpg" alt="Hance Profile Photo" />
            
        </div>
        <div className="info-details">
            <h1>Hance Dagondon</h1>
            <h3>Frontend Developer</h3>
            <p>hancesoo.me</p>
        </div>
        <div className="social-buttons">
            <button className="email-btn">
                <img className="icon" src="..\src\assets\Mail.png" alt="" />
                Email
            </button>
            <button className="linkedin-btn">
                <img className="icon" src="..\src\assets\linkedin.png" alt="" />
                Linkedin
            </button>
        </div>
        </>
    )
}