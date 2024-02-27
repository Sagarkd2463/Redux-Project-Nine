import { createSlice } from '@reduxjs/toolkit';
import { userList } from '../components/Data';

const userSlice = createSlice({
    name:"users",
    initialState: userList,
    reducers:{
        addUser: (state, action) => {
            state.push(action.payload);
        },

        updateUser: (state, action) => {
            const { id, name, email, profession } = action.payload;
            const updateUser = state.find((user) => user.id == id);

            if(updateUser){
                updateUser.name = name;
                updateUser.email = email;
                updateUser.profession = profession;
            }
        },

        deleteUser: (state, action) => {
            const { id } = action.payload;
            const deleteUser = state.find((user) => user.id == id);

            if(deleteUser){
                return state.filter(f => f.id !== id);
            }
        },
    },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;