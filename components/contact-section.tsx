"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, CheckCircle, AlertCircle } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"
import { useForm, ValidationError } from "@formspree/react"

export function ContactSection() {
  const { isDark } = useTheme()
  const [state, handleSubmit] = useForm("xqaboaop")

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>
            <span className={isDark ? "text-red-400" : "text-red-600"}>Contact</span>
          </h2>
          <div className={`w-24 h-1 mx-auto ${isDark ? "bg-red-400" : "bg-red-600"}`}></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-3xl font-bold mb-8 ${isDark ? "text-white" : "text-gray-900"}`}>Get In Touch</h3>
            <p className={`text-lg mb-8 leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
              Feel free to reach out through any of the channels below.
            </p>

            <div className="space-y-6">
              <motion.a
                href="tel:+919952846406"
                className={`flex items-center space-x-4 p-4 border-2 rounded-lg transition-all duration-300 cursor-pointer ${
                  isDark ? "border-gray-700 hover:border-red-400" : "border-gray-200 hover:border-red-600"
                }`}
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <Phone className={isDark ? "text-red-400" : "text-red-600"} size={24} />
                <div>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>Phone</p>
                  <p className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>9952846406</p>
                </div>
              </motion.a>

              <motion.div
                onClick={() => window.location.href = "mailto:tharun01012005@gmail.com"}
                className={`flex items-center space-x-4 p-4 border-2 rounded-lg transition-all duration-300 cursor-pointer ${
                  isDark ? "border-gray-700 hover:border-red-400" : "border-gray-200 hover:border-red-600"
                }`}
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <Mail className={isDark ? "text-red-400" : "text-red-600"} size={24} />
                <div>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>Email</p>
                  <p className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>tharun01012005@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
                className={`flex items-center space-x-4 p-4 border-2 rounded-lg transition-all duration-300 ${
                  isDark ? "border-gray-700 hover:border-red-400" : "border-gray-200 hover:border-red-600"
                }`}
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <MapPin className={isDark ? "text-red-400" : "text-red-600"} size={24} />
                <div>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>Location</p>
                  <p className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
                    Bhavani, Tamil Nadu, India
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div
              className={`border-2 rounded-xl p-8 ${
                isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
              }`}
            >
              <h3 className={`text-2xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>Send a Message</h3>

              {state.succeeded ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`text-center py-8 ${isDark ? "text-green-400" : "text-green-600"}`}
                >
                  <CheckCircle size={48} className="mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-2">Message Sent Successfully!</h4>
                  <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className={`block text-sm font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      className={`w-full px-4 py-3 border-2 rounded-lg transition-colors duration-300 focus:outline-none ${
                        isDark
                          ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-red-400"
                          : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-red-600"
                      }`}
                      placeholder="Your Name"
                    />
                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className={`block text-sm font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      className={`w-full px-4 py-3 border-2 rounded-lg transition-colors duration-300 focus:outline-none ${
                        isDark
                          ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-red-400"
                          : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-red-600"
                      }`}
                      placeholder="your.email@example.com"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className={`block text-sm font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className={`w-full px-4 py-3 border-2 rounded-lg transition-colors duration-300 focus:outline-none resize-none ${
                        isDark
                          ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-red-400"
                          : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-red-600"
                      }`}
                      placeholder="Your message here..."
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {state.errors && state.errors.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex items-center space-x-2 p-3 rounded-lg ${
                        isDark ? "bg-red-900/20 text-red-400" : "bg-red-100 text-red-600"
                      }`}
                    >
                      <AlertCircle size={16} />
                      <span className="text-sm">Please check the form for errors and try again.</span>
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={state.submitting}
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                      state.submitting
                        ? isDark
                          ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                          : "bg-gray-400 text-gray-600 cursor-not-allowed"
                        : isDark
                          ? "bg-red-600 text-white hover:bg-red-700"
                          : "bg-red-600 text-white hover:bg-red-700"
                    }`}
                    whileHover={!state.submitting ? { scale: 1.02 } : {}}
                    whileTap={!state.submitting ? { scale: 0.98 } : {}}
                  >
                    {state.submitting ? "Sending..." : "Send Message"}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
