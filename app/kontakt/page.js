import PageHeader from "../components/global-components/page-header";
import ContactForm from "../components/kontakt-page/contact-form";
import ContactSection from "../components/kontakt-page/contact-section";

export default function Kontakt() {
  return (
    <>
      <PageHeader>Kontakt</PageHeader>
      <ContactSection
      // title={titlePl}
      // address={address}
      // phoneNumber={phoneNumber}
      // phoneNumber2={phoneNumber2}
      // email={eMail}
      // img={image ? image : ""}
      />
      <ContactForm />
    </>
  );
}
