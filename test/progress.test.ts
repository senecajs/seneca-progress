/* Copyright © 2026 Seneca Project Contributors, MIT License. */
import { describe, test } from 'node:test'
import { expect } from '@hapi/code'

import Seneca from 'seneca'
import SenecaMsgTest from 'seneca-msg-test'
// import { Maintain } from '@seneca/maintain'

import ProgressDoc from '..'
import Progress from '..'

import BasicMessages from './basic.messages'

describe('progress', () => {
  test('happy', async () => {
    // console.log(Progress)
    expect(Progress).exist()
    expect(ProgressDoc).exist()
    const seneca = Seneca({ legacy: false })
      .test()
      .use('promisify')
      .use('entity')
      .use(Progress)
    await seneca.ready()
  })

  test('simple', async () => {
    const seneca = await makeSeneca()

    let p0 = await seneca.post('sys:progress,create:progress', {
      kind: 'simple',
    })
    // console.log('p0', p0)
    expect(p0.ok).true()
    expect(p0.item).includes({
      kind: 'simple',
      step: 10,
      start: 0,
      end: 100,
      val: 0,
      status: 'active',
    })

    let p0g0 = await seneca.post('sys:progress,get:progress', {
      id: p0.item.id,
    })
    // console.log('p0g0', p0g0)
    expect(p0g0.ok).true()
    expect(p0g0.item).includes({
      kind: 'simple',
      step: 10,
      start: 0,
      end: 100,
      val: 0,
      status: 'active',
    })

    let p0g1 = await seneca.post('sys:progress,get:progress', {
      id: p0.item.id,
      full: true,
    })
    // console.log('p0g1', p0g1)
    expect(p0g1.ok).true()
    expect(p0g1.item).includes({
      kind: 'simple',
      step: 10,
      start: 0,
      end: 100,
      val: 0,
      status: 'active',
    })
    expect(p0g1.list).equal([])

    let p0u0 = await seneca.post('sys:progress,update:progress', {
      id: p0.item.id,
      how: 'step',
    })
    // console.log('p0u0', p0u0)
    expect(p0u0.ok).true()
    expect(p0u0.item).includes({
      entity$: '-/sys/progress',
      kind: 'simple',
      step: 10,
      start: 0,
      end: 100,
      val: 10,
      status: 'active',
    })
    expect(p0u0.entry).includes({
      entity$: '-/sys/progressentry',
    })
    expect(p0u0.list).equal([])

    let p0u0g0 = await seneca.post('sys:progress,get:progress', {
      id: p0u0.item.id,
    })
    // console.log('p0u0g0', p0u0g0)
    expect(p0u0g0.ok).true()
    expect(p0u0g0.item).includes({
      entity$: '-/sys/progress',
      kind: 'simple',
      step: 10,
      start: 0,
      end: 100,
      val: 10,
      status: 'active',
    })
    expect(p0u0g0.list).equal([])

    let p0u0g1 = await seneca.post('sys:progress,get:progress', {
      id: p0u0.item.id,
      full: true,
    })
    // console.log('p0u0g1', p0u0g1)
    expect(p0u0g1.ok).true()
    expect(p0u0g1.item).includes({
      entity$: '-/sys/progress',
      kind: 'simple',
      step: 10,
      start: 0,
      end: 100,
      val: 10,
      status: 'active',
    })
    expect(p0u0g1.list[0]).includes({
      entity$: '-/sys/progressentry',
    })

    let p0u1 = await seneca.post('sys:progress,update:progress', {
      id: p0.item.id,
      how: 'val',
      val: 95,
      note: 'aaa',
      full: true,
    })
    // console.log('p0u1', p0u1)
    expect(p0u1.ok).true()
    expect(p0u1.item).includes({
      entity$: '-/sys/progress',
      kind: 'simple',
      step: 10,
      start: 0,
      end: 100,
      val: 100,
      status: 'active',
    })
    expect(p0u1.entry).includes({
      entity$: '-/sys/progressentry',
      note: 'aaa',
    })
    expect(p0u1.list[0]).includes({
      entity$: '-/sys/progressentry',
    })
    expect(p0u1.list[1]).includes({
      entity$: '-/sys/progressentry',
      note: 'aaa',
    })
  })

  test('basic.messages', async () => {
    const seneca = await makeSeneca()
    await SenecaMsgTest(seneca, BasicMessages)()
  })

  // test('maintain', Maintain)
})

async function makeSeneca(options?: any) {
  options = options || {}
  const seneca = Seneca({ legacy: false })
    .test()
    .use('promisify')
    .use('entity')
    .use('entity-util', { when: { active: true, human: 'y' } })
    .use(Progress, options.progress)

  await seneca.ready()

  // print all message patterns
  // console.log(seneca.list())

  return seneca
}
