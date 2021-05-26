import { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import CreatePage from './pages/CreatePage'
import GamePage from './pages/GamePage'
import styled from 'styled-components/macro'
import Nav from './components/Nav'
import HistoryPage from './pages/HistoryPage'

export default function App() {
  const [players, setPlayers] = useState([])
  const [gameName, setGameName] = useState('')
  const [history, setHistory] = useState(loadFromLocal('games') ?? [])
  useEffect(() => {
    saveToLocal('games', history)
  }, [history])
  const newHistory = useHistory()

  return (
    <AppWrapper>
      <PageHeader>Score Keeper 3000</PageHeader>
      <Switch>
        <Route exact path="/">
          <CreatePage onSubmit={handleSubmit} />
        </Route>
        <Route exact path="/game">
          <GamePage
            onResetScores={resetScores}
            onEndGame={handleEndGame}
            onPlayerUpdate={updateScore}
            gameName={gameName}
            players={players}
          />
        </Route>
        <Route path="/history">
          <HistoryPage games={history} />
        </Route>
      </Switch>
      {/* <Header>you are on the {pages.id} page</Header> */}
      <Route path={['/', 'history']}>
        <Nav
          pages={[
            { title: 'Create', id: '/' },
            { title: 'History', id: 'history', disabled: !history.length },
          ]}
        />
      </Route>
    </AppWrapper>
  )
  function handleEndGame() {
    newHistory.push('history')
    const date = new Date().toLocaleDateString('de-DE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
    setHistory([{ players, gameName, date }, ...history])
  }
  function handleSubmit({ players, gameName }) {
    setPlayers(players)
    setGameName(gameName)
    newHistory.push('game')
  }
  function resetScores() {
    setPlayers(players.map(player => ({ ...player, score: 0 })))
  }
  function updateScore(index, value) {
    const playerToUpdate = players[index]

    setPlayers([
      ...players.slice(0, index),
      { ...playerToUpdate, score: playerToUpdate.score + value },
      ...players.slice(index + 1),
    ])
  }
  function loadFromLocal(key) {
    const jsonString = localStorage.getItem(key)
    return JSON.parse(jsonString)
  }
  function saveToLocal(key, data) {
    localStorage.setItem(key, JSON.stringify(data))
  }
}

const AppWrapper = styled.div`
  background-color: BlanchedAlmond;
  margin: 20px;

  section {
    background-color: thistle;
    margin: 20px;
    justify-content: center;
  }
`
const PageHeader = styled.h1`
  font-weight: 900;
  text-align: center;
  text-decoration: underline;
  background-color: Wheat;
  border-radius: 5px;
  padding: 15px;
`
