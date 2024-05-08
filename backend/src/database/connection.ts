
import { MongoClient, ServerApiVersion,Db  } from 'mongodb'
const uri = process.env.DATA_BASE_APPLY_URI
const dbName = process.env.DATA_BASE_MONGO

if (!uri) {
  console.error('La variable de entorno DATA_BASE_MONGO no está definida')
  process.exit(1)
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
})


class Database {
    private client: MongoClient
    private db: Db | null
  
    constructor() {
      this.client = client
      this.db = null
    }
  
    async connect(): Promise<void> {
      try {
        await this.client.connect()
        console.log('Connected to the database')
        this.db = this.client.db(dbName)
      } catch (err) {
        console.error('Error connecting to the database:', err)
      }
    }
  
    getDB(): Db | null {
      return this.db
    }
  }
  
  const database = new Database()
  

export default database