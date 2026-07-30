import { useState } from 'react'
import heroImg from './assets/cards.png'
import './StartScreen.css'

const usedServerIDs = new Set()

function StartScreen() {
  const [serverID, setServerID] = useState('')

  function hostGame() {
    let numericID

    do {
      numericID = crypto.getRandomValues(new Uint32Array(1))[0] % 100000000
    } while (usedServerIDs.has(numericID))

    usedServerIDs.add(numericID)

    const digits = String(numericID).padStart(8, '0')
    setServerID(`${digits.slice(0, 3)}.${digits.slice(3, 5)}.${digits.slice(5)}`)
  }

  async function copyServerID() {
    if (!serverID) return

    await navigator.clipboard.writeText(serverID)
  }

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
        </div>
        <div>
          <h1>Lucky Monsters</h1>
          <p>
            Thanks for Playtesting!
          </p>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="hosting">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#user-host"></use>
          </svg>
          <h2>Host a Game</h2>
          <p>Create a server id</p>
          <ul>
            <button className="startButtons" id="hostButton" onClick={hostGame}>
              Host
            </button>
            <button
              id="hostIdButton"
              onClick={copyServerID}
              disabled={!serverID}
              title="Copy server ID"
            >
              {serverID || 'Server ID'}
            </button>
          </ul>
        </div>

        <div id="joining">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#user-join"></use>
          </svg>
          <h2>Join a Game</h2>
          <p>Type a friends server id</p>
          <ul>
            <input id="joinInput" />
            <button className="startButtons">
              Join
            </button>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default StartScreen
