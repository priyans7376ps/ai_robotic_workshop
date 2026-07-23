import { useMemo, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

function isValidEmail(email) {
  return /^\S+@\S+\.\S+$/.test(String(email).trim());
}

function normalizePhone(phone) {
  return String(phone).replace(/\D/g, "");
}

function isValidPhone(phone) {
  const digits = normalizePhone(phone);
  return digits.length >= 10 && digits.length <= 13;
}

export default function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const isValid = useMemo(() => {
    return (
      name.trim().length > 1 &&
      isValidEmail(email) &&
      isValidPhone(phone)
    );
  }, [name, email, phone]);


  async function onSubmit(e) {
    e.preventDefault();

    if (!isValid || loading) return;


    if (!API_URL) {
      setToast({
        type: "error",
        message: "API URL is missing",
      });
      return;
    }


    setLoading(true);
    setToast(null);


    try {

      const response = await fetch(
        `${API_URL}/api/enquiry`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name: name.trim(),
            email: email.trim(),
            phone: normalizePhone(phone),
          }),
        }
      );


      const data = await response.json();


      if (!response.ok || data.success !== true) {
        throw new Error(
          data.message || "Submission failed"
        );
      }


      setToast({
        type: "success",
        message:
          data.message ||
          "Enquiry submitted successfully",
      });


      setName("");
      setEmail("");
      setPhone("");


    } catch (error) {

      console.error(error);

      setToast({
        type: "error",
        message:
          error.message ||
          "Something went wrong",
      });

    } finally {

      setLoading(false);


      setTimeout(() => {
        setToast(null);
      }, 4000);

    }
  }


  return (
    <section
      id="registration"
      className="mt-12 scroll-mt-24"
    >

      <h2 className="text-2xl font-semibold">
        Registration Form
      </h2>


      <p className="mt-2 text-gray-300">
        Fill in your details and we'll confirm your seat.
      </p>


      <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">

        <form
          className="grid gap-4 md:grid-cols-2"
          onSubmit={onSubmit}
        >


          <label>
            <span className="text-sm text-gray-300">
              Name
            </span>

            <input
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-2"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              placeholder="Enter name"
              required
            />

          </label>



          <label>
            <span className="text-sm text-gray-300">
              Email
            </span>

            <input
              type="email"
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-2"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />

          </label>



          <label className="md:col-span-2">

            <span className="text-sm text-gray-300">
              Phone Number
            </span>

            <input
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-2"
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
              placeholder="9876543210"
              inputMode="tel"
              required
            />

          </label>



          <div className="md:col-span-2 flex justify-between items-center">

            <p className="text-xs text-gray-400">

              {isValid
                ? "All validations passed."
                : "Enter valid name, email and phone."}

            </p>



            <button
              type="submit"
              disabled={!isValid || loading}
              className="rounded-xl bg-emerald-500 px-5 py-2 font-semibold text-black disabled:opacity-50"
            >

              {
                loading
                  ? "Submitting..."
                  : "Submit Enquiry"
              }

            </button>


          </div>



          {toast && (

            <div
              className={`md:col-span-2 rounded-xl p-4 ${
                toast.type === "success"
                ? "bg-emerald-500/20 text-emerald-200"
                : "bg-red-500/20 text-red-200"
              }`}
            >

              {toast.message}

            </div>

          )}


        </form>

      </div>

    </section>
  );
}