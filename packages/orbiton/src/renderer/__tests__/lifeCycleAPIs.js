/**
 * Copyright (c) 2021 - present Beignana Jim Junior and other contributors.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
import Orbiton from '../../index'
import append from '../append'
import Component from '../createComponent'

const root = document.createElement('div')
document.body.appendChild(root)
class Header extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      text: ""
    }
  }
  Mounted() {
    this.updateState({ text: "hello" })
  }
  render() {
    return <nav>
      <button id="button"></button>
      <p id="text">{this.state.text}</p>
    </nav>
  }
}

test("Test `Mounted` method", () => {
  append(<div><Header /></div>, root)
  const text = document.getElementById('text')
  expect(text.textContent).toEqual('hello')
})
