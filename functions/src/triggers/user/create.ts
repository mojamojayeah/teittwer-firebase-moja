import * as functions from 'firebase-functions'
import { firestore } from 'firebase-admin'
import { FieldValue } from '@google-cloud/firestore'

export const createUser = functions.auth.user().onCreate(async (data) => {
  // TODO: 初回認証時にユーザーデータを作成させる。

  return { message: 'New User is created successfully.' }
})
