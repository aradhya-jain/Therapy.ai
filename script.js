// import { config } from "dotenv"
// config()

// import { Configuration, OpenAIApi } from "openai"
// import readline from "readline"

// console.log(process.env.API_KEY);
// const openai =new OpenAIApi(new Configuration({
//     apiKey: process.env.API_KEY
// }))

// const userInterface = readline.cnpm run reateInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// userInterface.prompt()
// userInterface.on("line", async input => {
//    const res = await openai.createChatCompletion({
//         model: "gpt-3.5-turbo",
//         messages: [{ role: "user", content: input}]
        
//     })
//     console.log(res.data.choices[0].message.content)
//     userInterface.prompt()

// })

import { config } from "dotenv"
config()

import { Configuration, OpenAIApi } from "openai"
import readline from "readline"

console.log(process.env.API_KEY);

const openai = new OpenAIApi(new Configuration({
  apiKey: process.env.API_KEY
}))

const userInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
console.log("Hey, my name is Aradhya, welcome to your safe space, what's your name and how can I help you ?")

userInterface.question("Name: ", (name) => {
  userInterface.question("Message: ", async (message) => {
    const res = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message}]
    })
    console.log(`${name}: ${message}`)
    console.log(`Aradhya: ${res.data.choices[0].message.content}`)
    userInterface.prompt()
  })
}) 

