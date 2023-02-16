# chatgpt_in_whatsapp
integrating chatGPT with WhatsApp using Venom and openAi API

## installation
run npm i

add a .env file with the following variables:
 - OPENAI_TOKEN
 - OPENAI_ORG_ID
 - BOT_NUMBER

 You can get OPENAI_TOKEN and OPENAI_ORG_ID for free by creating a account at the OpenAI website.

 The BOT_NUMBER must be your own phone number (with country code included) followed by '@c.us'.

 Ex: 00123459876@c.us

 ## how to run
 On terminal, run node . (or nodemon if you have it installed), then scan the QR code with your phone.

 Once you make throught this process, a directory called 'tokens' will be created in the root of the app directory

 and you'll no longer need to scan it.

 ## how to use it
 After successfully setting it up, you'll only need to start a messagem with /bot to get a chatGPT responnse
 
 or with /img the get an AI generated image. 
