import { useRef } from 'react';
import imageCV from '../../asset/img/Sipho Moloto - Resume - Google Drive.jpg'
import '../../css/section/curriculumvitae.css'
import pdfResume from '../../asset/pdf/Sipho Moloto - Resume - Google Drive.pdf'

export default function CurriculumVitae() {
  const refCvImage = useRef(null)

const handleViewCv = () => {
  if (refCvImage.current.requestFullscreen) {
      refCvImage.current.requestFullscreen();
  } else if (refCvImage.current.mozRequestFullScreen) { // Firefox
      refCvImage.current.mozRequestFullScreen();
  } else if (refCvImage.current.webkitRequestFullscreen) { // Chrome, Safari, and Opera
      refCvImage.current.webkitRequestFullscreen();
  } else if (refCvImage.current.msRequestFullscreen) { // IE/Edge
      refCvImage.current.msRequestFullscreen();
  }
}
  return (
    <section className="s3-sec-cv">
    <div className="head">
      <h2>Curriculum Vitae</h2>
      <p className="desc">Should any additional information be required, my contact details can be found on the footer.</p>
    </div>
      
    <div className="s3-div-cv">
    <img ref={refCvImage} src={imageCV} alt="Curriculum Vitae.pdf" />
      <div className="s3-div-cvBtns">
       <a href={pdfResume} download="SiphoMoloto Curriculum Vitae.pdf">
        <p>Download</p>
       </a>
       <p id="fullscreenImage" onClick={handleViewCv}>View CV</p>
      </div>
    </div>
  </section>
  )
}
