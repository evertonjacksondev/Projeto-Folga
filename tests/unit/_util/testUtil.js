import { jest } from '@jest/globals'
import { request } from 'http'
import { Readable, Writable } from 'stream'
import { handler } from '../../../server/routes'

export default class TestUtil {


  static generateReadableStream(data) {

    return new Readable({
      read() {
        for (const item of data) {
          this.push(item)
        }
        this.push(null)
      }

    })
  }

  static generateWritableStream(onData) {

    return new Writable({
      write(chunk, enc, cb) {
        onData(chunk)
        cb(null, chunk,)
      }

    })
  }


  static defaultHandleParams() {
    const requestStream = TestUtil.generateReadableStream(['body da requisição'])
    const response = TestUtil.generateWritableStream(() => { })
    const data = {
      request: Object.assign(requestStream, {
        headers: {},
        method: 'GET',
        url: ''
      }),
      response: Object.assign(response, {
        writeHead: jest.fn(),
        end: jest.fn()
      })
    }
  
    return {
      values: () => Object.values(data),
      ...data
    }
  }
}