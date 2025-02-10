import imageCV from '../../asset/img/Sipho Moloto CV.png'

export default function CurriculumVitae() {
  return (
    <section className="s3-sec-cv">
    <h2>Curriculum Vitae</h2>
    <p className="desc">Should any additional information be required, my contact details can be found on the footer.</p>
      
    <div className="s3-div-cv">
    <img src={imageCV} alt="Curriculum Vitae.pdf" />
      <div className="s3-div-cvBtns">
       <a href="../../asset/pdf/CV.pdf" download="Sipho Moloto CV.pdf">
        <p>Download</p>
       </a>
       <p id="fullscreenImage">View CV</p>
      </div>
    </div>
  </section>
  )
}
