+++
fragment = "contact"
date = "2020-04-01"
weight = 110

background = "secondary"
form_name = "defaultContact"

# PostURL can be used with backends such as mailout from caddy
post_url = "https://formspree.io/mvoworgq"
email = "till.wegmueller@openflowlabs.com"

# Optional google captcha
# Won't be used if netlify is enabled
[recaptcha]
  sitekey = "6Ld5S_IUAAAAAI6t7w1OIl0YXOiEe1SarGfg6NV9"

[message]
  success = "Thank you for awesomely contacting us."
  error = "Message could not be send. Please contact us at support@openflowlabs.com instead."

# Only defined fields are shown in contact form
[fields.name]
  text = "Your Name *"
  error = "Please enter your name"

[fields.email]
  text = "Your Email *"
  error = "Please enter your email address"

[fields.phone]
  text = "Your Phone *"
  error = "Please enter your phone number"

[fields.message]
  text = "Your Message *"
  error = "Please enter a message"

# Optional hidden form fields
# Fields "page" and "site" will be autofilled
[[fields.hidden]]
  name = "page"
+++

