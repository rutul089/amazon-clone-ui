export const selectLibrary = (libraryID) => {
    //Action require two param 1.type and 2.payload 
    return {
        type:'select_library',
        payload:libraryID
    };
}