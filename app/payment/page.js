import PaymentForm from "@/components/payment/PaymentForm";

export default function PaymentPage() {
  return (
    <section class="container">
      <div class="bg-[#242526] p-6 rounded-lg max-w-xl mx-auto my-12">
        <h2 class="font-bold text-xl mb-8">Payment Details</h2>
        <PaymentForm />
      </div>
    </section>
  );
}
