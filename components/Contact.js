
const Contact = ({name, type, email}) => (
  <div className='contact'>
    <style jsx>{`
      .contact {
        padding: 1em;
      }
      .contact-type {
        text-transform: uppercase;
        font-weight: 600;
      }
    `}</style>
    <div>
      <span className='contact-type'>{ type }</span> | <span className='contact-name'>{ name }</span>
    </div>
    <div>
      <span className='contat-email'>
        <a href={`mailto:${email}`}>{email}</a>
      </span>
    </div>
  </div>
)

export default Contact
