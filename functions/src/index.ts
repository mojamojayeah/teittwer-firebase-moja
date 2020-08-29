import * as admin from 'firebase-admin'

admin.initializeApp()

export { createUser } from './triggers/user/create'
export { createUserCallable } from './handlers/user/create'
