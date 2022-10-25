const express = require ('express');

const app = express();
const port = 3000

app.get('/', (req: any, res: { send: (arg0: string) => void; }) => {
    res.send('Hello word')
})

// app.listen(3000, console.log("server started on port 3000"));
// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
//   })

  app.post('/', (req: any, res: { send: (arg0: string) => void; }) => {
    res.send('I am a POST request')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
