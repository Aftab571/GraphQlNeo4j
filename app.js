import resolvers from './resolvers.js'
import schema from './schema.js'
import {graphqlHTTP} from 'express-graphql'
import express from 'express'

const app = express()
const port = 3000

const root = resolvers;

app.use('/graphql',graphqlHTTP({
    schema:schema,
    graphiql:true,
    rootValue: root
}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})