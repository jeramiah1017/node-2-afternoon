let messages = []
let  id = 0

module.exports = {
    create: (req, res) => {
        const {text, time} = req.body
        messages.push ({text, time, id})
        id++
        res.status(200).send(messages)
    }, 
    read: (req, res) => {
        res.status(200).send(messages)

    },
    update: (req, res) => {
        const {text} = req.body
        // const updateID = req.params.id
        const messageIndex = messages.findIndex(el => el.id == req.params.id)
        let  message = messages[messageIndex]
       
        messages[messageIndex] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        }
       
       
       
        res.status(200).send(messages)

    },
    delete: (req, res) => {
        const {id} = req.params
        index = messages.findIndex(message => message.id === +id)
        messages.splice(index, 1)
        res.status(200).send(messages)

    }
}