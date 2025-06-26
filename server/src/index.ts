import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { listAllExpenses } from './expenses.js'

const app = new Hono()

app.get('/api', (c) => {
  return c.json({
    Hello: "World"
  })
})


app.get('/api/v1/expenses/', (c) => {
  const expenses = listAllExpenses()
  return c.json(expenses)
})

app.get('/api/v1/expenses/:id', (c) => {

  const {id} = c.req.param()
  return c.json({
    Hello: "World " + id
  })
})

app.get('/page', (c) => {
  return c.html("<h1>Hello HTML</h1>")
})

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
