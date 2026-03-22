import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar variant="dark" />
      <div className="container py-20 md:py-32 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms and Conditions</h1>
        <p className="text-muted-foreground mb-8">Last updated: January 2024</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing and using Spokkn, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. User Accounts</h2>
            <p className="text-muted-foreground mb-4">
              To use our services, you must:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Be at least 13 years old</li>
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account</li>
              <li>Notify us immediately of any unauthorized use</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. User Conduct</h2>
            <p className="text-muted-foreground mb-4">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Use the platform for any illegal purpose</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Share inappropriate or offensive content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Session Participation</h2>
            <p className="text-muted-foreground">
              Users are expected to participate respectfully in all sessions. We reserve the right to remove users who violate our community guidelines.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
            <p className="text-muted-foreground">
              All content on Spokkn, including text, graphics, logos, and software, is the property of Spokkn and protected by copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
            <p className="text-muted-foreground">
              Spokkn is provided "as is" without warranties of any kind. We are not liable for any damages arising from your use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Changes to Terms</h2>
            <p className="text-muted-foreground">
              We may modify these terms at any time. Continued use of our services after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
            <p className="text-muted-foreground">
              For questions about these Terms and Conditions, contact us at legal@spokkn.com
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
