import { v4 as uuidv4 } from 'uuid'
import { AsyncLocalStorage } from 'async_hooks'

export function traceMiddleware(als: AsyncLocalStorage<Map<string, string>>) {
  return (req, res, next) => {
    const store = new Map()
    store.set('traceId', req.headers['x-request-id'] || uuidv4())
    als.run(store, () => next())
  }
}
