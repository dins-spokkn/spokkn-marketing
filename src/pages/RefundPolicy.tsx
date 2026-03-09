import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-20 md:py-32 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Refund Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: January 2024</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. General Policy</h2>
            <p className="text-muted-foreground">
              We want you to be satisfied with Spokkn. If you're not happy with your purchase, we offer refunds under certain conditions outlined below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Eligibility for Refunds</h2>
            <p className="text-muted-foreground mb-4">
              You may be eligible for a refund if:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>You request a refund within 7 days of purchase</li>
              <li>You have not attended more than 2 sessions</li>
              <li>Technical issues prevented you from using the service</li>
              <li>You were charged incorrectly</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Non-Refundable Items</h2>
            <p className="text-muted-foreground mb-4">
              The following are not eligible for refunds:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Subscriptions after 7 days of purchase</li>
              <li>Sessions that have been completed</li>
              <li>Promotional or discounted purchases (unless required by law)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. How to Request a Refund</h2>
            <p className="text-muted-foreground mb-4">
              To request a refund:
            </p>
            <ol className="list-decimal pl-6 text-muted-foreground space-y-2">
              <li>Contact our support team at support@spokkn.com</li>
              <li>Include your order number and reason for the refund</li>
              <li>Allow 5-7 business days for processing</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Refund Processing</h2>
            <p className="text-muted-foreground">
              Approved refunds will be processed to your original payment method within 7-10 business days. You will receive a confirmation email once the refund has been issued.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Subscription Cancellations</h2>
            <p className="text-muted-foreground">
              You can cancel your subscription at any time. Cancellations will take effect at the end of your current billing period, and you will not be charged for subsequent periods.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
            <p className="text-muted-foreground">
              If you have questions about our Refund Policy, please contact us at support@spokkn.com
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RefundPolicy;
