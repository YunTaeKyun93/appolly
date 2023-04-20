import classNames from "classnames/bind";
import styles from "./contact.module.scss";
import ContactEmail from "../../molecules/contact-email";
import ContactPhone from "../../molecules/contact-phone";
import ContactSns from './../../molecules/contact-sns/index';

export default function Contact() {
  const ss = classNames.bind(styles);

  return (
    <div className={ss("wrapper")}>
      <div className={ss("container")}>
        <div className={ss('contact-container')}>
          <ContactEmail />
          <ContactPhone />
        </div>
        <div>
          <ContactSns/>
        </div>
      </div>
    </div>
  );
}
