import React, { useState } from "react"
// import PropTypes from "prop-types"

import Input from "../Input"
import {
  PlayersStyled,
  AddPlayerArea,
  ButtonStyled,
  ListPlayers,
  Teams,
  GenerateButton,
  DividedTeams,
} from "./style"

const Players = () => {
  const [addedPlayers, setAddedPlayers] = useState([])
  const [dividedTeams, setDividedTeams] = useState(null)
  const [playerValue, setPlayer] = useState("")
  const [teams, setNrOfTeams] = useState(2)

  const addPlayer = e => {
    e.preventDefault()
    const tempArr = addedPlayers
    tempArr.push(playerValue)
    setAddedPlayers(tempArr)
    setPlayer("")
  }

  const setNumber = value => {
    let newNumber = value <= 2 ? 2 : value
    newNumber =
      newNumber > addedPlayers.length ? addedPlayers.length : newNumber
    setNrOfTeams(newNumber)
  }

  const generateTeams = () => {
    let players = addedPlayers
    let tempTeams = Array.from({ length: parseInt(teams, 10) }, () => [])
    Array.from(Array(players.length)).forEach((item, index) => {
      let onePlayer = players.splice(getRandom(0, players.length), 1)
      tempTeams[index % teams].push(onePlayer[0])
    })
    setDividedTeams(tempTeams)
  }

  const getRandom = (min, max) => {
    return Math.random() * (max - min) + min
  }

  return (
    <PlayersStyled>
      {!dividedTeams && (
        <div>
          <AddPlayerArea>
            <Input
              label="Player"
              value={playerValue}
              handleChange={setPlayer}
            ></Input>
            <ButtonStyled onClick={addPlayer}>Add</ButtonStyled>
          </AddPlayerArea>
          {addedPlayers.length > 0 && (
            <ListPlayers>
              {addedPlayers.map((item, index) => {
                return (
                  <span key={`Player-${index}`}>
                    {index + 1}. {item}
                  </span>
                )
              })}
            </ListPlayers>
          )}
          <Teams>
            <Input
              type="number"
              label="Nr of teams"
              handleChange={setNumber}
              value={teams}
            ></Input>
            <GenerateButton onClick={generateTeams}>
              Generate teams
            </GenerateButton>
          </Teams>
        </div>
      )}
      {dividedTeams && (
        <DividedTeams>
          {dividedTeams.map((teams, index) => {
            return (
              <ListPlayers key={`Team-${index}`}>
                <h4>Team {index + 1}</h4>
                {teams.map((name, innerIndex) => {
                  return <span key={`TeamMember-${innerIndex}`}>{name}</span>
                })}
              </ListPlayers>
            )
          })}
        </DividedTeams>
      )}
    </PlayersStyled>
  )
}

Players.propTypes = {}

Players.defaultProps = {}

export default Players
