const ContactForm = () => {
	return (
		<div className="contact-container">
			<h2>Contact Us</h2>
			<form className="contact-form">
				<label htmlFor="name">
					Name
				</label>
				<input className="contact-input" type="text"
					id="name"
					name="name" required />
				<label htmlFor="email">
					Email
				</label>
				<input className="contact-input" type="email"
					id="email"
					name="email" required />
				<label htmlFor="message">
					Message
				</label>
				<textarea className="contact-input" id="message"
					name="message"
					rows="4" required />
				<button className="primary-button contact-submit" type="submit">
					Submit
				</button>
			</form>
		</div>
	);
};

export default ContactForm;
