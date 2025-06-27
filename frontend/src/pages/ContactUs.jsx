import "../css/ContactUs.css";

function ContactUs() {
    return (
        <div className="contact-us">
            <div className="contact-container">
                <h1 className="contact-title">Contact Us</h1>
                <div className="contact-content">
                    <p className="contact-description">
                        We're always looking to expand our book collection and provide you with the best reading recommendations. 
                        If you know of any amazing books that aren't currently included in our library, we'd love to hear from you! 
                        Whether it's a hidden gem, a recent bestseller, or a classic that we might have missed, your suggestions 
                        help us build a more comprehensive and diverse collection for all book lovers. Feel free to reach out to 
                        us with your recommendations, and we'll do our best to add them to our database so other readers can 
                        discover these wonderful titles too.
                    </p>
                    
                    <div className="contact-info">
                        <h3>Get in Touch</h3>
                        <div className="contact-methods">
                            <div className="contact-method">
                                <span>Email: new@bookapp.com</span>
                            </div>
                            <div className="contact-method">
                                <span>Phone number: +94 70 12345568</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;