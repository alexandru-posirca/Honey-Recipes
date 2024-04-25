import ModuleTop from "../../components/ModuleTop";
import { Form } from "react-router-dom";
import "../contact/Contact.css";

export default function Contact() {
  return (
    <div className="contact-page">
        <ModuleTop title={"Contact"} subtitle={"Get in touch with your source of inspiration and energy"}/>
        <div className="container mx-auto flex justify-around flex-col gap-10 md:flex-row md:gap-0">
          <div className="cmn-contact">
            <h2>Contact</h2>
            <div className="info-contact">
              <a href="#instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16"><path fill="#ffc342" d="M8 0C5.829 0 5.556.01 4.703.048C3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7C.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297c.04.852.174 1.433.372 1.942c.205.526.478.972.923 1.417c.444.445.89.719 1.416.923c.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417c.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046c.78.035 1.204.166 1.486.275c.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485c.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598c-.28.11-.704.24-1.485.276c-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598a2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485c-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486c.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276c.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92a.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217a4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334a2.667 2.667 0 0 1 0-5.334" style={{fill: "rgb(232, 179, 7)"}}></path></svg>
              honey.recipes
              </a>
              <a href="#facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 15 15"><path fill="none" stroke="#e8b307" d="M7.5 14.5a7 7 0 1 1 0-14a7 7 0 0 1 0 14Zm0 0v-8a2 2 0 0 1 2-2h.5m-5 4h5"></path></svg>
              Honey Recipes
              </a>
              <a href="">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 15 15"><path fill="none" stroke="#e8b307" d="M4.72.5H2.5a2 2 0 0 0-2 2v2c0 5.523 4.477 10 10 10h2a2 2 0 0 0 2-2v-1.382a1 1 0 0 0-.553-.894l-2.416-1.208a1 1 0 0 0-1.396.578l-.297.893a1.21 1.21 0 0 1-1.385.804A6.047 6.047 0 0 1 3.71 6.547a1.21 1.21 0 0 1 .804-1.385l1.108-.37a1 1 0 0 0 .654-1.19L5.69 1.257A1 1 0 0 0 4.72.5Z"></path></svg>
              +40787426321
              </a>
            </div>
          </div>
          <div className="cmn-contact">
            <h2>Locatii</h2>
            <div className="info-contact">
              <a href="#location">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#e8b307" d="M12 13.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></path><path fill="#e8b307" d="M19.071 3.429h.001c3.905 3.905 3.905 10.237 0 14.142l-5.403 5.403a2.36 2.36 0 0 1-3.336 0l-5.375-5.375l-.028-.028c-3.905-3.905-3.905-10.237 0-14.142s10.236-3.905 14.141 0M5.99 4.489v.001a8.5 8.5 0 0 0 0 12.02l.023.024l.002.002l5.378 5.378a.86.86 0 0 0 1.214 0l5.403-5.404a8.5 8.5 0 0 0-.043-11.977A8.5 8.5 0 0 0 5.99 4.489"></path></svg>
              Brașov, Str. Bălcescu 62
              </a>
              <a href="#location">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#e8b307" d="M12 13.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></path><path fill="#e8b307" d="M19.071 3.429h.001c3.905 3.905 3.905 10.237 0 14.142l-5.403 5.403a2.36 2.36 0 0 1-3.336 0l-5.375-5.375l-.028-.028c-3.905-3.905-3.905-10.237 0-14.142s10.236-3.905 14.141 0M5.99 4.489v.001a8.5 8.5 0 0 0 0 12.02l.023.024l.002.002l5.378 5.378a.86.86 0 0 0 1.214 0l5.403-5.404a8.5 8.5 0 0 0-.043-11.977A8.5 8.5 0 0 0 5.99 4.489"></path></svg>
              Brașov, Str. 13 Decembrie
              </a>
            </div>
          </div>
          <div className="cmn-contact">
            <h2>Formular</h2>
            <Form
              method="post"
              action="/contact"
              style={{maxWidth: 400}}
              className="w-100 d-flex flex-wrap justify-center"
              >
              <div>
                <div>
                  <label className="form-label">Name</label>
                  <div className="input-container">
                    <input type="text" name="name" id="name" required />
                  </div>
                  <label className="form-label">Email</label>
                  <div className="input-container">
                    <input type="text" name="email" id="email" required />
                  </div>
                </div>
                <label>Curiosity?</label>
                <div>
                  <select name="subject" id="subject" required>
                    <option value="cakes">Cakes</option>
                    <option value="smoothie">Smoothie</option>
                    <option value="icecream">Ice cream</option>
                  </select>
                </div>
                <div className="mb-4 form-floating">
                  <textarea name="message" id="query" placeholder="Question" required></textarea>
                  <label>Your Curiosity</label>
                </div>
                <div>
                  <button>Send question</button>
                </div>
              </div>
            </Form>
          </div>
          <div>
        </div>
        </div>
    </div>
  );
}