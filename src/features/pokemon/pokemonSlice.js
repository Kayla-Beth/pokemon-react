// src/features/pokemon/pokemonSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch Pokémon data from the API
export const fetchPokemon = createAsyncThunk(
  'pokemon/fetchPokemon',
  async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=50');
    return response.data.results; // Array of Pokémon objects
  }
);

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    list: [],          // Array of Pokémon
    status: 'idle',    // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {
    addPokemon(state, action) {
      state.list.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemon.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPokemon.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchPokemon.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
