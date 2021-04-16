import { createSlice} from '@reduxjs/toolkit'


const initialState = {
    notesList : []
}


const notesSlice = createSlice({
    name:'notesAction',
    initialState,
    reducers: {
        saveNote: (state,action) => {
            state.notesList.push(action.payload)
        }
    }
});

export const {saveNote} = notesSlice.actions


export const selectNotes = state => state.notesList


export default notesSlice.reducer