import { Grid } from "@mui/material"
import { Container } from "@mui/material"
import React from "react"
import { useAppSelector } from "../../store/store"

export default function GamesPage() {
    const { games } = useAppSelector(state => state.games)
    return (
        <Container>
            {games && games.map(game => (
                <Grid key={game._id}>
                    <h4>{game.address}</h4>
                </Grid>
            ))}
        </Container>
    )
}