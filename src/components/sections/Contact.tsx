'use client'

import { useState } from 'react'

export function Contact(): React.JSX.Element {
  const [isSuccess, setIsSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage(null)

    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch("https://formspree.io/f/mreweyjk", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setIsSuccess(true)
        ;(e.target as HTMLFormElement).reset()
      } else {
        const data = await response.json()
        setErrorMessage(data.error || "Form submission failed. Please try again.")
      }
    } catch (error) {
      setErrorMessage("An error occurred while sending your message.")
      console.error("Formspree submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="bg-zinc-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          
          {/* Header Column */}
          <div className="max-w-xl lg:max-w-lg">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#A95633]">
              CONTACT
            </p>
            <h2 className="mt-4 font-heading text-5xl tracking-[0.02em] uppercase sm:text-6xl">
              GET IN TOUCH
            </h2>
            <p className="mt-6 font-body text-lg leading-8 text-zinc-400">
              For inquiries, literary discussions, events, or questions about my manuscripts, send a message using the form.
            </p>
          </div>

          {/* Formspree Form Column */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
            <div>
              <label htmlFor="name" className="block font-heading text-sm uppercase tracking-wider text-zinc-300">
                NAME
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-2 h-12 w-full border border-zinc-800 bg-zinc-900/50 p-3 font-body text-white outline-none transition-colors focus:border-[#A95633]"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-heading text-sm uppercase tracking-wider text-zinc-300">
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-2 h-12 w-full border border-zinc-800 bg-zinc-900/50 p-3 font-body text-white outline-none transition-colors focus:border-[#A95633]"
                placeholder="yourname@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-heading text-sm uppercase tracking-wider text-zinc-300">
                MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="mt-2 w-full border border-zinc-800 bg-zinc-900/50 p-3 font-body text-white outline-none transition-colors focus:border-[#A95633]"
                placeholder="Write your message"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-zinc-800 px-8 py-3.5 font-heading text-sm uppercase tracking-wider text-white transition-colors hover:bg-[#A95633] disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send message'}
              </button>
            </div>

            {/* Status Messages */}
            {isSuccess && (
              <p className="font-body text-sm text-emerald-400 mt-2">
                Message sent successfully! Martin will get back to you shortly.
              </p>
            )}

            {errorMessage && (
              <p className="font-body text-sm text-rose-400 mt-2">
                {errorMessage}
              </p>
            )}
          </form>

        </div>
      </div>
    </section>
  )
}