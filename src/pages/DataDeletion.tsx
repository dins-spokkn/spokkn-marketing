import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Trash2, Shield, Clock } from "lucide-react";

const DataDeletion = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-20 md:py-32 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Account & Data Deletion</h1>
        <p className="text-muted-foreground mb-8">Spokkn - Request deletion of your account and associated data</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section className="bg-muted/50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Trash2 className="w-6 h-6" />
              How to Request Account Deletion
            </h2>
            <p className="text-muted-foreground mb-4">
              To request deletion of your Spokkn account and associated data, please follow these steps:
            </p>
            <ol className="list-decimal pl-6 text-muted-foreground space-y-3">
              <li>
                <strong>Send an email</strong> to{" "}
                <a href="mailto:support@spokkn.com" className="text-primary hover:underline">
                  support@spokkn.com
                </a>{" "}
                with the subject line "Account Deletion Request"
              </li>
              <li>
                <strong>Include your account information:</strong>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Registered email address</li>
                  <li>Username (if applicable)</li>
                  <li>Any additional identifying information</li>
                </ul>
              </li>
              <li>
                <strong>Confirm your identity:</strong> We may ask you to verify your identity to ensure account security
              </li>
              <li>
                <strong>Wait for confirmation:</strong> You will receive a confirmation email once your request is processed
              </li>
            </ol>
            <div className="mt-6">
              <Button asChild size="lg">
                <a href="mailto:support@spokkn.com?subject=Account%20Deletion%20Request">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Deletion Request
                </a>
              </Button>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6" />
              Data That Will Be Deleted
            </h2>
            <p className="text-muted-foreground mb-4">
              When you request account deletion, the following data will be permanently removed:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Account profile information (name, email, profile picture)</li>
              <li>Session participation history</li>
              <li>Learning preferences and settings</li>
              <li>Communication history and messages</li>
              <li>Device and usage data linked to your account</li>
              <li>Any other personal information associated with your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Clock className="w-6 h-6" />
              Data Retention & Processing Time
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Processing Time:</h3>
                <p>
                  Account deletion requests are typically processed within <strong>30 days</strong> of receiving your request.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Data Retained:</h3>
                <p className="mb-2">
                  Some data may be retained for legal, security, or business purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Transaction records:</strong> Kept for up to 7 years for tax and accounting purposes
                  </li>
                  <li>
                    <strong>Legal compliance data:</strong> Retained as required by applicable laws and regulations
                  </li>
                  <li>
                    <strong>Anonymized analytics:</strong> Aggregated, non-identifiable data may be retained for service improvement
                  </li>
                  <li>
                    <strong>Backup systems:</strong> Data in backup systems will be deleted within 90 days
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-amber-50 dark:bg-amber-950/20 p-6 rounded-lg border border-amber-200 dark:border-amber-900">
            <h2 className="text-2xl font-semibold mb-4">Important Notes</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>
                <strong>Account deletion is permanent</strong> and cannot be undone. You will lose access to all your data and session history.
              </li>
              <li>
                If you have active subscriptions, please cancel them before requesting account deletion to avoid future charges.
              </li>
              <li>
                You may need to verify your identity before we can process your deletion request.
              </li>
              <li>
                If you're experiencing issues with the app, consider contacting support first - we may be able to help resolve your concerns.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Alternative Options</h2>
            <p className="text-muted-foreground mb-4">
              If you're not ready to delete your account permanently, consider these alternatives:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>
                <strong>Deactivate your account:</strong> Temporarily disable your account without deleting data
              </li>
              <li>
                <strong>Update privacy settings:</strong> Control what information is shared and visible
              </li>
              <li>
                <strong>Unsubscribe from emails:</strong> Stop receiving marketing communications while keeping your account
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have questions about account deletion or data retention, please contact us at{" "}
              <a href="mailto:support@spokkn.com" className="text-primary hover:underline">
                support@spokkn.com
              </a>
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DataDeletion;
