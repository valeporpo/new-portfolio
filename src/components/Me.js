import profileImg from '../img_profile.jpg';

export default function Me() {
    return (
        <div id="me" className="section">
          <div>
            <div id="animation-hider-top" className="animation-hider">
            </div>
            <div id="name-surname">
              <span>Valerio Porporato</span>
            </div>
            <img src={profileImg}/>
            <div id="job-description">
            <span>Front-end developer</span>
            </div>
            <div id="animation-hider-bottom" className="animation-hider">
            </div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <p>
               The standard chunk of Lorem Ipsum used since the 1500s is
               reproduced below for those interested. Sections 1.10.32 and
               1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
               also reproduced in their exact original form, accompanied by
               English versions from the 1914 translation by H. Rackham.
            </p>
          </div>
        </div>
    );
}